import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/services/policy.service';
import { appConstants } from 'src/app/shared/config';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  public policyList: any[] = []
  public labels: any = appConstants.labels
  constructor(public _service: PolicyService, public _commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllPolicies()
    this._commonService.refreshPolicyGrid().subscribe(res => {
      if (res) {
        this.getAllPolicies();
      }
    })
  }

  getAllPolicies() {
    this._service.getAllPolicies().subscribe((res: any) => {
      if (res) {
        this.prepSubArray(res)
      }
    })
  }

  prepSubArray(res: any[]) {
    this.policyList = []
    for (let index = 0; index < res.length; index += 8) {
      let subArr = res.slice(index, index + 6);
      this.policyList.push(subArr)
    }
  }
}
