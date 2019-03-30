import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterComponent} from './character/character.component';
import {CharacterCreationComponent} from './character-creation/character-creation.component';
import {AuthGuard} from '../api/guards/auth.guard';

const routes: Routes = [
  {
    path: 'character',
    component: CharacterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'character/create',
    component: CharacterCreationComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
