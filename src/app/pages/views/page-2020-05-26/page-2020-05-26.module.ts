import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component20200526Module } from '../../../ui-kuso/component-2020-05-26/component-2020-05-26.module'

import { Page20200526RoutingModule } from './page-2020-05-26-routing.module';
import { PageY2020M05D26Component } from './page-y2020-m05-d26/page-y2020-m05-d26.component';


@NgModule({
  declarations: [PageY2020M05D26Component],
  imports: [
    CommonModule,
    Page20200526RoutingModule,
    Component20200526Module
  ]
})
export class Page20200526Module { }
