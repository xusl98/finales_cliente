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


  cambiarPagina(): void {
    this.tipoAvionService.getTiposAviones(this.page, this.pageSize, this.filtro).subscribe(companias => {
      this.tiposAviones = companias.items;
      this.tiposAvionesCount = companias.count;
      this.pages = Math.ceil(companias.count / this.pageSize);
    });
  }

}
