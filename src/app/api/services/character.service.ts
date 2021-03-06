import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from '../../character/interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }


  getAll() {
    // TODO: `get<character> good interface implements good structure returning date`
    return this.http.get<Character>(this.url + '/characters');
  }
  create(character: Character) {
    return this.http.post(this.url + '/characters', {
      race: character.race.name,
      class: character.class,
      nick_name: character.nickname
    });
  }
}
