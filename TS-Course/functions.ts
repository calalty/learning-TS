function add1(n1:number, n2:number) {
    return n1 + n2;
}

function printResult(num:number):void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num:number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add1(5,12));

// function returns number result
let combinedValues: (a: number, b:number) => number;
combinedValues = add1;


console.log(combinedValues(8,8))

addAndHandle(10, 20, (result) => {
    console.log(result);
})