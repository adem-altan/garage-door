import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private isOpen = false;
  private garageDoorStatus = 'Unknown';
  private url = 'http://dummy.restapiexample.com/api/v1/employees'; //'https://ademsgaragedoor.loca.lt/open';

  private openClose = () => {
    this.isOpen = !this.isOpen;
    this.garageDoorStatus = this.isOpen ? 'Open' : 'Close';
    this.http.get<Response>(this.url).toPromise().then(response => {
      console.log(response);
    });
  }

  constructor(private http: HttpClient) { }
}

interface Response {
  status: string;
  dateTime: IonDatetime;
  action: string;
}
