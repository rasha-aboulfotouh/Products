import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CardComponent } from './card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ViewComponent,
    CardComponent
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    CommonModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
