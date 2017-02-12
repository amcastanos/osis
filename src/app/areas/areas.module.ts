import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasListService } from './areas-list/areas-list.service';
import { AreasListComponent } from './areas-list/areas-list.component';
import { CoreModule } from './../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [ AreasListService ],
  declarations: [ AreasListComponent ],
  bootstrap: [ AreasListComponent ]
})
export class AreasModule { }
