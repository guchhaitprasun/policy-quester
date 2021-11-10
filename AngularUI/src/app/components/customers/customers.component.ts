import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { appConstants } from 'src/app/shared/config';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customerList : any[] = []
  public labels: any = appConstants.labels
  constructor(public _service: CustomerService) { }

  ngOnInit(): void {
   this.getAllPolicies()
  }

  getAllPolicies(){
    this._service.getAllCustomers().subscribe((res: any) => {
      if(res){
        console.log(res);
        
        this.prepSubArray(res)
      }
    })
  }

  prepSubArray(res: any[]){
    this.customerList = []
    for(let index = 0; index < res.length; index +=8){
      let subArr = res.slice(index, index+6);
      this.customerList.push(subArr)
    }
  }

}
