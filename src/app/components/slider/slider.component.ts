import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { contentForSlider } from '../../content/slider.content';
import { SlideInfo } from '../../models/slider';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  activeIndexOfCarousel = 0;

  slides = contentForSlider as SlideInfo[];

  startX: number = 0;
  endX: number = 0;

  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
  }

  onMouseUp(event: MouseEvent) {
    this.endX = event.clientX;
    this.handleSwipe();
  }

  handleSwipe() {
    const threshold = 50;

    if (this.startX - this.endX > threshold) {
      this.next();
    } else if (this.endX - this.startX > threshold) {
      this.prev();
    }
  }

  next() {
    this.activeIndexOfCarousel =
      (this.activeIndexOfCarousel + 1) % this.slides.length;
  }

  prev() {
    this.activeIndexOfCarousel =
      (this.activeIndexOfCarousel - 1 + this.slides.length) %
      this.slides.length;
  }

  goToSlide(index: number): void {
    this.activeIndexOfCarousel = index;
  }
}
