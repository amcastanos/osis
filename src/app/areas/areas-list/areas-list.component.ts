import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreasListService } from './areas-list.service';
import { Areas } from '../areas.model';

@Component({
  selector: 'app-areas-list',
  templateUrl: './areas-list.component.html',
  styleUrls: ['./areas-list.component.css']
})
export class AreasListComponent implements OnInit {

  areas: Areas[];

  constructor(
    private areasListService: AreasListService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.areas = this.areasListService.getAreas();
  }

  notes() {
    let link = ['home/notes'];
    this.router.navigate(link);
  }

}
