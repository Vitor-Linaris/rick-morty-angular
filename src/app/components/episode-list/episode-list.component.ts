import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss',
})
export class EpisodeListComponent implements OnInit {
  episodes: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  loading: boolean = false;
  query: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    if (this.loading || this.currentPage > this.totalPages) return;
    this.loading = true;
    if (this.query) {
      this.rickAndMortyService
        .filterEpisodes(this.query, this.currentPage)
        .subscribe((data: any) => {
          this.totalPages = data.info.pages;
          this.episodes = [...this.episodes, ...data.results];
          this.currentPage++;
          this.loading = false;
        });
    } else {
      this.rickAndMortyService
        .getEpisodes(this.currentPage)
        .subscribe((data: any) => {
          this.totalPages = data.info.pages;
          this.episodes = [...this.episodes, ...data.results];
          this.currentPage++;
          this.loading = false;
        });
    }
  }

  onFilterChange(): void {
    this.episodes = [];
    this.currentPage = 1;
    this.totalPages = 1;
    this.loadEpisodes();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      this.loadEpisodes();
    }
  }
}
