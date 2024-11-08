import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: string[] = ["Ironman", "Hulk", "Thor", "Spiderman", "Doctor Strange"]
  public lastHeroRemoved?: string;

  public removeLastHero(): void {
    this.lastHeroRemoved = this.heroesName.pop();
  }
}
