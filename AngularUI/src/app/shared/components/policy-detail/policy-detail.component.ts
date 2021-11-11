import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PolicyService } from 'src/app/services/policy.service';
import { CommonService } from '../../services/common.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { PolicyFormComponent } from '../policy-form/policy-form.component';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.scss']
})
export class PolicyDetailComponent implements OnInit {

  public policyDetials: any = this.data.policy

  public customerName: string = ''
  public fuelType: string = ''
  public vehicleType: string = ''

  constructor(public dialogRef: MatDialogRef<PolicyDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private _policyService: PolicyService, private _commonService: CommonService) { }

  ngOnInit(): void {
    this.getPolicyInformation()
    console.log(this.policyDetials);
  }

  getPolicyInformation(){
    this._commonService.getCustomerName(this.policyDetials.customerid).subscribe((res: any) => {
      this.customerName = res.clientName
    })

    this._commonService.getFuelSegmentName(this.policyDetials.fueltype).subscribe((res: any) => {
      this.fuelType = res.segment
    })

    this._commonService.getVehicleSegmentName(this.policyDetials.vehicletype).subscribe((res: any) => {
      this.vehicleType = res.segment
    })
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

  deletePolicy(policyData: any){

    const dialofRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px', 
      data: {
        message: 'Policy will be deleted permanantly'
      }
    })

    dialofRef.afterClosed().subscribe(res => {
      if(res){
        this._policyService.deletePolicy(policyData.id).subscribe((res: any) => {
          if(res){
            console.log(res);
            this._commonService.setPolicyGrid(true);
            this.dialogRef.close(1)
          }
        })
      }
    })
  }

  getDateTimeInFormat(datetime: any){
    return new Date(datetime).toDateString()
  }

  close(){
    this.dialogRef.close()
  }
}
