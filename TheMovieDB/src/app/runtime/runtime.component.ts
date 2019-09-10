import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-runtime',
  templateUrl: './runtime.component.html',
  styleUrls: ['./runtime.component.css']
})
export class RuntimeComponent implements OnInit {

  @Input() RunTime: number;
  constructor() { }

  ngOnInit() {
  }

}
