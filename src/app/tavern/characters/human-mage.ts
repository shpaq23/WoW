import {Character} from './character';

export class HumanMage extends Character {
  constructor(nick: string) {
    const attrs = {
      nickName: nick,
      raceName: 'human',
      raceUrl: '/assets/races/human.png',
      className: 'mage',
      classUrl: '/assets/classes/mage.png',
      faction: 'alliance',
      factionUrl: '/assets/factions/alliance.png',
    };
    super(attrs);
  }
}
