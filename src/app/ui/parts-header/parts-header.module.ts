import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsHeaderComponent } from './parts-header/parts-header.component';



@NgModule({
  declarations: [PartsHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [PartsHeaderComponent],
})
export class PartsHeaderModule { }
