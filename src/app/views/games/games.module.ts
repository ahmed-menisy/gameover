import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games/games.component';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [GamesComponent],
  imports: [CommonModule, GamesRoutingModule, PipesModule, FormsModule],
})
export class GamesModule {}
