import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvionesDetailComponent } from './componentes/aviones/aviones-detail/aviones-detail.component';
import { AvionesComponent } from './componentes/aviones/aviones/aviones.component';
import { CompaniasDetailComponent } from './componentes/companias/companias-detail/companias-detail.component';
import { CompaniasComponent } from './componentes/companias/companias/companias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TiposAvionesDetailComponent } from './componentes/tipos-aviones/tipos-aviones-detail/tipos-aviones-detail.component';
import { TiposAvionesComponent } from './componentes/tipos-aviones/tipos-aviones/tipos-aviones.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'companias', component: CompaniasComponent },
  { path: 'compania/:id', component: CompaniasDetailComponent },
  { path: 'tipos-aviones', component: TiposAvionesComponent },
  { path: 'tipo-avion/:id', component: TiposAvionesDetailComponent },
  { path: 'aviones', component: AvionesComponent },
  { path: 'avion/:id', component: AvionesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
