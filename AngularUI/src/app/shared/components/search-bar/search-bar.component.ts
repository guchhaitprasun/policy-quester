import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { debounceTime , distinctUntilChanged} from "rxjs/operators";
import { MatDialog } from '@angular/material/dialog';
import { PolicyDetailComponent } from '../policy-detail/policy-detail.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public results: any[] = []
  public queryField: FormControl = new FormControl();
  public subject: Subject<any> = new Subject();
  public showResult: boolean = false

  constructor(private _searchService: SearchService, private _matDialog: MatDialog) { }

  ngOnInit(): void {
    this.queryField.valueChanges
    .pipe(debounceTime(400))
    .pipe(distinctUntilChanged())
    .subscribe(qf => this._searchService.search(qf)
    .subscribe((res: any) => {
      this.results = []
      this.results = res
      this.showResult = true
    }))
  }

  clearSearch(){
    // this.queryField.patchValue('');
    // this.results = []
  }

  getDetails(id: any){
    this.showResult = false

    let policyDetails = this.results.filter(o => o.id === id)[0]

    this._matDialog.open(PolicyDetailComponent, {
      width: '700px', 
      data: {
        policy: policyDetails
      }
    })    
  }

}
