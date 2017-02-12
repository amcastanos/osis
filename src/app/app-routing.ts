import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { LoginComponent } from './login/login.component';
import { AreasListComponent } from './areas/areas-list/areas-list.component';
import { NotesComponent }   from './notes/notes.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'areas', component: AreasListComponent },
            { path: 'notes', component: NotesComponent }
        ]

    },
    { path: 'login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
