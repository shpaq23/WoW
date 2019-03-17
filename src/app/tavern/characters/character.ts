export abstract class Character {
  nickName: string;
  raceName: string;
  raceUrl: string;
  className: string;
  classUrl: string;
  faction: string;
  factionUrl: string;

  constructor(attrs: {
    nickName: string,
    raceName: string,
    raceUrl: string,
    className: string,
    classUrl: string,
    faction: string,
    factionUrl: string
  }) {
    this.nickName = attrs.nickName;
    this.raceName = attrs.raceName;
    this.raceUrl = attrs.raceUrl;
    this.className = attrs.className;
    this.classUrl = attrs.classUrl;
    this.faction = attrs.faction;
    this.factionUrl = attrs.factionUrl;
  }
}
