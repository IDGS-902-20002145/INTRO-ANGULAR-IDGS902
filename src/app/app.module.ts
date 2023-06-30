import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NameGrupos } from './utl/grupos.component';
import { NameIdgs902 } from './utl/idgs902.component';
import { Idgs902Component } from './utl/idgs902/idgs902.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumaComponent } from './utl/fromularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/fromularios/operas/operas.module';
import { Distancia2pModule } from './distancia2p/distancia2p.module';
import { CalificacionAlumComponent } from './utl/calificacion-alum/calificacion-alum.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    NameIdgs902,
    Idgs902Component,
    IricComponent,
    MenuComponent,
    SumaComponent,
    CalificacionAlumComponent,
    AlumnoFilterPipe,
    AlumnoReactiveComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    Distancia2pModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
