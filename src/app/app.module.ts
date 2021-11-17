import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroApp1Component } from './micro-app1/micro-app1.component';
import { HomePageComponent } from './home-page/home-page.component';
import { createCustomElement } from '@angular/elements';
import { MicroApp2Component } from './micro-app2/micro-app2.component';
import { MicroAppLazyLoadingComponent } from './micro-app-lazy-loading/micro-app-lazy-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector){

  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const microAppLazyLoading = createCustomElement(MicroAppLazyLoadingComponent, {injector: this.injector});
    customElements.define('app-lazy-loading', microAppLazyLoading);    
  }
}
