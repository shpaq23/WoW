import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../characters/character';
import {HumanMage} from '../characters/human-mage';
import {HumanRogue} from '../characters/human-rogue';
import {UndeadWarlock} from '../characters/undead-warlock';

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
    this.characters.push(new HumanMage('Misiaq'));
    this.characters.push(new HumanRogue('Deadly Zuzax'));
    this.characters.push(new UndeadWarlock('Reek XD'));

  }

}
