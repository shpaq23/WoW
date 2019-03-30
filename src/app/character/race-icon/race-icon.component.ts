import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Race} from '../interfaces/race';

@Component({
  selector: 'app-race-icon',
  templateUrl: './race-icon.component.html',
  styleUrls: ['./race-icon.component.css']
})
export class RaceIconComponent implements OnInit {
  @Output() selectedRace = new EventEmitter();
  @Input() race: Race;
  @Input() selected = false;

  url = '/assets/icons/';


  constructor() { }

  ngOnInit() { }
  selectRace(race: Race): void {
    this.selectedRace.emit(race);
  }
}
