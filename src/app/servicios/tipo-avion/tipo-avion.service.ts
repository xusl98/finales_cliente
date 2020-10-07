import { Injectable } from '@angular/core';
import { TipoAvion } from '../../models/tipoAvion';
import { Observable, of } from 'rxjs';
import { PageResult } from 'src/app/models/pageResult';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoAvionService {

  // tiposAviones: TipoAvion[] = [
  //   {id: 1, fabricante: 'Boeing', modelo: '737', alcance: 'medio', anioComienzoFabricacion: 1964, tipo: 'comercial', fuselaje: 'estrecho', activo: true },
  //   {id: 2, fabricante: 'Boeing', modelo: '747', alcance: 'largo', anioComienzoFabricacion: 1969, tipo: 'comercial', fuselaje: 'ancho', activo: true },
  //   {id: 3, fabricante: 'Lockheed', modelo: 'F-16 Fighting Falcon', alcance: 'corto', anioComienzoFabricacion: 1973, tipo: 'militar', fuselaje: 'estrecho', activo: true },
  //   {id: 4, fabricante: 'Lockheed', modelo: 'C-130 Hercules', alcance: 'largo', anioComienzoFabricacion: 1954, tipo: 'carga', fuselaje: 'ancho', activo: true },
  //   {id: 5, fabricante: 'Airbus ', modelo: 'A320', alcance: 'medio', anioComienzoFabricacion: 1987, tipo: 'comercial', fuselaje: 'estrecho', activo: true },
    
  // ];

  constructor(private http: HttpClient) { }

  getTiposAviones(page: number, pageSize: number, filtro: string): Observable<PageResult<TipoAvion>>{
    return this.http.get<PageResult<TipoAvion>>('http://localhost:5000/api/TiposAviones?page=' + page + '&pageSize=' + pageSize + '&filtro=' + filtro);
  } 

  getTipoAvion(id: number): Observable<TipoAvion>{
    return this.http.get<TipoAvion>('http://localhost:5000/api/TiposAviones/' + id);
  }

  crearTipoAvion(TipoAvion: TipoAvion): Observable<TipoAvion>{
    return this.http.post<TipoAvion>('http://localhost:5000/api/TiposAviones', TipoAvion);
  }

  actualizarTipoAvion(TipoAvion: TipoAvion): Observable<TipoAvion>{
    return this.http.put<TipoAvion>('http://localhost:5000/api/TiposAviones', TipoAvion);
  }

  eliminarTipoAvion(id: number): Observable<TipoAvion>{
    return this.http.delete<TipoAvion>('http://localhost:5000/api/TiposAviones/' + id);
  }
}
