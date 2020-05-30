import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';

import { PartsFooterModule } from './ui/parts-footer/parts-footer.module';
import { PartsHeaderModule } from './ui/parts-header/parts-header.module';
import { PartsSideBarModule } from './ui/parts-side-bar/parts-side-bar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    PartsFooterModule,
    PartsHeaderModule,
    PartsSideBarModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
