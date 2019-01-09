import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ZoomDirective } from './zoom.directive';
import { ContainerComponent } from './container/container.component';
import { PromiseComponent } from './promise/promise.component';
import { SharedComponent } from './shared/shared.component';
import { BadguysComponent } from './shared/badguys/badguys.component';
import { GoodGuysComponent } from './shared/good-guys/good-guys.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './menu/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ZoomDirective,
    ContainerComponent,
    PromiseComponent,
    SharedComponent,
    BadguysComponent,
    GoodGuysComponent,
    MenuComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
