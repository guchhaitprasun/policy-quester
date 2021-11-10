import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConstants } from '../config';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) { }

  search(id: string){
    let searchIdString = id ? id : '-1'
    return this._http.get(appConstants.APIUrls.commonAPI.search+searchIdString)
  }
}
