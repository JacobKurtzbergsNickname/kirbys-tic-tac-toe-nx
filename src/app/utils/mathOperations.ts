export function getRandomInteger(min = 0, max = Number.MAX_SAFE_INTEGER): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive
  }
  
  

  export function isEven(number: EvenNumber | OddNumber): number is EvenNumber {
    return number % 2 === 0;
  }

  export type EvenNumber = number;
  export type OddNumber = number;
  