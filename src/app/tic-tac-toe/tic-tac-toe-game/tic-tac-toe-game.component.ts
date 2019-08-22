import { Component, Input } from '@angular/core';

const winningPositions = [
  [0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7],
  [2, 5, 8], [3, 4, 5], [6, 7, 8], [6, 4, 2]
];

@Component({
  selector: 'app-tic-tac-toe-game',
  templateUrl: './tic-tac-toe-game.component.html',
  styleUrls: ['./tic-tac-toe-game.component.scss']
})
export class TicTacToeGameComponent {

  @Input() height: number;
  @Input() width: number;

  moves = [].fill(null, 0, 8);
  currentMove: posible_moves = 'o';
  winner: posible_game_outcomes = null;

  constructor() { }

  /**
   * Determines if there is a final outcome of a game.
   * Returns 'o', 'x', 'tie' or null.
   */
  findWinner(): posible_game_outcomes | null {
    const oPositions = this.findPositions('o');
    const xPositions = this.findPositions('x');

    for (const positionList of winningPositions) {
      if (this.containsAllValues(positionList, oPositions)) {
        return 'o';
      } else if (this.containsAllValues(positionList, xPositions)) {
        return 'x';
      }
    }
    if (oPositions.length + xPositions.length === 9) {
      return 'tie';
    }
    return null;
  }

  /**
   * Based on the overall board size, get 1/3 of the x or y axis.
   */
  getGridFraction(axis: 'x' | 'y'): number {
    let result: number;
    if (axis === 'x') {
      result = this.width / 3;
    } else {
      result = this.height / 3;
    }
    return result;
  }

  /**
   * Based on the overall board size, get the x or y offset for the passed-in board position (0-8).
   */
  getGridFractionForPosition(position: number, axis: 'x' | 'y'): number {
    if (axis === 'x') {
      return this.getGridFraction('x') * (position % 3);
    } else {
      return this.getGridFraction('y') * Math.floor(position / 3);
    }
  }

  resetBoard(): void {
    this.moves = [];
    this.currentMove = 'o';
    this.winner = null;
  }

  squareClicked(index: number) {
    if (!!this.moves[index] || !this.isUserTurn()) {
      return; // ignore clicks if game is over or existing square is clicked or computer's turn
    } else {
      this.registerMove(index);
      if (!this.winner) {
        // use small delay to simluate computer "thinking"
        setTimeout(() => { this.simulateComputerMove(); }, 500);
      }
    }
  }

  private containsAllValues(searchValues: number[], testString: number[]): boolean {
    for (const value of searchValues) {
      if (testString.indexOf(value) === -1) {
        return false;
      }
    }
    return true;
  }

  private findEmptySpots(): number[] {
    const emptySpots = [];
    for (let i = 0; i < 9; i++) {
      if (!this.moves[i]) {
        emptySpots.push(i);
      }
    }
    return emptySpots;
  }

  private findPositions(move: 'o' | 'x'): number[] {
    const positions = [];
    for (let i = 0; i < 9; i++) {
      if (this.moves[i] === move) {
        positions.push(i);
      }
    }
    return positions;
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private isUserTurn(): boolean {
    return this.currentMove === 'o' && !this.winner;
  }

  private registerMove(index: number) {
    this.moves[index] = this.currentMove;
    this.winner = this.findWinner();
    if (this.winner) {
      return;
    }

    this.currentMove = (this.currentMove === 'o') ? 'x' : 'o';
  }

  private simulateComputerMove(): void {
    const emptySpots = this.findEmptySpots();
    const randomIndex = this.getRandomInt(emptySpots.length);
    this.registerMove(emptySpots[randomIndex]);
  }
}

type posible_moves = 'x' | 'o';
type posible_game_outcomes = 'x' | 'o' | 'tie';
