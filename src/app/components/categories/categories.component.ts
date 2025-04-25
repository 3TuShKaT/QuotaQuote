import { Component, Input, Output, EventEmitter } from '@angular/core';
import { categoriesContent } from '../../content/categories.content';
import { CommonModule } from '@angular/common';
import { CategoryInfo } from '../../models/category';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  @Input() categories = categoriesContent as CategoryInfo[];
  @Output() categorySelected = new EventEmitter<string>();

  onCategoryClick(category: string) {
    this.categorySelected.emit(category);
  }
}
