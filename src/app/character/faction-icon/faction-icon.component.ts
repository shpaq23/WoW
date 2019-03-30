import {Component, Input, OnInit} from '@angular/core';
import {Faction} from '../enums/faction.enum';

@Component({
  selector: 'app-faction-icon',
  templateUrl: './faction-icon.component.html',
  styleUrls: ['./faction-icon.component.css']
})
export class FactionIconComponent implements OnInit {

  @Input() faction: Faction;
  url = '/assets/icons/';
  constructor() { }

  ngOnInit() {
  }

}
