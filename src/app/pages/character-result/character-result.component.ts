import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character-result',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-result.component.html',
  styleUrl: './character-result.component.scss',
})
export class CharacterResultComponent {
  searchQuery: string = '';
  searchResults: any = [];

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'];
      if (this.searchQuery) {
        this.rickAndMortyService
          .filterCharactersGlobal(this.searchQuery)
          .subscribe((data: any) => {
            this.searchResults = data.results || [];
          });
      }
    });
  }
}
