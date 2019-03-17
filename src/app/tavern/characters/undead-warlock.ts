import {Character} from './character';

export class UndeadWarlock extends Character {
  constructor(nick: string) {
    const attrs = {
      nickName: nick,
      raceName: 'undead',
      raceUrl: '/assets/races/undead.png',
      className: 'rogue',
      classUrl: '/assets/classes/warlock.png',
      faction: 'horde',
      factionUrl: '/assets/factions/horde.png',
    };
    super(attrs);
  }
}
