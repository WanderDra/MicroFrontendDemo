import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BroadcastService } from '../broadcast.service';
import { LazyLoadScriptService } from '../lazy-load-script.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  
})
export class HomePageComponent implements OnInit {

  isApp3Loaded: boolean = false;
  broadcastSub$: Subject<string>;
  inputVal: string = '';

  constructor(private lazyloader: LazyLoadScriptService, private broadcast: BroadcastService) { 
    this.broadcastSub$ = this.broadcast.broadcast$;
  }

  ngOnInit(): void {
    this.lazyloader.loadScript('../assets/MicroAppDataSharing/main.js').subscribe();
    this.lazyloader.loadScript('../assets/MicroAppDataSharing/polyfills.js').subscribe();
  }

  onLazyLoadBtnClicked(){
    this.lazyloader.loadScript('../assets/MicroAppLazyLoading/main.js').subscribe();
    this.lazyloader.loadScript('../assets/MicroAppLazyLoading/polyfills.js').subscribe();
    this.isApp3Loaded = true;
  }

  onInputChange(){
    this.broadcastSub$.next(this.inputVal);
  }

}
