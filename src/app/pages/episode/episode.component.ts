import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { EpisodeListComponent } from '../../components/episode-list/episode-list.component';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, EpisodeListComponent],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss',
})
export class EpisodeComponent {}
