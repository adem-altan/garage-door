import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styles: [`
        :host ::ng-deep button {
            margin-right: .5em;
        }
    `]
})
export class AppComponent { 
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    let isOpen: boolean = false;
  }

}