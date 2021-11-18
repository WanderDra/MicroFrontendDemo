import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-micro-app-broadcast',
  templateUrl: './micro-app-broadcast.component.html',
  styleUrls: ['./micro-app-broadcast.component.scss']
})
export class MicroAppBroadcastComponent implements OnInit {

  @Input() broadcast?: Subject<string>;
  @Input() testinput: string = '';
  data: string = '';

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.broadcast?.subscribe((data) => {
      this.data = data;
    });
  }

  onRefresh(){
    console.log(this.data);
    
  }

}
