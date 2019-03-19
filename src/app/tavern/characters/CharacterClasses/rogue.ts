import {CharacterClass} from '../character-class';
import {CharacterStats} from '../character-stats';

export class Rogue extends CharacterClass {
  constructor() {
    const attrs = {
      name: 'rogue',
      classUrl: '/assets/classes/rogue.png',
      statsPerLvl: new CharacterStats({agi: 3, str: 1, spirit: 0, int: 0, stamina: 0}),
    };
    super(attrs);
  }
}
