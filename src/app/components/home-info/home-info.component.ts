import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-home-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-info.component.html',
  styleUrl: './home-info.component.scss',
})
export class HomeInfoComponent {
  characterCount: number = 0;
  episodeCount: number = 0;
  locationCount: number = 0;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe((data: any) => {
      this.characterCount = data.info.count;
    });

    this.rickAndMortyService.getEpisodes().subscribe((data: any) => {
      this.episodeCount = data.info.count;
    });

    this.rickAndMortyService.getLocations().subscribe((data: any) => {
      this.locationCount = data.info.count;
    });
  }
}
