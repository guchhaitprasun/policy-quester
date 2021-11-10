import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConstants } from '../shared/config';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  getAllCustomers(){
    return this._http.get(appConstants.APIUrls.customerAPI.getAllCustomers)
  }

  searchCustomer(searchString: any){
    let _searchString = searchString ? searchString : '-1'
    return this._http.get(appConstants.APIUrls.customerAPI.searchCustomer+_searchString)
  }

  getCustomer(id: number){
    return this._http.get(appConstants.APIUrls.customerAPI.getCustomer + id)
  }
}
