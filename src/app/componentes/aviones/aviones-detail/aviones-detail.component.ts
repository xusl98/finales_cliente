import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Avion } from 'src/app/models/avion';
import { AvionService } from 'src/app/servicios/avion/avion.service';
import { Location } from '@angular/common';
import { ModalTiposAvionesComponent } from '../modales/modal-tipos-aviones/modal-tipos-aviones.component';

@Component({
  selector: 'app-aviones-detail',
  templateUrl: './aviones-detail.component.html',
  styleUrls: ['./aviones-detail.component.css']
})
export class AvionesDetailComponent implements OnInit {

  titulo: string = '';
  tipo: string = '';
  avion: Avion;

  copiaAvion: Avion;

  constructor(
    private route: ActivatedRoute,
    private avionesService: AvionService,
    private modalService: NgbModal,
    private location: Location,
    private router: Router,
    private tiposAvionesService: TipoAvionService,
    private companiasService: CompaniasService
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id == -1) {
      this.titulo = 'Nuevo Avión';
      this.tipo = 'NEW';
      this.avion = new Avion();
      this.avion.compania = new Compania();
      this.avion.tipoAvion = new TipoAvion();
    } else {
      this.tipo = 'DETAIL';
      this.avionesService.getAvion(id).subscribe(compania => {
        this.avion = compania;
        this.copiaAvion = new Avion();
        Object.assign(this.copiaAvion, this.avion);
        this.titulo = 'Avión: ' + this.avion.numeroSerie + ' - ' + this.avion.tipoAvion.fabricante + ' - ' + this.avion.tipoAvion.modelo;
        if (!this.avion.compania) {
          this.avion.compania = new Compania();
        }
      });
    }
  }

  cambiarTipo(tipo: string): void {
    this.tipo = tipo;
  }

  cancelar(): void {
    if (this.tipo == 'EDIT') {
      this.cambiarTipo('DETAIL');
      Object.assign(this.avion, this.copiaAvion);
    } else {
      this.volver();
    }
  }

  async abrirModal() {
    const modalRef = this.modalService.open(NgbdModalBorrado);
    if (await modalRef.result === 'borrar') {
      this.avionesService.eliminarAvion(this.avion.id).subscribe();
      this.volver();
    }
  }
  async abrirModalTiposAviones() {
    var res;
    const modalRef = this.modalService.open(ModalTiposAvionesComponent, { size: <any>'lg' });
    modalRef.componentInstance.activo = this.avion.tipoAvion;
    modalRef.result.then((result) => {
      res = `Closed with: ${result}`;
    }, (reason) => {
      console.log(reason)
      res = reason;
      this.tiposAvionesService.getTipoAvion(res).subscribe(tA => this.avion.tipoAvion = tA);
      res = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  async abrirModalCompanias() {
    var res;
    const modalRef = this.modalService.open(ModalCompaniasComponent, { size: <any>'lg' });
    modalRef.componentInstance.activo = this.avion.compania;
    modalRef.result.then((result) => {
      res = `Closed with: ${result}`;
    }, (reason) => {
      console.log(reason)
      res = reason;
      this.companiasService.getCompania(res).subscribe(c => this.avion.compania = c);
      res = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  guardar(): void {
    if (this.tipo == 'EDIT') {
      this.avion.tipoAvionId = this.avion.tipoAvion.id;
      this.avion.companiaId = this.avion.compania.id;
      this.avion.tipoAvion = null;
      this.avion.compania = null;
      console.log(this.avion)
      this.avionesService.actualizarAvion(this.avion).subscribe(compania => {
        this.location.back();
      });
    } else if (this.tipo == 'NEW') {
      this.avion.activo = true;
      this.avion.tipoAvionId = this.avion.tipoAvion.id;
      this.avion.companiaId = this.avion.compania.id;
      this.avion.tipoAvion = null;
      this.avion.compania = null;
      if (this.avion.companiaId == undefined) {
        this.avion.companiaId = null;
      }
      console.log(this.avion)
      this.avionesService.crearAvion(this.avion).subscribe(compania => {
        this.location.back();
      });
    }
  }

  volver(): void {
    this.location.back();
  }

}


import { Type } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Compania } from 'src/app/models/compania';
import { TipoAvion } from 'src/app/models/tipoAvion';
import { TipoAvionService } from 'src/app/servicios/tipo-avion/tipo-avion.service';
import { ModalCompaniasComponent } from '../modales/modal-companias/modal-companias.component';
import { CompaniasService } from 'src/app/servicios/companias.service';

@Component({
  selector: 'ngbd-modal-borrado',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Eliminar Tipo de Avión</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>¿Estás seguro de que quieres eliminar el tipo de avión?</strong></p>
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