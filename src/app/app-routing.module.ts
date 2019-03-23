import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RoomComponent} from './tavern/room/room.component';
import {AuthGuard} from './api/guards/auth.guard';
import {PanelComponent} from './panel/panel/panel.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RoomComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: PanelComponent
  },
  {path: '**', redirectTo: ''}
];
export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AppRoutingModule { }

