import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NameGrupos } from './utl/grupos.component';
import { NameIdgs902 } from './utl/idgs902.component';
import { Idgs902Component } from './utl/idgs902/idgs902.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/fromularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/fromularios/operas/operas.module';
import { Distancia2pModule } from './distancia2p/distancia2p.module';



@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    NameIdgs902,
    Idgs902Component,
    IricComponent,
    MenuComponent,
    SumaComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    Distancia2pModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
