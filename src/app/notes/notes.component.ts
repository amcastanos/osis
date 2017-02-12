import { Component, OnInit } from '@angular/core';
import { Areas }  from './../areas/areas.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  area: Areas = {id: 1, nombre: 'Cálculo', profesor: 'Germán Lopez', grupo: '9.1', horas: 10};
  periodos = [ true, false, false, false ];

  constructor() { }



  ngOnInit() {
  }

  station(n: number) {
      return this.periodos[n];
  }

  viewPeriodo(n: number) {
    this.periodos.forEach((item, index) => {
      if (index !== n) {
        this.periodos[index] = false;
      }else {
        this.periodos[index] = true;
      }
    });
  }

}
