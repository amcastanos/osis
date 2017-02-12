import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AreasModule }  from './../areas/areas.module';
import { CoreModule } from '../core/core.module';
import { NotesModule } from '../notes/notes.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    HttpModule,
    CoreModule,
    AreasModule,
    NotesModule
  ],
  declarations: [HomeComponent, MenuComponent],
  bootstrap: [ HomeComponent ]
})
export class HomeModule { }
