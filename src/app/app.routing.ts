import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
    {
        path: 'test',
        component: TestComponent

    },
    { 
        path: 'home', 
        component: HomeComponent 
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
