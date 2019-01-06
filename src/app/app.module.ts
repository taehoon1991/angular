import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { ZoomDirective } from './zoom.directive';
import { ContainerComponent } from './container/container.component';
import { ChildComponent } from './child/child.component';
import { HttpComponent } from './http/http.component';
import { RoutingtestComponent } from './routingtest/routingtest.component';
import { Route2Component } from './routingtest/route2/route2.component';
import { HomeComponent } from './routingtest/home/home.component';

 
@NgModule({
  declarations: [
    AppComponent,
    ZoomDirective,
    ContainerComponent,
    ChildComponent,
    HttpComponent,
    RoutingtestComponent,
    Route2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
