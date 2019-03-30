import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterCreationComponent } from './character-creation/character-creation.component';
import { CharacterComponent } from './character/character.component';
import { RaceIconComponent } from './race-icon/race-icon.component';
import { FactionIconComponent } from './faction-icon/faction-icon.component';
import { GenderIconComponent } from './gender-icon/gender-icon.component';

@NgModule({
  declarations: [CharacterCreationComponent, CharacterComponent, RaceIconComponent, FactionIconComponent, GenderIconComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ],
})
export class CharacterModule { }
