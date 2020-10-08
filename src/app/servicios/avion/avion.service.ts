import { Injectable } from '@angular/core';
import { Avion } from '../../models/avion';
import { Observable, of } from 'rxjs';
import { PageResult } from 'src/app/models/pageResult';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvionService {


  constructor(private http: HttpClient) { }

  getAviones(page: number, pageSize: number, filtro: string): Observable<PageResult<Avion>>{
    return this.http.get<PageResult<Avion>>('http://localhost:5000/api/Aviones?page=' + page + '&pageSize=' + pageSize + '&filtro=' + filtro);
  } 
  getAvionesByCompania(page: number, pageSize: number, filtro: string, companiaId: number): Observable<PageResult<Avion>>{
    return this.http.get<PageResult<Avion>>('http://localhost:5000/api/Aviones/Compania?page=' + page + '&pageSize=' + pageSize + '&filtro=' + filtro + '&companiaId=' + companiaId);
    //http://localhost:5000/api/Aviones/api/Aviones/Compania?page=1&pageSize=5&companiaId=1"
  } 

  getAvion(id: number): Observable<Avion>{
    return this.http.get<Avion>('http://localhost:5000/api/Aviones/' + id);
  }

  crearAvion(avion: Avion): Observable<Avion>{
    return this.http.post<Avion>('http://localhost:5000/api/Aviones', avion);
  }

  actualizarAvion(avion: Avion): Observable<Avion>{
    return this.http.put<Avion>('http://localhost:5000/api/Aviones', avion);
  }

  eliminarAvion(id: number): Observable<Avion>{
    return this.http.delete<Avion>('http://localhost:5000/api/Aviones/' + id);
  }
}
