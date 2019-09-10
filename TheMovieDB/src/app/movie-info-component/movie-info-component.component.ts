import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-info-component',
  templateUrl: './movie-info-component.component.html',
  styleUrls: ['./movie-info-component.component.css']
})
export class MovieInfoComponentComponent implements OnInit {

  @Input() Title: string;
  @Input() Rating: number;
  @Input() ShortDescription: string;
  @Input() RunTime: number;
  @Input() ReleaseDate: Date;
  @Input() MovieThumbnail: string;
  
  constructor() { }

  ngOnInit() {
  }

}
