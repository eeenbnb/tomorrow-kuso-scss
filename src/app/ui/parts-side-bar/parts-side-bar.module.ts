import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PartsSideBarComponent } from './parts-side-bar/parts-side-bar.component';



@NgModule({
  declarations: [PartsSideBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PartsSideBarComponent],
})
export class PartsSideBarModule { }
