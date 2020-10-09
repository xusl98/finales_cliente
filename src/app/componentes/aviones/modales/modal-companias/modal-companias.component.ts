import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Compania } from 'src/app/models/compania';
import { CompaniasService } from 'src/app/servicios/companias.service';
import { TipoAvion } from '../../../../models/tipoAvion';
import { TipoAvionService } from '../../../../servicios/tipo-avion/tipo-avion.service';

@Component({
  selector: 'app-modal-companias',
  templateUrl: './modal-companias.component.html',
  styleUrls: ['./modal-companias.component.css']
})
export class ModalCompaniasComponent implements OnInit {

  @Input() activo: Compania;

  companias: Compania[];

  page = 1;
  pageSize = 4;
  pages = 0;
  companiasCount = 0;

  filtro: string = '';


  constructor(
    public modal: NgbActiveModal,
    private companiasService: CompaniasService) { }

    ngOnInit(): void {
      this.cambiarPagina();
    }
  
    onPageChange(page): void {
      this.page = page;
      this.cambiarPagina();
    }
  
  
    cambiarPagina(): void {
      this.companiasService.getCompanias(this.page, this.pageSize, this.filtro).subscribe(companias => {
        this.companias = companias.items;
        this.companiasCount = companias.count;
        this.pages = Math.ceil(companias.count / this.pageSize);
      });
    }

    elegir(e, compania: Compania): void{
      e.stopPropagation();
      this.activo = compania;
    }

}
