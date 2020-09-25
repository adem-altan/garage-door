import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private isOpen = false;
  private garageDoorStatus = 'Unknown';

  private openClose = () => {
    this.isOpen = !this.isOpen;
    this.garageDoorStatus = this.isOpen ? 'Open' : 'Close';
  }

  constructor() {}

}
