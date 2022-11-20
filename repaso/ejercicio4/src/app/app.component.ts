import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sld1: any
  sld2: any
  sld3: any
  sld4: any
  totalSueldos: any
  promedio: any
  mayor: any
  menor: any
  msmv: any = 0;

  calcular(sueldo1: HTMLInputElement, sueldo2: HTMLInputElement, sueldo3: HTMLInputElement, sueldo4: HTMLInputElement) {
    this.sld1 = parseInt(sueldo1.value)
    this.sld2 = parseInt(sueldo2.value)
    this.sld3 = parseInt(sueldo3.value)
    this.sld4 = parseInt(sueldo4.value)

    this.totalSueldos = this.sld1 + this.sld2 + this.sld3 + this.sld4

    this.promedio = (this.sld1 + this.sld2 + this.sld3 + this.sld4) / 4

    this.mayor = Math.max(this.sld1, this.sld2, this.sld3, this.sld4)

    this.menor = Math.min(this.sld1, this.sld2, this.sld3, this.sld4)

    if (this.sld1 > 1025) {
      this.msmv += 1
    } if (this.sld2 > 1025) {
      this.msmv += 1
    } if (this.sld3 > 1025) {
      this.msmv += 1
    } if (this.sld4 > 1025) {
      this.msmv += 1
    }


    return false;
  }
}
