import {CharacterStats} from '../character-stats';
import {CharacterRace} from '../character-race';

export class Human extends CharacterRace {
  constructor() {
    const attrs = {
      name: 'human',
      raceUrl: '/assets/races/human.png',
      faction: 'alliance',
      factionUrl: '/assets/factions/alliance.png',
      baseStats: new CharacterStats({str: 20, agi: 20, stamina: 20, int: 20, spirit: 20})
    };
    super(attrs);
  }
}
