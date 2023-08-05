// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { getRandomInteger, isEven } from '../utils/mathOperations';

// @Component({
//   selector: 'app-square',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: "./square.component.html",
//   styles: [],
// })
// export class SquareComponent {
//     private theRandomInteger: number;

//     constructor() {
//         this.theRandomInteger = getRandomInteger();
//       };

//     showRandomInteger(){
//         return(this.theRandomInteger)
//     };
      
//     provideMessage(){
//         if (isEven(this.theRandomInteger)){
//             return(`${this.theRandomInteger} - It is even`)
//         } else {
//             return(`${this.theRandomInteger} - It is odd`)
//         }
//     }
// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./square.component.html",
  styles: [],
})
export class SquareComponent {
    @Input() value = ""; // Default value provided
}
