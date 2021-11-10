import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PolicyDetailComponent } from '../policy-detail/policy-detail.component';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss']
})
export class DisplayCardsComponent implements OnInit {

  @Input('policy')
  dataObj: any = new Object();

  @Input('firstLabel') fistLabel: string = ''
  @Input('secondLabel') secondLabel: string = ''
  @Input('isPolicy') isPolicy: boolean = false
  
  constructor(private _matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  getDateString(dateS: string){
    let date = new Date(dateS)
    return date.toDateString()
  }

  viewCard(id: any){
    if(this.isPolicy){
      this._matDialog.open(PolicyDetailComponent, {
        width: '700px', 
        data: {
          policy: this.dataObj
        }
      })  
    }
  }
}
