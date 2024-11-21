import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-email',
  standalone: true,
  imports: [],
  templateUrl: './input-email.component.html',
  styleUrl: './input-email.component.css'
})
export class InputEmailComponent {
  @Output() valueChange = new EventEmitter<string>();

  value: string = '';

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}
