export class CharacterStats {
  strength: number;
  agility: number;
  stamina: number;
  intellect: number;
  spirit: number;

  constructor(attrs: {str: number, agi: number, stamina: number, int: number, spirit: number}) {
    this.strength = attrs.str;
    this.agility = attrs.agi;
    this.stamina = attrs.stamina;
    this.intellect = attrs.int;
    this.spirit = attrs.spirit;
  }
}
