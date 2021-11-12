import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  private isLoading = new BehaviorSubject<boolean>(false)

  apiCallStart(){
    console.log('Called strat');
    
    this.isLoading.next(true)
  }

  apiCallFinished(){
    this.isLoading.next(false)
  }

  getLoadingStatus(){
    return this.isLoading.asObservable()
  }
}
