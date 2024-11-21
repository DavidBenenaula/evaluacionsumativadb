import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-primario',
  standalone: true,
  templateUrl: './btn-primario.component.html',
  styleUrl: './btn-primario.component.css'
})
export class BtnPrimarioComponent {
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
