import {CharacterRace} from './character-race';
import {CharacterClass} from './character-class';

export class Character {

  characterRace: CharacterRace;
  characterClass: CharacterClass;
  nickName: string;
  level: number;
  // health: number;
  // resources: number;

  constructor(attrs: {
    characterRace: CharacterRace;
    characterClass: CharacterClass;
    nickName: string;
    level: number;
  //  health: number;
  //  resources: number;
  }) {
    this.characterRace = attrs.characterRace;
    this.characterClass = attrs.characterClass;
    this.level = attrs.level;
  //  this.health = attrs.health;
  //  this.resources = attrs.resources;
  }
}
