import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { ServiceModule } from './service/service.module';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule,
    ServiceModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
