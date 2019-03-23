import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel/panel.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { RegistrationPanelComponent } from './registration-panel/registration-panel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PanelComponent, LoginPanelComponent, RegistrationPanelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PanelRoutingModule,
    FormsModule
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
