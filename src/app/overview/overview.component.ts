import { Component, OnInit } from '@angular/core';
import { HttpService }         from '../http.service';
import {Observable} from 'rxjs/Rx';
import { Statistic }               from '../statistic';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  dataTotal: string;
  dataWithdraw: string;
  dataUser: string;
  dataSale: string;
  test: any[] = [];

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [], label: 'Cash'},
    {data: [], label: 'Credit Card'},
    {data: [], label: 'Withdraw'}
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
    this.getTotalTopup()
    this.getTotalWithdraw()
    this.getTotalUser()
    this.getTotalSale()
    this.getTopupQue()
    this.myFunction()
  }

  getTotalTopup() {
    this.http.getTotalTopup()
        .subscribe(
          res => {
            var number = parseInt(res[0]['TotalTopup'])
            console.log(number)
            var curren = this.formatCurren(number, '฿')
            console.log(curren)
            this.dataTotal = curren
          }          
        )
  }

  getTotalWithdraw() {
    this.http.getTotalWithdraw()
        .subscribe(
          res => {
            var number = parseInt(res[0]['Totalwithdraw'])
            var curren = this.formatCurren(number, '฿')
            this.dataWithdraw = curren
            console.log(this.dataWithdraw)
          }
        )
  }

  getTotalUser() {
    this.http.getTotalUser()
        .subscribe(
          res => {
            var number = parseInt(res[0]['Totaluser'])
            var curren = this.formatCurren(number, '')
            this.dataUser = curren
          }
        )
  }

  getTotalSale() {
    this.http.getTotalSale()
        .subscribe(
          res => {
            var number = parseInt(res[0]['SaleAmount'])
            var curren = this.formatCurren(number, '฿')
            this.dataSale = curren
          }
        )
  }

  getTopupQue () {
    let cash = []
    let card = []
    let withdraw =[]
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
              withdraw.push(key2['withdraw']);
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
    clone[2].data = withdraw;
    this.barChartData = clone;
  }

  updateTopupQue() {
    let cash = []
    let card = []
    let withdraw =[]
    this.http.getTopupQue()
        .subscribe(
          res => {
            const myArray = [];
            for (let key in res) {
              myArray.push(res[key]);
            }

            for (let key2 of myArray[0]) {
              cash.push(key2['cash']);
              card.push(key2['card']);
              withdraw.push(key2['withdraw']);
            }
            let clone = JSON.parse(JSON.stringify(this.barChartData));
            console.log(cash);
            clone[0].data = cash;
            clone[1].data = card;
            clone[2].data = withdraw;
            this.barChartData = clone;
          }          
        )
  }

  myFunction() {
    setInterval(() => { 
      this.updateTopupQue(); 
    }, 10000);
}

  formatCurren(n, currency) {
    return currency + " " + n.toFixed(0).replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
  }

}
