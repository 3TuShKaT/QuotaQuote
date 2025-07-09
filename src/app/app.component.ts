import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './components/slider/slider.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GoodsTwoItemsComponent } from './components/goods-two-items/goods-two-items.component';
import { LoginRegistrationComponent } from './pages/login-registration/login-registration.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NavbarComponent,
    SliderComponent,
    CategoriesComponent,
    GoodsTwoItemsComponent,
    LoginRegistrationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
