import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TavernModule} from './tavern/tavern.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TavernModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
