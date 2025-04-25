import { Component, EventEmitter, Input, Output } from '@angular/core';
import { goodsContent } from '../../content/goods.content';
import { CommonModule } from '@angular/common';
import { Good } from '../../models/good';

@Component({
  selector: 'app-goods-two-items',
  imports: [CommonModule],
  templateUrl: './goods-two-items.component.html',
  styleUrl: './goods-two-items.component.scss',
})
export class GoodsTwoItemsComponent {
  @Input() goods = goodsContent as Good[];
  @Output() goodSelected = new EventEmitter<string>();

  onItemClick(goods: string) {
    this.goodSelected.emit(goods);
  }
}
