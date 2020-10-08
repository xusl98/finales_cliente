import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Compania } from 'src/app/models/compania';
import { CompaniasService } from 'src/app/servicios/companias.service';

@Component({
  selector: 'app-companias-detail',
  templateUrl: './companias-detail.component.html',
  styleUrls: ['./companias-detail.component.css']
})
export class CompaniasDetailComponent implements OnInit {

  titulo: string = '';
  tipo: string = '';
  compania: Compania;

  copiaCompania: Compania;

  constructor(
    private route: ActivatedRoute,
    private companiasService: CompaniasService,
    private modalService: NgbModal,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id == -1) {
      this.titulo = 'Nueva Compañía';
      this.tipo = 'NEW';
      this.compania = new Compania();
    } else {
      this.tipo = 'DETAIL';
      this.companiasService.getCompania(id).subscribe(compania => {
        this.compania = compania;
        this.copiaCompania = new Compania();
        Object.assign(this.copiaCompania, this.compania);
        console.log(this.compania)
        console.log(this.compania.iata)
        this.titulo = 'Compañía: ' + this.compania.nombre;
      });
    }
  }


  cambiarTipo(tipo: string): void {
    this.tipo = tipo;
  }

  cancelar(): void {
    if (this.tipo == 'EDIT') {
      this.cambiarTipo('DETAIL');
      Object.assign(this.compania, this.copiaCompania);
    } else {
      this.volver();
    }
  }

  async abrirModal() {
    const modalRef = this.modalService.open(NgbdModalBorrado);
    if (await modalRef.result === 'borrar') {
      this.companiasService.eliminarCompania(this.compania.id).subscribe();
      this.volver();
    }
  }
  async abrirModalAviones() {
    const modalRef = this.modalService.open(ModalAvionesComponent);
    modalRef.componentInstance.compania = this.compania;
  }

  guardar(): void {
    if (this.tipo == 'EDIT') {
      this.companiasService.actualizarCompania(this.compania).subscribe(compania => {
        this.location.back();
      });
    } else if (this.tipo == 'NEW') {
      this.compania.activo = true;
      this.companiasService.crearCompania(this.compania).subscribe(compania => {
        this.location.back();
      });
    }
  }

  volver(): void {
    this.location.back();
  }


}

import { Type } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAvionesComponent } from '../Modal/modal-aviones.component';

@Component({
  selector: 'ngbd-modal-borrado',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Eliminar Compañía</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>¿Estás seguro de que quieres eliminar la compañía?</strong></p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancelar</button>
    <button (click)="modal.close('borrar')" type="button" class="btn btn-danger">Eliminar</button>
  </div>
  `
})
export class NgbdModalBorrado {
  constructor(public modal: NgbActiveModal) { }

}