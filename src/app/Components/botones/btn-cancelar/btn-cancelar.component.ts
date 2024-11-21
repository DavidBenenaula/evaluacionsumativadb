import { Component ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-btn-cancelar',
  standalone: true,
  imports: [],
  templateUrl: './btn-cancelar.component.html',
  styleUrl: './btn-cancelar.component.css'
})
export class BtnCancelarComponent {
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
