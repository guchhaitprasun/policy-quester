import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [

  {
    path: '', 
    redirectTo: 'policies', 
    pathMatch: 'full'
  }, 
  {
    path: 'policies', 
    component: PoliciesComponent
  }, 
  {
    path: 'customers', 
    component: CustomersComponent
  },
  {
    path: 'charts', 
    component: ChartsComponent
  }, 
  {
    path: '**', 
    component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
