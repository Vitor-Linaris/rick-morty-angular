import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CharacterListComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
