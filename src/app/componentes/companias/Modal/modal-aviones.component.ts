import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Avion } from 'src/app/models/avion';
import { Compania } from 'src/app/models/compania';
import { AvionService } from 'src/app/servicios/avion/avion.service';
import { CompaniasService } from 'src/app/servicios/companias.service';

@Component({
  selector: 'app-modal-aviones',
  templateUrl: './modal-aviones.component.html',
  styleUrls: ['./modal-aviones.component.css']
})
export class ModalAvionesComponent implements OnInit {

  @Input() compania: Compania;

  aviones: Avion[];

  page = 1;
  pageSize = 4;
  pages = 0;
  avionesCount = 0;

  filtro: string = '';


  constructor(
    public modal: NgbActiveModal,
    private avionesService: AvionService) { }

    ngOnInit(): void {
      this.cambiarPagina();
    }
  
    onPageChange(page): void {
      this.page = page;
      this.cambiarPagina();
    }
  
  
    cambiarPagina(): void {
      this.avionesService.getAvionesByCompania(this.page, this.pageSize, this.filtro, this.compania.id).subscribe(aviones => {
        this.aviones = aviones.items;
        this.avionesCount = aviones.count;
        this.pages = Math.ceil(aviones.count / this.pageSize);
      });
    }


}
