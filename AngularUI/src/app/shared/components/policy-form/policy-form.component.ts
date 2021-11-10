import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../services/common.service';
import { debounceTime , distinctUntilChanged} from "rxjs/operators";
import { CustomerService } from 'src/app/services/customer.service';
import { FormErrorStateMacher } from '../../classes/FormErrorStateMatcher';
import { PolicyDTO } from '../../classes/PolicyDTO';
import { PolicyService } from 'src/app/services/policy.service';

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
      id:[''], 
      vehicletype: [null, [Validators.required]], 
      fueltype: [null, [Validators.required]], 
      premium: [null, [Validators.required, Validators.max(1000000), Validators.min(0), Validators.pattern(/^[0-9]*$/)]], 
      bodilyinjuryliability: [false],
      personinjuryprotection: [false],
      propertydamageliability: [false],
      collision: [false],
      comprehensive: [false],
      customerid: [null, [Validators.required]],
      dateofpurchase: {value:'', disabled: true}
    })
  }

  patchForEdit(){
    if(this.data && this.data.isFormForEdit){
      let date = new Date(this.data.policy.dateofpurchase)
      this.policyDetailsForm.patchValue(this.data.policy)
      this.policyDetailsForm.patchValue({
        dateofpurchase: date.toDateString()
      })
      this.name.disable()
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
    let policy = {
      "id": 12345,
      "dateofpurchase": "2018-01-16T00:00:00",
      "customerid": 400,
      "vehicletype": 2,
      "fueltype": 2,
      "premium": 958,
      "bodilyinjuryliability": false,
      "personinjuryprotection": false,
      "propertydamageliability": false,
      "collision": true,
      "comprehensive": true,
      "customer": null,
      "fueltypeNavigation": null
  }
    let formData = this.policyDetailsForm.value
    console.log(formData, policy);
    

    if(this.data && this.data.isFormForEdit){
      
    }else{
      this._policyService.addNewPolicy(policy).subscribe(res => {
        console.log(res);
      })
    }
  }

}
