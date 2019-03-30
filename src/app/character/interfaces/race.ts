import {Gender} from '../enums/gender.enum';
import {Faction} from '../enums/faction.enum';

export interface Race {
  name: string;
  gender: Gender;
  faction: Faction;
}
