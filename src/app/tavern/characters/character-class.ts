import {CharacterStats} from './character-stats';

export abstract class CharacterClass {
  name: string;
  classUrl: string;
  statsPerLvl: CharacterStats;
  constructor(attrs: {name: string, classUrl: string, statsPerLvl: CharacterStats}) {
    this.name = attrs.name;
    this.classUrl = attrs.classUrl;
    this.statsPerLvl = attrs.statsPerLvl;
  }
}
