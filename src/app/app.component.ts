import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SquareComponent } from './square/square.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BoardComponent } from './board/board.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SquareComponent, BoardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kirbys-tic-tac-toe-nx';
}
