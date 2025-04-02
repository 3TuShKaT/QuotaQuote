import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, FontAwesomeModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  
}
