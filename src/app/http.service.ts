import { Injectable }               from '@angular/core';
import { Headers, Http, Response, RequestOptions }  from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import { Statistic }               from './statistic';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  private apiUrl = 'http://52.163.59.88/api/laravel/rfid';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  constructor
  (
    private http: Http
  ) { }

  getTotalTopup() {
    const url = `${this.apiUrl}/totaltopup`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);

      // return Observable
      //   .interval(5000)
      //   .flatMap(() => {
      //     return this.http.get(url)
      //       .map((res: Response) => res.json())
      //       .catch(this.handleError);
      //   })
  }

  getTotalWithdraw() {
    const url = `${this.apiUrl}/totalwithdraw`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getTotalUser() {
    const url = `${this.apiUrl}/totaluser`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  getTotalSale() {
    const url = `${this.apiUrl}/totalsale`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  getTopupQue () {
    const url = `${this.apiUrl}/topupQue`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  getQueposAmount() {
    const url = `${this.apiUrl}/posQueAmount`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  posGetposQue() {
    const url = `${this.apiUrl}/posQue`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  userGetTotal() {
    const url = `${this.apiUrl}/userTotal`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  userGetIn() {
    const url = `${this.apiUrl}/userIn`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  userGetOut() {
    const url = `${this.apiUrl}/userOut`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  userGetNotCome() {
    const url = `${this.apiUrl}/userNotCome`
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError)
  }

  private handleError (error: any) {
    console.log(error)
    return Observable.throw(error);
  }

}
