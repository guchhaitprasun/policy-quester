import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu';
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';
import { PolicyDetailComponent } from './components/policy-detail/policy-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PolicyFormComponent } from './components/policy-form/policy-form.component'
import { MatSelectModule} from '@angular/material/select'
import { MatCheckboxModule} from '@angular/material/checkbox'



@NgModule({
  declarations: [
    HeaderToolbarComponent,
    ErrorPageComponent,
    SearchBarComponent,
    DisplayCardsComponent,
    PolicyDetailComponent,
    PolicyFormComponent
  ],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatMenuModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDialogModule, 
    MatSelectModule, 
    MatCheckboxModule
  ], 
  exports: [
    HeaderToolbarComponent, 
    ErrorPageComponent, 
    DisplayCardsComponent,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatMenuModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDialogModule, 
    MatSelectModule, 
    MatCheckboxModule
  ]
})
export class SharedModule { }
