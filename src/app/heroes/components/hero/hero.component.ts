import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  static DEFAULT_NAME: string = "No Name";
  static DEFAULT_AGE: number = 0;

  public name: string = HeroComponent.DEFAULT_NAME;
  public age: number = HeroComponent.DEFAULT_AGE;

  public changeName(newName: string): void {
    this.name = newName;
  }

  public changeAge(newAge: number): void {
    this.age = newAge;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // SI LO PONGO COMO PRIVATE --> El metodo solo se reconoce dentro deste archivo .ts
  // No es reconocido nisiquiera por el html de hero, que está en el mismo modulo.
  // private getHeroDescription(): string {
  //   return `${this.name} - ${this.age}`;
  // }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public hasDefaultName(): boolean {
    return this.name === HeroComponent.DEFAULT_NAME;
  }

  public hasDefaultAge(): boolean {
    return this.age === HeroComponent.DEFAULT_AGE;
  }

  public resertHero(): void {
    this.name = HeroComponent.DEFAULT_NAME;
    this.age = HeroComponent.DEFAULT_AGE;
  }

}
