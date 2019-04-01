import {Component, OnInit} from '@angular/core';
import {Race} from '../interfaces/race';
import {Faction} from '../enums/faction.enum';
import {Gender} from '../enums/gender.enum';
import {CharacterClass} from '../enums/character-class.enum';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CharacterService} from '../../api/services/character.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  humanClasses: CharacterClass[] = [CharacterClass.warrior, CharacterClass.mage,
    CharacterClass.warlock, CharacterClass.paladin, CharacterClass.rogue, CharacterClass.priest];

  choosenRace: Race = {name: 'human', faction: Faction.alliance, gender: Gender.male, availableClasses: this.humanClasses};
  choosenGender = Gender.male;
  choosenClass: CharacterClass = CharacterClass.warrior;

  dwarfClasses: CharacterClass[]  = [CharacterClass.warrior, CharacterClass.rogue,
    CharacterClass.priest, CharacterClass.hunter, CharacterClass.paladin];
  nightelfClasses: CharacterClass[] = [CharacterClass.warrior, CharacterClass.rogue,
    CharacterClass.priest, CharacterClass.druid, CharacterClass.hunter];
  gnomeClasses: CharacterClass[] = [CharacterClass.warrior, CharacterClass.rogue,
    CharacterClass.mage, CharacterClass.warlock];

  orcClasses: CharacterClass[] = [CharacterClass.warrior, CharacterClass.rogue,
    CharacterClass.hunter, CharacterClass.warlock, CharacterClass.shaman];
  undeadClasses: CharacterClass[] = [CharacterClass.warrior, CharacterClass.priest,
    CharacterClass.rogue, CharacterClass.mage, CharacterClass.warlock];
  taurenClasses: CharacterClass[] = [CharacterClass.warrior, CharacterClass.druid,
    CharacterClass.hunter, CharacterClass.shaman];
  trollClasses: CharacterClass[] = [CharacterClass.warrior, CharacterClass.priest,
    CharacterClass.rogue, CharacterClass.mage, CharacterClass.hunter, CharacterClass.shaman];

  availableRaces: Race[] = [
    {name: 'orc', faction: Faction.horde, gender: Gender.female, availableClasses: this.orcClasses},
    {name: 'orc', faction: Faction.horde, gender: Gender.male, availableClasses: this.orcClasses},

    {name: 'troll', faction: Faction.horde, gender: Gender.female, availableClasses: this.trollClasses},
    {name: 'troll', faction: Faction.horde, gender: Gender.male, availableClasses: this.trollClasses},

    {name: 'tauren', faction: Faction.horde, gender: Gender.female, availableClasses: this.taurenClasses},
    {name: 'tauren', faction: Faction.horde, gender: Gender.male, availableClasses: this.taurenClasses},

    {name: 'undead', faction: Faction.horde, gender: Gender.female, availableClasses: this.undeadClasses},
    {name: 'undead', faction: Faction.horde, gender: Gender.male, availableClasses: this.undeadClasses},

    {name: 'human', faction: Faction.alliance, gender: Gender.female, availableClasses: this.humanClasses},
    {name: 'human', faction: Faction.alliance, gender: Gender.male, availableClasses: this.humanClasses},

    {name: 'nightelf', faction: Faction.alliance, gender: Gender.female, availableClasses: this.nightelfClasses},
    {name: 'nightelf', faction: Faction.alliance, gender: Gender.male, availableClasses: this.nightelfClasses},

    {name: 'gnome', faction: Faction.alliance, gender: Gender.female, availableClasses: this.gnomeClasses},
    {name: 'gnome', faction: Faction.alliance, gender: Gender.male, availableClasses: this.gnomeClasses},

    {name: 'dwarf', faction: Faction.alliance, gender: Gender.female, availableClasses: this.dwarfClasses},
    {name: 'dwarf', faction: Faction.alliance, gender: Gender.male, availableClasses: this.dwarfClasses},
  ];
  creationForm: FormGroup;
  submitted = false;
  error = '';
  loading = false;

  constructor(private router: Router,
              private characterService: CharacterService) { }

  ngOnInit() {
    this.creationForm = new FormGroup({
      nickname: new FormControl('', {validators: [Validators.required]})
    }, {updateOn: 'submit'});
  }
  get form(): {nickname: string} {
    return {nickname: this.creationForm.get('nickname').value};
  }
  selectRace(race: Race) {
    this.choosenRace = race;
    this.choosenClass = CharacterClass.warrior;
    console.log(this.choosenRace);
  }
  selectGender(gender: Gender) {
    this.choosenGender = gender;
    if (this.choosenGender === 'female') {
      this.choosenRace = {name: this.choosenRace.name, faction: this.choosenRace.faction,
        gender: Gender.female, availableClasses: this.choosenRace.availableClasses};
    } else {
      this.choosenRace = {name: this.choosenRace.name, faction: this.choosenRace.faction,
        gender: Gender.male, availableClasses: this.choosenRace.availableClasses};
    }
  }
  selectClass(characterClass: CharacterClass) {
    this.choosenClass = characterClass;
  }
  onSubmit() {
    this.submitted = true;

    if (this.creationForm.invalid) {
      return;
    }
    this.loading = true;
    this.characterService.create({class: this.choosenClass, nickname: this.form.nickname, race: this.choosenRace})
      .pipe(first())
      .subscribe({
        complete: () => {this.router.navigate(['/character']); },
        error: err => {
          this.error = err;
          this.loading = false; }
        });
  }
}

