import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { appConstants } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  getVehicleTypes(){
    return this._http.get(appConstants.APIUrls.commonAPI.getVehicleType)
  }

  getFuelTypes(){
    return this._http.get(appConstants.APIUrls.commonAPI.getFuelTypes)
  }

  getRegions(){
    return this._http.get(appConstants.APIUrls.commonAPI.getRegions)
  }

  getChartData(regionId: number){
    return this._http.get(appConstants.APIUrls.commonAPI.getChartData+regionId)
  }

  getCustomerName(customerID: number){
    return this._http.get(appConstants.APIUrls.commonAPI.getCustomerName+customerID)
  }

  getFuelSegmentName(id: number){
    return this._http.get(appConstants.APIUrls.commonAPI.getFuelSegment+id)
  }

  getVehicleSegmentName(id: number){
    return this._http.get(appConstants.APIUrls.commonAPI.getVehicleSegment+id)
  }

  private policyGrid = new BehaviorSubject<boolean>(false)
  setPolicyGrid(flag: boolean){
    this.policyGrid.next(flag);
  }

  refreshPolicyGrid(){
    return this.policyGrid.asObservable();
  }
}
