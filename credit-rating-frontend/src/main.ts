import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { MortgageFormComponent } from './app/components/mortgage-form/mortgage-form.component';
import { MortgageListComponent } from './app/components/mortgage-list/mortgage-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'mortgage-form', component: MortgageFormComponent },
      { path: 'mortgage-list', component: MortgageListComponent },
      { path: '', redirectTo: 'mortgage-list', pathMatch: 'full' }, // Default route
      { path: '**', redirectTo: 'mortgage-list' } // Catch-all route
    ]),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
