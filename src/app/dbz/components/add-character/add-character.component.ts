import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { id: undefined,
    name: "",
    power:0
  };

  emitCharacter():void {
    if( this.character.name.length === 0 || this.character.power < 0 ) return;

    this.onNewCharacter.emit( this.character );

    console.table( this.character );
    this.character= { id: undefined, name: "", power: 0};
  }


 }
