import {CharacterStats} from './character-stats';
import {Maper} from './maper';

export class CharacterClass {
  name: string;
  classUrl: string;
  statsPerLvl: CharacterStats;

  constructor(attrs: { name: string }) {
    this.name = attrs.name;
    this.classUrl = `/assets/classes/${attrs.name}.png`;
    this.statsPerLvl = Maper.statsPerLvl[attrs.name];
  }
}
