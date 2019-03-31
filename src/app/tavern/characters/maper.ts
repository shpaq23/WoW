import {CharacterStats} from './character-stats';

export abstract class Maper {
  static readonly faction = {
    human: 'alliance',
    dwarf: 'alliance',
    nightElf: 'alliance',
    gnome: 'alliance',

    orc: 'horde',
    troll: 'horde',
    undead: 'horde',
    tauren: 'horde'
  };
  static readonly baseStats = {
    human: new CharacterStats({agi: 20, spirit: 20, stamina: 20, int: 20, str: 20}),
    dwarf: new CharacterStats({str: 22, agi: 16, stamina: 23, int: 19, spirit: 19}),
    nightelf: new CharacterStats({str: 17, agi: 25, stamina: 19, int: 20, spirit: 20}),
    gnome: new CharacterStats({str: 15, agi: 23, stamina: 19, int: 23, spirit: 20}),

    orc: new CharacterStats({str: 23, agi: 17, stamina: 22, int: 17, spirit: 23}),
    troll: new CharacterStats({str: 21, agi: 22, stamina: 21, int: 16, spirit: 21}),
    undead: new CharacterStats({str: 19, agi: 18, stamina: 21, int: 18, spirit: 25}),
    tauren: new CharacterStats({str: 25, agi: 15, stamina: 22 , int: 15, spirit: 22})
  };
  static readonly statsPerLvl = {
    priest: new CharacterStats({str: 0, agi: 0, stamina: 0, int: 2, spirit: 3}),
    rogue: new CharacterStats({str: 1, agi: 3, stamina: 1, int: 0, spirit: 0}),
    warrior: new CharacterStats({str: 3, agi: 0, stamina: 2, int: 0, spirit: 0}),
    mage: new CharacterStats({str: 0, agi: 0, stamina: 0, int: 3, spirit: 2}),
    druid: new CharacterStats({str: 1, agi: 0, stamina: 0, int: 2, spirit: 2}),
    warlock: new CharacterStats({str: 0, agi: 0, stamina: 1, int: 2, spirit: 2}),
    shaman: new CharacterStats({str: 1, agi: 0, stamina: 1, int: 1, spirit: 2}),
    paladin: new CharacterStats({str: 2, agi: 0, stamina: 2, int: 0, spirit: 1})
  };

}
