import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial-recursivo',
  templateUrl: './factorial-recursivo.component.html'
})
export class FactorialComponent {
  num!: number;
  resultado!: number;

  factorial(num: number): number {
    if (num === 0) {
      return 1;
    } else {
      return num * this.factorial(num - 1);
    }
  }

  calcularFactorial() {
    console.log('Calculando factorial....')
    this.resultado = this.factorial(this.num);
    console.log(this.factorial(this.num));

  }
}
