import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoAvion } from '../../../../models/tipoAvion';
import { TipoAvionService } from '../../../../servicios/tipo-avion/tipo-avion.service';

@Component({
  selector: 'app-modal-tipos-aviones',
  templateUrl: './modal-tipos-aviones.component.html',
  styleUrls: ['./modal-tipos-aviones.component.css']
})
export class ModalTiposAvionesComponent implements OnInit {

  @Input() activo: TipoAvion;

  tiposAviones: TipoAvion[];

  page = 1;
  pageSize = 4;
  pages = 0;
  tiposAvionesCount = 0;

  filtro: string = '';


  constructor(
    public modal: NgbActiveModal,
    private tipoAvionService: TipoAvionService) { }

    ngOnInit(): void {
      this.cambiarPagina();
    }
  
    onPageChange(page): void {
      this.page = page;
      this.cambiarPagina();
    }
  
  
    cambiarPagina(): void {
      this.tipoAvionService.getTiposAviones(this.page, this.pageSize, this.filtro).subscribe(tiposAviones => {
        this.tiposAviones = tiposAviones.items;
        this.tiposAvionesCount = tiposAviones.count;
        this.pages = Math.ceil(tiposAviones.count / this.pageSize);
      });
    }

    elegir(e, tipoAvion: TipoAvion): void{
      e.stopPropagation();
      this.activo = tipoAvion;
    }

}
