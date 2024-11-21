import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-contrasenia',
  standalone: true,
  imports: [],
  templateUrl: './input-contrasenia.component.html',
  styleUrl: './input-contrasenia.component.css'
})
export class InputContraseniaComponent {
  value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() passwordStatus = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);

    // Validar la contraseña
    const hasUpperCase = /[A-Z]/.test(this.value);
    const hasNumber = /\d/.test(this.value);
    if (hasUpperCase && hasNumber) {
      this.passwordStatus.emit('Contraseña válida');
    } else {
      this.passwordStatus.emit(
        'Contraseña inválida. Debe tener al menos una mayúscula y un número.'
      );
    }
  }
}
