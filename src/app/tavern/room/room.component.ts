import {Component, OnInit} from '@angular/core';
import {Character} from '../characters/character';
import {CharacterService} from '../../api/services/character.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }




  ngOnInit() {

    this.characterService.getAll().pipe(first()).subscribe(character => {
      console.log(character);
    });


    this.characters.push(new Character({nickName: 'Misiaq', class: 'rogue', race: 'human', level: 1}));
    this.characters.push(new Character({nickName: 'Zuzaxi', class: 'mage', race: 'human', level: 1}));
    this.characters.push(new Character({nickName: 'ReekXD', class: 'warlock', race: 'undead', level: 1}));
    this.characters.push(new Character({nickName: 'Zamzam', class: 'warrior', race: 'undead', level: 1}));

  }

}
