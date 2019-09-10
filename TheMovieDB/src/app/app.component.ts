import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'How to Train your Dragon 2';
  url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lRjOR4uclMQijUav4OjeZprlehu.jpg";
  rating = 4.5;
  runtime = 102;
  date = new Date(2014, 6, 14);
}
