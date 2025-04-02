import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() title: string = 'Accordion Title';
  @Input() id: string = ''; 
  @Input() isOpen: boolean = false; 
  @Output() toggle = new EventEmitter<string>(); 

  toggleDropdown() {
    this.toggle.emit(this.id); 
  }
}