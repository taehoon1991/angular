import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from
  '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ZoomDirective } from './zoom.directive';
import { ContainerComponent } from './container/container.component';
import { ChildComponent } from './child/child.component';
import { AnimationComponent } from './animation/animation.component';
import { AnimatedComponent } from './animation/animated/animated.component';


@NgModule({
  declarations: [
    AppComponent,
    ZoomDirective,
    ContainerComponent,
    ChildComponent,
    AnimationComponent,
    AnimatedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
