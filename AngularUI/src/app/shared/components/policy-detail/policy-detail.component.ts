import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PolicyFormComponent } from '../policy-form/policy-form.component';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.scss']
})
export class PolicyDetailComponent implements OnInit {

  public policyDetials: any = this.data.policy

  constructor(public dialogRef: MatDialogRef<PolicyDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.policyDetials);
    
  }

  editDetails(policyData: any){
    this.dialog.open(PolicyFormComponent, {
      width: '700px', 
      data: {
        policy: policyData, 
        isFormForEdit: true
      }
    })
    this.dialogRef.close()
    
  }

  close(){
    this.dialogRef.close()
  }
}
