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
import { TiposAvionesDetailComponent } from './componentes/tipos-aviones/tipos-aviones-detail/tipos-aviones-detail.component';
import { AvionesComponent } from './componentes/aviones/aviones/aviones.component';
import { AvionesDetailComponent } from './componentes/aviones/aviones-detail/aviones-detail.component';
import { ModalTiposAvionesComponent } from './componentes/aviones/modales/modal-tipos-aviones/modal-tipos-aviones.component';
import { ModalCompaniasComponent } from './componentes/aviones/modales/modal-companias/modal-companias.component';
import { ModalAvionesComponent } from './componentes/companias/Modal/modal-aviones.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CompaniasComponent,
    CompaniasDetailComponent,
    TiposAvionesComponent,
    TiposAvionesDetailComponent,
    AvionesComponent,
    AvionesDetailComponent,
    ModalTiposAvionesComponent,
    ModalCompaniasComponent,
    ModalAvionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
