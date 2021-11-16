import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro-app2',
  templateUrl: './micro-app2.component.html',
  styleUrls: ['./micro-app2.component.scss']
})
export class MicroApp2Component implements OnInit {

  @Input() input: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
