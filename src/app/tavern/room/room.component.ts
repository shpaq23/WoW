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
    this.characters.push(new Character({nickName: 'Misiaq', class: 'rogue', race: 'human', level: 1}));
    this.characters.push(new Character({nickName: 'Zuzaxi', class: 'mage', race: 'human', level: 1}));
    this.characters.push(new Character({nickName: 'ReekXD', class: 'warlock', race: 'undead', level: 1}));

  }

}
