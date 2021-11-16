import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroApp1Component } from './micro-app1/micro-app1.component';
import { HomePageComponent } from './home-page/home-page.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    MicroApp1Component,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector){

  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const microApp1 = createCustomElement(MicroApp1Component, {injector: this.injector});
    customElements.define('app-one', microApp1);    
  }
}
