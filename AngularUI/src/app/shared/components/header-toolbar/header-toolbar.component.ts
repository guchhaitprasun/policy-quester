import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PolicyFormComponent } from '../policy-form/policy-form.component';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  constructor(private _router: Router, private _matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNewPolicy(){
    this._matDialog.open(PolicyFormComponent, {
      width: '700px'
    })
  }

  addNewUser(){
    alert('Under Implementation')
  }

  navigateToRoute(route: any){
    this._router.navigate(['/'+route]);
  }
}
