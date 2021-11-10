import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: '**', 
    component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
