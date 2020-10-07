import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoAvion } from 'src/app/models/tipoAvion';
import { TipoAvionService } from 'src/app/servicios/tipo-avion/tipo-avion.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tipos-aviones-detail',
  templateUrl: './tipos-aviones-detail.component.html',
  styleUrls: ['./tipos-aviones-detail.component.css']
})
export class TiposAvionesDetailComponent implements OnInit {

  titulo: string = '';
  tipo: string = '';
  tipoAvion: TipoAvion;

  copiaTipoAvion: TipoAvion;

  constructor(
    private route: ActivatedRoute,
    private tiposAvionesService: TipoAvionService,
    private modalService: NgbModal,
    private location: Location ,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id == -1) {
      this.titulo = 'Nuevo Tipo de Avión';
      this.tipo = 'NEW';
      this.tipoAvion = new TipoAvion();
    } else {
      this.tipo = 'DETAIL';
      this.tiposAvionesService.getTipoAvion(id).subscribe(compania => {
        this.tipoAvion = compania;
        this.copiaTipoAvion = new TipoAvion();
        Object.assign(this.copiaTipoAvion, this.tipoAvion);
        this.titulo = 'Tipo de Avión: ' + this.tipoAvion.fabricante + ' - ' + this.tipoAvion.modelo;
      });
    }
  }

  cambiarTipo(tipo: string): void{
    this.tipo = tipo;
  }

  cancelar(): void{
    if (this.tipo == 'EDIT'){
      this.cambiarTipo('DETAIL');
      Object.assign(this.tipoAvion, this.copiaTipoAvion);
    } else {
      this.volver();
    }
  }

  async abrirModal()  {
    const modalRef = this.modalService.open(NgbdModalBorrado);
    if (await modalRef.result === 'borrar') {
      this.tiposAvionesService.eliminarTipoAvion(this.tipoAvion.id).subscribe();
      this.volver();
    }
  }

  guardar(): void{
    if (this.tipo == 'EDIT') {
      this.tiposAvionesService.actualizarTipoAvion(this.tipoAvion).subscribe(compania => {
        this.location.back();
      });
    } else if (this.tipo == 'NEW') {
      this.tipoAvion.activo = true;
      this.tiposAvionesService.crearTipoAvion(this.tipoAvion).subscribe(compania => {
        this.location.back();
      });
    }
  }

  volver(): void{
    this.location.back();
  }

}


import { Type } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(public modal: NgbActiveModal) {}

}