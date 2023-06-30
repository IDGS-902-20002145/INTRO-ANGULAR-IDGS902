import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  registros: any[] = [];

  alumnoForms!: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.alumnoForms = this.initForm();
  }

  onSubmit(): void {
    //console.log('Forms-> ', this.alumnoForms.value);
    this.obtenerValor();
    this.limpiar();
  }

  obtenerValor(): void {

    const mat = this.alumnoForms.get('matricula')?.value;
    const nom = this.alumnoForms.get('nombre')?.value;
    const edad = this.alumnoForms.get('edad')?.value;
    const cor = this.alumnoForms.get('correo')?.value;
    const cal = this.alumnoForms.get('calif')?.value;
    const fot = this.alumnoForms.get('foto')?.value;

    const registro = {
      matricula: mat,
      nombre: nom,
      edad: edad,
      correo: cor,
      calificacion: cal,
      foto: fot
    };

    this.registros.push(registro);


  }

  limpiar(): void {
    this.alumnoForms.get('matricula')?.setValue('');
    this.alumnoForms.get('nombre')?.setValue('');
    this.alumnoForms.get('edad')?.setValue('');
    this.alumnoForms.get('correo')?.setValue('');
    this.alumnoForms.get('calif')?.setValue('');
    this.alumnoForms.get('foto')?.setValue('');
  }

  initForm(): FormGroup {
    return this.fb.group({
      matricula: ['', [Validators.required, Validators.minLength(3)]],
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      calif: ['', [Validators.required]],
      foto: ['', [Validators.required]]
    });
  }
}
