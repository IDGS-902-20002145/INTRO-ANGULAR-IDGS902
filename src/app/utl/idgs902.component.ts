import { Component} from '@angular/core';


@Component({
  selector: 'app-idgs902',
  templateUrl: './grupos.component.html',

})

export class NameIdgs902 {
  constructor(){}

  // Creación de Objeto
   alumno = {
    matricula: 1234,
    nombre: 'Sergio',
    apaterno: 'Alba',
    Inscrito: 2745.9,
    fechaNacimiento: new Date()
  };

}
