import { Component, OnInit } from '@angular/core';
import { TipoAvion } from '../../../models/tipoAvion';
import { TipoAvionService } from '../../../servicios/tipo-avion/tipo-avion.service';

@Component({
  selector: 'app-tipos-aviones',
  templateUrl: './tipos-aviones.component.html',
  styleUrls: ['./tipos-aviones.component.css']
})
export class TiposAvionesComponent implements OnInit {

  tiposAviones: TipoAvion[];

  page = 1;
  pageSize = 4;
  pages = 0;
  tiposAvionesCount = 0;

  filtro: string = '';

  constructor(
    private tipoAvionService: TipoAvionService
  ) { }

  ngOnInit(): void {
    this.cambiarPagina();
  }

  onPageChange(page): void {
    this.page = page;
    this.cambiarPagina();
  }

  onKey(e){
    if (e.key == 'Enter'){
      this.cambiarPagina();
    }
  }

  cambiarPagina(): void {
    this.tipoAvionService.getTiposAviones(this.page, this.pageSize, this.filtro).subscribe(tiposAviones => {
      this.tiposAviones = tiposAviones.items;
      this.tiposAvionesCount = tiposAviones.count;
      this.pages = Math.ceil(tiposAviones.count / this.pageSize);
    });
  }

}
