import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-episode-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.scss',
})
export class EpisodeDetailsComponent {
  episode: any;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.rickAndMortyService.getEpisodeById(id).subscribe((data: any) => {
        this.episode = data;
      });
    } else {
      console.error('No episode ID found.');
    }
  }
}
