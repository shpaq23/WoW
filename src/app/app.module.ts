import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TavernModule} from './tavern/tavern.module';
import {AppRoutingModule, routing} from './app-routing.module';
import {PanelModule} from './panel/panel.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './api/interceptors/jwt-interceptor';
import {ErrorInterceptor} from './api/interceptors/error-interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TavernModule,
    PanelModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [
     {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
     {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
