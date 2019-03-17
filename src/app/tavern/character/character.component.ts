import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../characters/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterComponent implements OnInit {
  @Input() character: Character;
  constructor() { }

  ngOnInit() { }

}
