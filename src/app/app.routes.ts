import { Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'character', component: CharactersComponent },
  { path: 'character/:id', component: CharacterDetailsComponent },

  { path: 'episode', component: EpisodeComponent },
  { path: 'episode/:id', component: EpisodeDetailsComponent },
];
