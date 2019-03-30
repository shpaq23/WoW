import {Component, OnInit} from '@angular/core';
import {Race} from '../interfaces/race';
import {Faction} from '../enums/faction.enum';
import {Gender} from '../enums/gender.enum';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  choosenRace: Race = null;
  choosenGender = Gender.male;

  availableRaces: Race[] = [
    {name: 'orc', faction: Faction.horde, gender: Gender.female},
    {name: 'orc', faction: Faction.horde, gender: Gender.male},

    {name: 'troll', faction: Faction.horde, gender: Gender.female},
    {name: 'troll', faction: Faction.horde, gender: Gender.male},

    {name: 'tauren', faction: Faction.horde, gender: Gender.female},
    {name: 'tauren', faction: Faction.horde, gender: Gender.male},

    {name: 'undead', faction: Faction.horde, gender: Gender.female},
    {name: 'undead', faction: Faction.horde, gender: Gender.male},

    {name: 'human', faction: Faction.alliance, gender: Gender.female},
    {name: 'human', faction: Faction.alliance, gender: Gender.male},

    {name: 'nightelf', faction: Faction.alliance, gender: Gender.female},
    {name: 'nightelf', faction: Faction.alliance, gender: Gender.male},

    {name: 'gnome', faction: Faction.alliance, gender: Gender.female},
    {name: 'gnome', faction: Faction.alliance, gender: Gender.male},

    {name: 'dwarf', faction: Faction.alliance, gender: Gender.female},
    {name: 'dwarf', faction: Faction.alliance, gender: Gender.male},
  ];

  constructor() { }

  ngOnInit() { }
  selectRace(race: Race) {
    this.choosenRace = race;
    console.log(this.choosenRace);
  }
  selectGender(gender: Gender) {
    this.choosenGender = gender;
    this.choosenRace = null;
    console.log(this.choosenRace);
  }
}
