import { Component, OnInit } from '@angular/core';
import { HttpService }         from '../http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userTotal: string;
  userCome: string;
  userIn: string;
  userOut: string;
  userNotCome: string;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.userGetTotal()
    this.userGetCome()
    this.userGetIn()
    this.userGetOut()
    this.userGetNotCome()
  }

  userGetTotal() {
    this.http.userGetTotal()
        .subscribe(
          res => {
            var number = parseInt(res[0]['Totaluser'])
            var curren = this.formatCurren(number, '')
            this.userTotal = curren
          }
        )
  }

  userGetCome() {
    this.http.getTotalUser()
        .subscribe(
          res => {
            var number = parseInt(res[0]['Totaluser'])
            var curren = this.formatCurren(number, '')
            this.userCome = curren
          }
        )
  }

  userGetIn() {
    this.http.userGetIn()
        .subscribe(
          res => {
            var number = parseInt(res[0]['Totaluser'])
            var curren = this.formatCurren(number, '')
            this.userIn = curren
          }
        )
  }

  userGetOut() {
    this.http.userGetOut()
        .subscribe(
          res => {
            var number = parseInt(res[0]['Totaluser'])
            var curren = this.formatCurren(number, '')
            this.userOut = curren
          }
        )
  }

  userGetNotCome() {
    this.http.userGetNotCome()
        .subscribe(
          res => {
            var number = parseInt(res[0]['Totaluser'])
            var curren = this.formatCurren(number, '')
            this.userNotCome = curren
          }
        )
  }

  formatCurren(n, currency) {
    return currency + " " + n.toFixed(0).replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
  }

}
