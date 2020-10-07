import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CompaniasComponent } from './componentes/companias/companias/companias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompaniasDetailComponent } from './componentes/companias/companias-detail/companias-detail.component';
import { TiposAvionesComponent } from './componentes/tipos-aviones/tipos-aviones/tipos-aviones.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CompaniasComponent,
    CompaniasDetailComponent,
    TiposAvionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
