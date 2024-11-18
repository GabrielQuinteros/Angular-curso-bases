import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[]= [
    { id: uuid(), name: "Krillin", power: 500 },
    { id: uuid(), name: "Vegeta", power: 8000 },
    { id: uuid(), name: "Goku", power: 10000 },
    { id: uuid(), name: "Gohan", power: 11000 },
    { id: uuid(), name: "Bills", power: 900000 },
    { id: uuid(), name: "Trunks", power: 7000 },
    { id: uuid(), name: "Goten", power: 7050 }
  ];

  public addCharacter( character:Character ): void {
      const exists: boolean = this.characters.
                            some( storedCharacter => storedCharacter.name.trim() === character.name.trim() );

      if( ! exists ) {
        character.id = uuid();
        this.characters.push( character );
      }

  }

  public deleteCharacterById( id: string ): void {
//    this.characters.splice( id as number, 1 ); // Remove by index

    const index: number = this.characters.findIndex( storedCharacter => storedCharacter.id === id  );
    if( index !== -1 )
      this.characters.splice( index , 1 );
  }


}
