import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListComponent {

  @Input()
  public charactersList: Character[]=[]; // EL VALOR DE LA ASIGNACION ES EL VALOR POR DEFECTO. UNA LSITA VACIA.

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterByID( id: string ) {
    this.onDeleteCharacter.emit(id);
  }

 }
