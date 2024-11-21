import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-demostrativo',
  standalone: true,
  imports: [],
  templateUrl: './demostrativo.component.html',
  styleUrl: './demostrativo.component.css'
})
export class DemostrativoComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() text: string = '';
  @Input() clickCount: number = 0;
  @Input() currentTime: string = '';  // Añadir la propiedad para la hora
}
