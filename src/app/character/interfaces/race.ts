import {Gender} from '../enums/gender.enum';
import {Faction} from '../enums/faction.enum';
import {CharacterClass} from '../enums/character-class.enum';

export interface Race {
  name: string;
  gender: Gender;
  faction: Faction;
  availableClasses: CharacterClass[];
}
