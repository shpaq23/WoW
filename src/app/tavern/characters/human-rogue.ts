import {Character} from './character';

export class HumanRogue extends Character {
  constructor(nick: string) {
    const attrs = {
      nickName: nick,
      raceName: 'human',
      raceUrl: '/assets/races/human.png',
      className: 'rogue',
      classUrl: '/assets/classes/rogue.png',
      faction: 'alliance',
      factionUrl: '/assets/factions/alliance.png',
    };
    super(attrs);
  }
}
