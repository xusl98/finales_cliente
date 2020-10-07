import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniasDetailComponent } from './componentes/companias/companias-detail/companias-detail.component';
import { CompaniasComponent } from './componentes/companias/companias/companias.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'companias', component: CompaniasComponent },
  { path: 'compania/:id', component: CompaniasDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
