import { Injectable } from '@angular/core';
import { Areas }  from '../areas.model';
import { Subject }  from 'rxjs/subject';


const AreasFake = [
                   { id: 1, nombre: 'Cálculo', profesor: 'Germán López', grupo: '11.1', horas: 10},
                   { id: 2, nombre: 'Escuela Virtual', profesor: 'Germán López', grupo: '10.1', horas: 10},
                   { id: 3, nombre: 'Física', profesor: 'Rocío Bermudez', grupo: '2.1', horas: 10},
                   { id: 4, nombre: 'Ingles', profesor: 'Cristian Dario Alzate', grupo: '9.1', horas: 10}
                   ];


@Injectable()
export class AreasListService {

  constructor() { }

  getAreas() {
    return AreasFake;
  }

}
