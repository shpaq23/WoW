import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Race} from '../interfaces/race';
import {CharacterClass} from '../enums/character-class.enum';

@Component({
  selector: 'app-class-icon',
  templateUrl: './class-icon.component.html',
  styleUrls: ['./class-icon.component.css']
})
export class ClassIconComponent implements OnInit {
  @Output() selectedClass = new EventEmitter();
  @Input() characterClass: CharacterClass;
  @Input() selected = false;
  url = '/assets/icons/';
  constructor() { }

  ngOnInit() {
  }
  selectClass(race: Race): void {
    this.selectedClass.emit(race);
  }
}
