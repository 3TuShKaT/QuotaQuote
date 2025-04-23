import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() title: string = 'Accordion Title';
  @Input() id: string = '';
  @Input() isOpen: boolean = false;
  @Output() toggle = new EventEmitter<string>();

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.id);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-accordion') && this.isOpen) {
      this.toggleDropdown();
    }
  }
}
