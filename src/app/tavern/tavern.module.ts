import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TavernRoutingModule } from './tavern-routing.module';
import { RoomComponent } from './room/room.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    RoomComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    TavernRoutingModule
  ],
  exports: [
    RoomComponent
  ]

})
export class TavernModule { }
