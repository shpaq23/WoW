import {Race} from './race';
import {CharacterClass} from '../enums/character-class.enum';

export interface Character {
  race: Race;
  class: CharacterClass;
  nickname: string;
}
