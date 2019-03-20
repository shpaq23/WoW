import {CharacterRace} from './character-race';
import {CharacterClass} from './character-class';

export class Character {

  characterRace: CharacterRace;
  characterClass: CharacterClass;
  nickName: string;
  level: number;
  // health: number;
  // resources: number;

  constructor(attrs: { nickName: string, race: string, class: string, level: number }) {
    this.nickName = attrs.nickName;
    this.characterRace = new CharacterRace({name: attrs.race});
    this.characterClass = new CharacterClass({name: attrs.class});
    this.level = attrs.level;
  }
}
