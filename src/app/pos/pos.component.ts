import { Component, OnInit } from '@angular/core';
import { HttpService }         from '../http.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [], label: 'Amount'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getQueposAmount()
  }

  getQueposAmount() {
    let dataLabel = []
    let amount = []
    this.http.getQueposAmount()
        .subscribe(
          res => {
            const myArray = [];
            for (let key in res) {
              myArray.push(res[key]);
            }
            for (let key2 of myArray[0]) {
              console.log(key2['booth_name'])
              dataLabel.push(key2['booth_name'])
              amount.push(key2['amount'])
            }
            console.log(dataLabel)
            let cloneLabels = JSON.parse(JSON.stringify(this.barChartLabels));
            cloneLabels = dataLabel;
            this.barChartLabels = cloneLabels;
          }
        )
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    console.log(clone);
    clone[0].data = amount;
    this.barChartData = clone;
  }

  posGetposQue() {
    this.http.posGetposQue()
        .subscribe(
          res => {
            const myArray = [];
            for (let key in res) {
              myArray.push(res[key]);
            }
            const data =[]
            for (let key2 of myArray[0]) {
              console.log(key2['booth_name'])
              data.push(key2['booth_name']);
            }
          }
        )
  }

}
