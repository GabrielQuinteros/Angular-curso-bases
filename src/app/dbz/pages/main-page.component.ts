import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  /// --> LUGAR DONDE SE INICIAN LOS SERVICIOS  --> INYECCION DE DEPENDENCIAS
  /// ¿COMO ? --> SE DECLARAN ATRIBUTOS SERVICIO EN EL CONSTRUCTOR
  constructor( private dbzService: DbzService ){};

  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( newCharacter: Character ) {
    this.dbzService.addCharacter( newCharacter );
  }

}
