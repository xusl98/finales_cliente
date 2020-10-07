import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Compania } from '../models/compania';
import { PageResult } from '../models/pageResult';

@Injectable({
  providedIn: 'root'
})
export class CompaniasService {

  // companias: Compania[] = [
  //   {id: 1, nombre: 'Iberia', IATA: 'IB', OACI: 'IBE', indicativo: 'IBERIA', sede: 'España', telefono: 976825457, web: 'https://iberia.com' },
  //   {id: 2, nombre: 'Ryanair', IATA: 'FR', OACI: 'RYR', indicativo: 'RYANAIR', sede: 'Irlanda', telefono: 126745972, web: 'https://ryanair.com' },
  //   {id: 3, nombre: 'Lufthansa', IATA: 'LH', OACI: 'DLH', indicativo: 'LUFTHANSA', sede: 'Alemania', telefono: 567812504, web: 'https://lufthansa.com' },
    
  // ];

  constructor(private http: HttpClient) { }

  getCompanias(page: number, pageSize: number, filtro: string): Observable<PageResult<Compania>>{
    return this.http.get<PageResult<Compania>>('http://localhost:5000/api/Companias?page=' + page + '&pageSize=' + pageSize + '&filtro=' + filtro);
  } 

  getCompania(id: number): Observable<Compania>{
    return this.http.get<Compania>('http://localhost:5000/api/Companias/' + id);
  }
}
