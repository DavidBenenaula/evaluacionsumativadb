import { Component, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-btn-secundario',
  standalone: true,
  imports: [],
  templateUrl: './btn-secundario.component.html',
  styleUrl: './btn-secundario.component.css'
})
export class BtnSecundarioComponent {
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
