import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TicTacToeGameComponent } from './tic-tac-toe-game/tic-tac-toe-game.component';


@NgModule({
  declarations: [TicTacToeComponent, TicTacToeGameComponent],
  imports: [
    CommonModule,
    TicTacToeRoutingModule
  ]
})
export class TicTacToeModule { }
