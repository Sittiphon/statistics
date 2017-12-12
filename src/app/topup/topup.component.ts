import { Component, OnInit } from '@angular/core';
import { HttpService }         from '../http.service';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [], label: 'Cash'},
    {data: [], label: 'Credit Card'}
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
    this.getTopupQue()
  }

  getTopupQue () {
    let cash = []
    let card = []
    this.http.getTopupQue()
        .subscribe(
          res => {
            const myArray = [];
            for (let key in res) {
              myArray.push(res[key]);
            }

            let labels = []
            for (let key2 of myArray[0]) {
              labels.push(key2['topup']);
              cash.push(key2['cash']);
              card.push(key2['card']);
            }

            let cloneLabels = JSON.parse(JSON.stringify(this.barChartLabels));
            cloneLabels = labels;
            this.barChartLabels = cloneLabels;
          }          
        )
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    console.log(clone);
    clone[0].data = cash;
    clone[1].data = card;
    this.barChartData = clone;
  }

}
