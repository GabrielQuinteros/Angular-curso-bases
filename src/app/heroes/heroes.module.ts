import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";


/// IMPORTS -> Son lo modulos que el Modulo de Angular debe Importar para funcionar.
// En este caso el ng-if y el ng-for son funcionalidades de CommonModule y necesitan importarse para que "ESTE" modulo funcione.
// EXPORTS -> Son los componentes que se permite que se importen en otras partes. --> Es hacer publico el compoennte al resto del sistema del front.

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {

}
