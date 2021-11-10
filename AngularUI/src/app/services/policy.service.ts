import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConstants } from '../shared/config';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private _http: HttpClient) { }

  private headers = new HttpHeaders().set('Content-Type','application/json');

  getAllPolicies(){
    return this._http.get(appConstants.APIUrls.policiesAPI.getAllPolicies)
  }

  addNewPolicy(object: any){
    return this._http.post(appConstants.APIUrls.policiesAPI.addNewPolicy, JSON.stringify(object), {headers:this.headers})
  }
}
