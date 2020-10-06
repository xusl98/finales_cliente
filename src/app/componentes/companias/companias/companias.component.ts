import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Compania } from '../../../models/compania';
import { CompaniasService } from '../../../servicios/companias.service';

@Component({
  selector: 'app-companias',
  templateUrl: './companias.component.html',
  styleUrls: ['./companias.component.css']
})
export class CompaniasComponent implements OnInit {

  companias: Compania[] = [];

  page = 1;

  public busqueda: string;

  constructor(private companiasService: CompaniasService) { }

  ngOnInit(): void {
    //obtener de la bd el numero de registros para sacar la cantidad de paginas y asignarlo a una variable
    this.companiasService.getCompanias().subscribe(companias => this.companias = companias);
  }

}
