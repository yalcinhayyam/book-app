import { Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent  },
];
