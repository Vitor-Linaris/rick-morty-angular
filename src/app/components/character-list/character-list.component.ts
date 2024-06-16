import { Component, OnInit, HostListener } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  currentPage: number = 1;
  loading: boolean = false;
  totalPages: number = 1;

  nameFilter: string = '';
  statusFilter: string = '';
  speciesFilter: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    if (this.loading || this.currentPage > this.totalPages) return;
    this.loading = true;
    const filters = {
      name: this.nameFilter,
      status: this.statusFilter,
      species: this.speciesFilter,
    };
    this.rickAndMortyService
      .filterCharacters(filters, this.currentPage)
      .subscribe((data: any) => {
        this.totalPages = data.info.pages;
        this.characters = [...this.characters, ...data.results];
        this.currentPage++;
        this.loading = false;
      });
  }

  onFilterChange(): void {
    this.characters = [];
    this.currentPage = 1;
    this.totalPages = 1;
    this.loadCharacters();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      this.loadCharacters();
    }
  }
}
