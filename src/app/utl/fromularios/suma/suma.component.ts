import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  sumNumeros(): void {
    this.resultado = this.num1 + this.num2;
  }
}
