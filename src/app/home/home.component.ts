import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  calculateYear(year : number):number {
    return new Date(Date.now()).getFullYear() - year;
  }
}
