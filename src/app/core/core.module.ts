import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule, DataTableModule,
SharedModule
  } from 'primeng/primeng';

 
@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [],
  exports: []
})
export class CoreModule { }
