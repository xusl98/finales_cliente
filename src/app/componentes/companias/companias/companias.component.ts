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
  pageSize = 4;
  pages = 0;
  companiasCount = 0;

  filtro: string = '';

  constructor(private companiasService: CompaniasService) { }

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

}
