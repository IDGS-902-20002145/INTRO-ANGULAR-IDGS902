import { Component } from '@angular/core';

@Component({
  selector: 'app-operasbas',
  templateUrl: './operasbas.component.html',
  styleUrls: ['./operasbas.component.css']
})
export class OperasbasComponent {
  num1!: number;
  num2!: number;
  resultado!: number;

  operacionSeleccionada: string = 'suma';

  tipoOperaciones: string[] = ['suma', 'resta', 'multiplicacion', 'division'];

  calcular() {
    switch (this.operacionSeleccionada) {
      case 'suma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'resta':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicacion':
        this.resultado = this.num1 * this.num2;
        break;
      case 'division':
        if (this.num2 == 0) {
          alert('No se puede dividir entre 0');
          return;
        } else {
          this.resultado = this.num1 / this.num2;
          break;
        }
    }
  }
}
