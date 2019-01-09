import { SharedComponent } from './../shared/shared.component';
import { PromiseComponent } from './../promise/promise.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'page1',
    component: PromiseComponent
  },
  {
    path: 'page2',
    component: SharedComponent
  },
  {
    path: '',
    redirectTo: '/page1',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/page1',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
