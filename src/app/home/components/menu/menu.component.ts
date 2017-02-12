import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  _name = '';
  title = 'Osis';
  isCollapsed: true;

  @Input()
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }


  constructor() { }

  ngOnInit() {
  }

}
