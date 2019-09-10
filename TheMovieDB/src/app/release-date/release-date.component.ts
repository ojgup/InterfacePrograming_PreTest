import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-release-date',
  templateUrl: './release-date.component.html',
  styleUrls: ['./release-date.component.css']
})
export class ReleaseDateComponent implements OnInit {
  
  @Input() releasedate: Date;

  year: number;
  month: number;
  day: number;
  constructor() { 

  }

  ngOnInit() {
    this.year = this.releasedate.getFullYear();
    this.month = this.releasedate.getMonth();
    this.day = this.releasedate.getDate();
  }

}
