import { Component, NO_ERRORS_SCHEMA  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BtnAceptarComponent } from './Components/botones/btn-aceptar/btn-aceptar.component';
import { BtnCancelarComponent } from './Components/botones/btn-cancelar/btn-cancelar.component';
import { BtnModoOscuroComponent } from './Components/botones/btn-modo-oscuro/btn-modo-oscuro.component';
import { BtnPrimarioComponent } from './Components/botones/btn-primario/btn-primario.component'; 
import { BtnSecundarioComponent } from './Components/botones/btn-secundario/btn-secundario.component';
import { InputContraseniaComponent } from './Components/inputs/input-contrasenia/input-contrasenia.component';
import { InputEmailComponent } from './Components/inputs/input-email/input-email.component';
import { InputTextoComponent } from './Components/inputs/input-texto/input-texto.component';
import { DemostrativoComponent } from './Components/demostrativo/demostrativo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,
    BtnAceptarComponent,
    BtnCancelarComponent,
    BtnModoOscuroComponent,
    BtnPrimarioComponent,
    BtnSecundarioComponent,
    InputContraseniaComponent,
    InputEmailComponent,
    InputTextoComponent,
    DemostrativoComponent,
    NgIf,
    NgFor,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA],  

})
export class AppComponent {
  title = 'SUMATIVA';
  isDarkMode = false;

  // Variables para los inputs
  emailValue: string = '';
  passwordValue: string = '';
  textValue: string = '';

  // Contadores y estados
  clickCount: number = 0;
  currentTime: string = '';
  passwordMessage: string = ''; // Mensaje dinámico de validación de contraseña

  /**
   * Valida el email ingresado y muestra un mensaje.
   */
  validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(this.emailValue.trim())) {
      alert('Correo válido');
    } else {
      alert('Correo inválido. Debe incluir "@" y terminar en ".com".');
    }
  }

  /**
   * Actualiza el estado del mensaje de validación de la contraseña.
   * @param status Mensaje enviado por el componente `ContraComponent`.
   */
  updatePasswordStatus(status: string) {
    this.passwordMessage = status;
  }

  /**
   * Activa o desactiva el modo oscuro.
   * @param isDark Estado del modo oscuro.
   */
  onDarkModeToggle(isDark: boolean) {
    this.isDarkMode = isDark;
  }

  /**
   * Incrementa el contador de clics.
   */
  incrementClickCount() {
    this.clickCount++;
  }

  /**
   * Borra todos los inputs y resetea los datos del demostrativo.
   */
  clearInputs() {
    this.emailValue = '';
    this.passwordValue = '';
    this.textValue = '';
    this.clickCount = 0;
    this.currentTime = '';
    this.passwordMessage = ''; // Resetea también el mensaje de validación
  }

  /**
   * Muestra la hora actual en el demostrativo.
   */
  showTime() {
    const currentDate = new Date();
    this.currentTime = currentDate.toLocaleTimeString();
  }
}

