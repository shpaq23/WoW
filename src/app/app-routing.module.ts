import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RoomComponent} from './tavern/room/room.component';
import {AuthGuard} from './api/guards/auth.guard';
import {LoginPanelComponent} from './panel/login-panel/login-panel.component';
import {RegistrationPanelComponent} from './panel/registration-panel/registration-panel.component';

const appRoutes: Routes = [
  {
    path: 'characters',
    component: RoomComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPanelComponent
  },
  {
    path: 'registration',
    component: RegistrationPanelComponent
  },

  {path: '**', redirectTo: 'characters'}
];
export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AppRoutingModule { }

