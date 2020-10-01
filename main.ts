// let n: number; 
// let b: boolean;
// let s: string;
// let a: any;
// let e: number[] = [1,2,3]
// let f: any[] = [1, "hey", 2, 3] 

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color { Red = 0, Green = 1, Blue = 2};
// let backgroundColor = Color.Red;

// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let altway = (message as string).endsWith('c');

// let log = function(message) {
//     console.log(message)
// };

// let doLog = (message) => console.log(message);

//     // getter
//     get X() {
//         return this.x;
//     }

//     // fields. instead of setX().
//     // setter
//     set X(value) {
//         if (value < 0)
//         throw new Error('value cannot be less than 0.')

//         this.x = value;
//     }
// }

//     getDistance(another: Point) {
//         // ...
//     }

import { Point } from './point';

let point = new Point(1, 2);
// let x = point.X;
// point.X = 10;
point.draw();
