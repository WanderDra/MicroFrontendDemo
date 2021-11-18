import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroApp1Component } from './micro-app1/micro-app1.component';
import { HomePageComponent } from './home-page/home-page.component';
import { createCustomElement } from '@angular/elements';
import { MicroApp2Component } from './micro-app2/micro-app2.component';
import { MicroAppLazyLoadingComponent } from './micro-app-lazy-loading/micro-app-lazy-loading.component';
import { MicroAppBroadcastComponent } from './micro-app-broadcast/micro-app-broadcast.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MicroAppBroadcastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector){

  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const microAppDataSharing = createCustomElement(MicroAppBroadcastComponent, {injector: this.injector});
    customElements.define('app-data-sharing', microAppDataSharing);    
  }
}
