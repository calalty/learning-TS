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
// pascal naming 'Point'
var Point = /** @class */ (function () {
    //    private x: number;
    //    private y: number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        // getter
        get: function () {
            return this.x;
        },
        // fields. instead of setX().
        // setter
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
//     getDistance(another: Point) {
//         // ...
//     }
// }
var point = new Point(1, 2);
var x = point.X;
point.X = 10;
point.draw();
