import { Component } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [AccordionComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  openDropdownId: string | null = null;

  toggleDropdown(id: string) {
    this.openDropdownId = this.openDropdownId === id ? null : id;
  }
}
