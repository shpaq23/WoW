import {CharacterStats} from './character-stats';
import {Maper} from './maper';

export class CharacterRace {
  name: string;
  raceUrl: string;
  faction: string;
  factionUrl: string;
  baseStats: CharacterStats;

  constructor(attrs: {name: string}) {
    this.name = attrs.name;
    this.raceUrl = `/assets/races/${attrs.name}.png`;
    this.faction = Maper.faction[attrs.name];
    this.factionUrl = `/assets/factions/${this.faction}`;
    this.baseStats = Maper.baseStats[attrs.name];
  }
}
