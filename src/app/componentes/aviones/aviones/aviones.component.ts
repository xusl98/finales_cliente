import { Component, OnInit } from '@angular/core';
import { Avion } from '../../../models/avion';
import { AvionService } from '../../../servicios/avion/avion.service';

@Component({
  selector: 'app-aviones',
  templateUrl: './aviones.component.html',
  styleUrls: ['./aviones.component.css']
})
export class AvionesComponent implements OnInit {

  aviones: Avion[];

  page = 1;
  pageSize = 4;
  pages = 0;
  avionesCount = 0;

  filtro: string = '';

  constructor(
    private avionService: AvionService
  ) { }

  ngOnInit(): void {
    this.cambiarPagina();
  }

  onPageChange(page): void {
    this.page = page;
    this.cambiarPagina();
  }


  cambiarPagina(): void {
    this.avionService.getAviones(this.page, this.pageSize, this.filtro).subscribe(aviones => {
      this.aviones = aviones.items;
      this.avionesCount = aviones.count;
      this.pages = Math.ceil(aviones.count / this.pageSize);
    });
  }

}
