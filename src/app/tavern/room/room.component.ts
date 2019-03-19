import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../characters/character';
import {Human} from '../characters/CharacterRaces/human';
import {Rogue} from '../characters/CharacterClasses/rogue';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() faction: string;
  characters: Character[] = [];

  constructor() { }

  ngOnInit() {
    this.characters.push(new Character({characterRace: new Human(), characterClass: new Rogue(), level: 1, nickName: 'Misiaq' }));

    this.characters.push(new Character({characterRace: new Human(), characterClass: new Rogue(), level: 1, nickName: 'Zuzixa' }));

    this.characters.push(new Character({characterRace: new Human(), characterClass: new Rogue(), level: 1, nickName: 'Dupska' }));
  }

}
