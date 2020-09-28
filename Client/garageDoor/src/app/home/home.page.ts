import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public isOpen = false;
  public garageDoorStatus = 'Unknown';
  public lastStatusUpdate: IonDatetime;
  public url = 'https://ademsgaragedoor.loca.lt/open';

  public openClose = () => {
    this.isOpen = !this.isOpen;
    this.garageDoorStatus = this.isOpen ? 'Open' : 'Close';
    this.http.get<Response>(this.url).toPromise().then(response => {
      this.lastStatusUpdate = response.dateTime;
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
