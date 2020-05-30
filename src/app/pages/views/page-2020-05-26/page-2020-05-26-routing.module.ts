import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageY2020M05D26Component } from './page-y2020-m05-d26/page-y2020-m05-d26.component';

const routes: Routes = [
  {
    path: "",
    component: PageY2020M05D26Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page20200526RoutingModule { }
