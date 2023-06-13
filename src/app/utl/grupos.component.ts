import { Component } from '@angular/core';

@Component({
  //El selector es el nombre de la etiqueta que se usará en el html para identificar el componente
  selector: 'app-grupos',

  //El template es el html que se usará para mostrar el componente
  template: `
  <h1>Hola Grupos UTL</h1>

  <form>
    <label>Numero: </label>
    <input type="text" name="x" value="">
    <br>
    <button class="btn btn-outline-success">Calcular</button>
  </form>

  `,

})

export class NameGrupos {
  constructor(){}

}
