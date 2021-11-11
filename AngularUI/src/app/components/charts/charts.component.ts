import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Options, SeriesOptionsType } from 'highcharts';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  public barChart: Chart
  public chartOptions: Options;
  public regions: any[] = [];
  public CHART_OBJECT: any = {
    chart: {
      type: 'bar',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Policy Sales',
    },
    yAxis: {
      visible: true,
      gridLineColor: '#69f0ae',
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      lineColor: '#fff',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },

    plotOptions: {
      series: {
        borderRadius: 5,
      } as any,
    },

    series: [
      {
        type: 'bar',
        color: '#7b1fa2',
        name: 'Policies Sold',
        data: [],
      },
    ],
  };


  constructor(private _commonSrvice: CommonService) { }

  ngOnInit() {
    // this.chartOptions = CHART_OBJECT
    // this.barChart = new Chart(this.chartOptions);
    this.getRegionsList()
    this.getOverallSalesResult(0)
  }

  getRegionsList(){
    this._commonSrvice.getRegions().subscribe((res:any) => {
      if(res){
        this.regions.push({id: 0, regionname: 'ALL REGIONS'})
        this.regions.push(...res)
      }
    })
  }

  getOverallSalesResult(regionId: number, text: string = "Overall Policy Sales") {
    // this.customerList = new MatTableDataSource<customerDTO>(data.map((obj, index) => ({...obj, position: index+1})));
    this._commonSrvice.getChartData(regionId).subscribe((res: any) => {
      if (res) {
        let data = res as any[]
        let chartData = data.map((o, index) => ({ y: o }))
        this.CHART_OBJECT.series[0]['data'] = chartData
        this.CHART_OBJECT.title.text = text
        console.log(this.CHART_OBJECT);
        this.barChart = new Chart(this.CHART_OBJECT);
      }
    })
  }

  refreshChart(region: any){
    let regionName = this.regions.filter(o => {
      return o.id === region.value
    })[0].regionname

    if(region.value){
      this.getOverallSalesResult(region.value, `${regionName} Policy Sales`)
    }else{
      this.getOverallSalesResult(region.value)
    }
    
  }
}



