import { TipoAvion } from './tipoAvion';
import { Compania } from './compania';
export class Avion{
    id: number;
    numeroSerie: number;
    combustible: number;
    tipoAvionId: number;
    tipoAvion: TipoAvion;
    companiaId: number;
    compania: Compania;
    activo: boolean;
}