import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-texto',
  standalone: true,
  imports: [],
  templateUrl: './input-texto.component.html',
  styleUrl: './input-texto.component.css'
})
export class InputTextoComponent {
  @Output() valueChange = new EventEmitter<string>();
  value: string = '';

  onInputChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }
}
