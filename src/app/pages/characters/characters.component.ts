import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CharacterListComponent } from '../../components/character-list/character-list.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, CharacterListComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {}
