import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameGrupos } from './utl/grupos.component';
import { NameIdgs902 } from './utl/idgs902.component';
import { Idgs902Component } from './utl/idgs902/idgs902.component';

@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    NameIdgs902,
    Idgs902Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
