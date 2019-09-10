import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-short-description',
  templateUrl: './short-description.component.html',
  styleUrls: ['./short-description.component.css']
})
export class ShortDescriptionComponent implements OnInit {

  @Input() shortdescription: string;
  constructor() { }

  ngOnInit() {
  }

}
