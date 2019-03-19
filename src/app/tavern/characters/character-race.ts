import {CharacterStats} from './character-stats';

export abstract class CharacterRace {
  name: string;
  raceUrl: string;
  faction: string;
  factionUrl: string;
  baseStats: CharacterStats;

  constructor(attrs: {name: string, raceUrl: string, faction: string, factionUrl: string, baseStats: CharacterStats}) {
    this.name = attrs.name;
    this.raceUrl = attrs.raceUrl;
    this.faction = attrs.faction;
    this.factionUrl = attrs.factionUrl;
    this.baseStats = attrs.baseStats;
  }
}
