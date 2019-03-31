import {Component, Input, OnInit} from '@angular/core';
import {Race} from '../interfaces/race';
import {CharacterClass} from '../enums/character-class.enum';

@Component({
  selector: 'app-character-model',
  templateUrl: './character-model.component.html',
  styleUrls: ['./character-model.component.css']
})
export class CharacterModelComponent implements OnInit {

  @Input() race: Race;
  @Input() characterClass: CharacterClass;

  url = '/assets/models/';

  constructor() { }

  ngOnInit() {
  }

}
