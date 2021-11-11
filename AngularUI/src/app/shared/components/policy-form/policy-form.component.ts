import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../services/common.service';
import { debounceTime , distinctUntilChanged} from "rxjs/operators";
import { CustomerService } from 'src/app/services/customer.service';
import { FormErrorStateMacher } from '../../classes/FormErrorStateMatcher';
import { PolicyDTO } from '../../classes/PolicyDTO';
import { PolicyService } from 'src/app/services/policy.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.scss']
})
export class PolicyFormComponent implements OnInit {
  public policyDetailsForm: FormGroup;
  public name: FormControl = new FormControl(null, Validators.required);
  public vehicleTypeList: any[] = []
  public fuelTypeList: any[] = []
  public nameSearchList: any[] = []
  public headerLabel: string = ''
  public showList: boolean = false
  public matcher: FormErrorStateMacher;

  constructor(public dialogRef: MatDialogRef<PolicyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private _dialog: MatDialog, 
    private _formBuilder: FormBuilder,
    private _commonService: CommonService, 
    private _customerServic: CustomerService, 
    private _policyService: PolicyService) { }

  ngOnInit(): void {
    this.matcher = new FormErrorStateMacher();
    this.headerLabel = this.data && this.data.isFormForEdit ? 'Edit Form' : 'Add New Form'
    this.getFuelTypeList()
    this.getVehicleTypeList()
    this.initForm()
    this.initSearchName()
    this.patchForEdit()

    // this.policyDetailsForm.controls.vehicleType.disable()
  }

  initForm(){
    return this.policyDetailsForm = this._formBuilder.group({
      id:[0], 
      vehicletype: [null, [Validators.required]], 
      fueltype: [null, [Validators.required]], 
      premium: [null, [Validators.required, Validators.max(1000000), Validators.min(0), Validators.pattern(/^[0-9]*$/)]], 
      bodilyinjuryliability: [false],
      personinjuryprotection: [false],
      propertydamageliability: [false],
      collision: [false],
      comprehensive: [false],
      customerid: [null, [Validators.required]],
      dateofpurchase: [''], 
      dateString: ['']
    })
  }

  patchForEdit(){
    if(this.data && this.data.isFormForEdit){
      this.policyDetailsForm.patchValue(this.data.policy)
      this.policyDetailsForm.patchValue({
        dateString: new Date(this.data.policy.dateofpurchase).toDateString()
      })
      this.name.disable()
      this.policyDetailsForm.controls.dateString.disable()
      this._customerServic.getCustomer(this.data.policy.customerid).subscribe((res: any) => {
        if(res){
          this.name.patchValue(res['clientname'], {onlySelf: true, emitEvent: false})
        }
      })
    }
  }

  getVehicleTypeList(){
    this._commonService.getVehicleTypes().subscribe((res: any) => {
      if(res){
        this.vehicleTypeList = res
      }
    })
  }

  getFuelTypeList(){
    this._commonService.getFuelTypes().subscribe((res:any) => {
      if(res){
        this.fuelTypeList = res
      }
    })
  }

  addNewCustomer(){
    alert('Under Implementation')
  }

  close(){
    this.dialogRef.close()
  }

  initSearchName(){
    this.name.valueChanges
    .pipe(debounceTime(400))
    .pipe(distinctUntilChanged())
    .subscribe(nm => this._customerServic.searchCustomer(nm)
    .subscribe((res: any) => {
      this.nameSearchList = []
      this.nameSearchList = res
      this.showList = nm ? true : false
    }))
  }

  AddCustomer(customer:any){
    this.name.patchValue(customer.clientname, {onlySelf: true, emitEvent: false})
    this.policyDetailsForm.patchValue({
      customerid: customer.id
    })
    this.showList = false
  }

  savePolicy(){
    let formData = this.policyDetailsForm.value
    formData.premium = +formData.premium
    if(this.data && this.data.isFormForEdit){
      formData.dateofpurchase = this.policyDetailsForm.controls.dateofpurchase.value
      const dialofRef = this._dialog.open(ConfirmationDialogComponent, {
        width: '300px', 
        data: {
          message: 'Are you sure to Update the policy Details'
        }
      })

      dialofRef.afterClosed().subscribe(o => {
        if(o){
          this._policyService.updateExistingPolicy(formData, formData.id).subscribe(res => {
            this._commonService.setPolicyGrid(true);
            this.dialogRef.close(1)
          })
        }
      })

    }else{
      formData.dateofpurchase = null
      const dialofRef = this._dialog.open(ConfirmationDialogComponent, {
        width: '300px', 
        data: {
          message: 'Are you sure to prceed with the new policy registration'
        }
      })

      dialofRef.afterClosed().subscribe(o => {
        if(o){
          this._policyService.addNewPolicy(formData).subscribe(res => {
            if(res){
              this._commonService.setPolicyGrid(true);
              this.dialogRef.close(1);
            }
          })
        }
      })
    }
  }
}
