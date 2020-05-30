import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    loadChildren: ()=> import("../pages/home/home-routing.module").then(m => m.HomeRoutingModule),
  },
  {
    path:"view-2020-05-23",
    loadChildren: ()=> import("../pages/views/page-2020-05-23/page-2020-05-23.module").then(m => m.Page20200523Module),
  },
  {
    path:"view-2020-05-26",
    loadChildren: ()=> import("../pages/views/page-2020-05-26/page-2020-05-26.module").then(m => m.Page20200526Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
