import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent implements OnInit {
    squares: Array<string> = [];
    xIsNext = true;
    winner = "";

    constructor() {
        console.groupCollapsed("BoardComponent");
        console.log(BoardComponent);
        console.groupEnd();
    };

    ngOnInit(): void {
        this.newGame()
    }

    newGame(){
        console.groupCollapsed("newGame");
        console.log(this.newGame);
        console.groupEnd();

        this.squares = Array(9).fill("");
        this.winner = "";
    };

    get player():string{
        console.groupCollapsed("player");
        console.log(this.player);
        console.groupEnd();
        return this.xIsNext ? '"O"' : '"X"'
    };

    makeMove(idx: number){
        console.groupCollapsed("makeMove");
        console.log(this.makeMove);
        console.groupEnd();

        if(!this.squares[idx]){
            this.squares.splice(idx, 1, this.player);
            this.xIsNext = !this.xIsNext;
        }
        const winner = this.calculateWinner();
        if (winner !== null){
            this.winner =  winner
        }
    };

    calculateWinner():string {

        console.groupCollapsed("calculateWinner");
        console.log(this.calculateWinner);
        console.groupEnd();

        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (
            this.squares[a] &&
            this.squares[a] === this.squares[b] &&
            this.squares[a] === this.squares[c]
          ) {
            return this.squares[a];
          }
        }
        return "";
      }

}
