import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})


export class IricComponent {
  imageWitdth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';
  alumnoTitle!: string

  showImage(): void {
    this.muestraImg = !this.muestraImg;
  }




  alumnosIric: IAlumnosIric[] = [
    {
      matricula: 1234,
      nombre: 'Pedro',
      edad: 23,
      correo: 'pedro@gmail.com',
      foto: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
      calif: 10
    },

    {
      matricula: 772,
      nombre: 'Paulina',
      edad: 23,
      correo: 'paulina@gmail.com',
      foto: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
      calif: 9
    },

    {
      matricula: 772,
      nombre: 'Dario',
      edad: 27,
      correo: 'dario@gmail.com',
      foto: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
      calif: 5
    },
  ];

  onCalificaClick(message: string): void {
    this.alumnoTitle = `${message}`;
  }
}
