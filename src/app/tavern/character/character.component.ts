import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character = {
    name: 'Misiaq',
    race: 'human',
    raceUrl: '/assets/races/human.png',
    class: 'rogue',
    classUrl: '/assets/classes/rogue.png',
    faction: 'alliance',
    factionUtl: '/assets/factions/alliance.png'
  };
  //test commit
  constructor() { }

  ngOnInit() {
  }

}
