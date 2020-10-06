import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Compania } from '../models/compania'

@Injectable({
  providedIn: 'root'
})
export class CompaniasService {

  companias: Compania[] = [
    {id: 1, nombre: 'Iberia', IATA: 'IB', OACI: 'IBE', indicativo: 'IBERIA', sede: 'España', telefono: 976825457, web: 'https://iberia.com' },
    {id: 2, nombre: 'Ryanair', IATA: 'FR', OACI: 'RYR', indicativo: 'RYANAIR', sede: 'Irlanda', telefono: 126745972, web: 'https://ryanair.com' },
    {id: 3, nombre: 'Lufthansa', IATA: 'LH', OACI: 'DLH', indicativo: 'LUFTHANSA', sede: 'Alemania', telefono: 567812504, web: 'https://lufthansa.com' },
    
  ];

  constructor() { }

  getCompanias(): Observable<Compania[]>{
    return of(this.companias);
  }
}
