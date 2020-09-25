import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private isOpen = false;

  private openClose = () => {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

}
