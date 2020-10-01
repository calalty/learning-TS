// pascal naming 'Point'
export class Point {
    //    private x: number;
    //    private y: number;
    constructor(private x?: number, private y?: number) {
             // this.x = x;
             // this.y = y;
            }
    
        draw() {
            console.log('X: ' + this.x + ', Y: ' + this.y);
            
        }
    }