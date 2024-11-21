import { Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-btn-aceptar',
  standalone: true,
  imports: [],
  templateUrl: './btn-aceptar.component.html',
  styleUrl: './btn-aceptar.component.css'
})
export class BtnAceptarComponent {
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit(); // Emite el evento para que el componente padre lo maneje
  }
}
