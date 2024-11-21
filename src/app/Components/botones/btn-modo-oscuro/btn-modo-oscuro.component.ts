import { CommonModule } from '@angular/common';
import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-modo-oscuro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-modo-oscuro.component.html',
  styleUrl: './btn-modo-oscuro.component.css'
})
export class BtnModoOscuroComponent {
  isDarkMode = false;

  // Emitir evento al componente padre
  @Output() darkModeToggle = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeToggle.emit(this.isDarkMode);
  }
}
