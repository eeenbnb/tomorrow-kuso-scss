import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component20200523Module } from '../../../ui-kuso/component-2020-05-23/component-2020-05-23.module'

import { Page20200523RoutingModule } from './page-2020-05-23-routing.module';
import { PageY2020M05D23Component } from './page-y2020-m05-d23/page-y2020-m05-d23.component';


@NgModule({
  declarations: [PageY2020M05D23Component],
  imports: [
    CommonModule,
    Page20200523RoutingModule,
    Component20200523Module
  ]
})
export class Page20200523Module { }
