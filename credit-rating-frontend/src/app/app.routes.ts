import { Routes } from '@angular/router';
import { MortgageFormComponent } from './components/mortgage-form/mortgage-form.component';
import { MortgageListComponent } from './components/mortgage-list/mortgage-list.component';

export const routes: Routes = [
    { path: 'mortgage-form', component: MortgageFormComponent },
    { path: 'mortgage-list', component: MortgageListComponent },
    { path: '', redirectTo: '/mortgage-list', pathMatch: 'full' },
  ];
  