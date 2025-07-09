import { Component } from '@angular/core';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { GoodsTwoItemsComponent } from '../../components/goods-two-items/goods-two-items.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [
    CategoriesComponent,
    SliderComponent,
    GoodsTwoItemsComponent,
    NavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
