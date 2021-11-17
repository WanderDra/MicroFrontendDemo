import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from '../lazy-load-script.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  
})
export class HomePageComponent implements OnInit {

  isApp3Loaded: boolean = false;

  constructor(private lazyloader: LazyLoadScriptService) { }

  ngOnInit(): void {
  }

  onLazyLoadBtnClicked(){
    this.lazyloader.loadScript('../assets/MicroAppLazyLoading/main.js').subscribe();
    this.lazyloader.loadScript('../assets/MicroAppLazyLoading/polyfills.js').subscribe();
    this.isApp3Loaded = true;
  }

}
