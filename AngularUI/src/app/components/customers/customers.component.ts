import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/services/customer.service';
import { appConstants } from 'src/app/shared/config';

export interface customerDTO {
  position: number;
  clientname: string;
  emailaddress: string;
  gendername: string;
  incomerange: string;
  regionname: string;
  statusname: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public customerList: any = []
  public labels: any = appConstants.labels
  public displayedColumns: string[] = ['position', 'clientname', 'emailaddress', 'gendername','statusname', 'incomerange', 'regionname'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public _service: CustomerService) { }

  ngOnInit(): void {
   this.getAllPolicies()
  }

  getAllPolicies(){
    this._service.getAllCustomers().subscribe((res: any) => {
      if(res){

        let data = res as any[]
        console.log(res);
        this.customerList = new MatTableDataSource<customerDTO>(data.map((obj, index) => ({...obj, position: index+1})));
        this.customerList.paginator = this.paginator;
      }
    })
  }

}
