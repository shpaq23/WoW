import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Gender} from '../enums/gender.enum';

@Component({
  selector: 'app-gender-icon',
  templateUrl: './gender-icon.component.html',
  styleUrls: ['./gender-icon.component.css']
})
export class GenderIconComponent implements OnInit {
  @Output() selectedGender = new EventEmitter();
  @Input() gender: Gender;
  @Input() selected = false;
  url = '/assets/icons/';

  constructor() { }

  ngOnInit() {
  }
  selectGender(gender: Gender): void {
    this.selectedGender.emit(gender);
  }
}
