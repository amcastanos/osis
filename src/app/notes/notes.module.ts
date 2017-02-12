import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule
  ],
  declarations: [NotesComponent]
})
export class NotesModule { }
