// Cargo Delivery Route and Distance Analysis

let coordinateArray = ["3,4", "6,8", "5,12"];
let newDistance = [];

function distanceCalculator(x, y) {
    let xSquare = Math.pow(x, 2);
    let ySquare = Math.pow(y, 2);
    let sumOfSquares = xSquare + ySquare;
    let squareRoot = Math.sqrt(sumOfSquares);
    
    // console.log(xSquare, ySquare)
    // console.log(sumOfSquares)
    // console.log(squareRoot)
    
    return squareRoot;
}

console.log(coordinateArray);
console.log(newDistance);

coordinateArray.forEach((element) => {
    let splitElement = element.split(",");
    console.log(splitElement);
    
    let x = splitElement[0];
    let y = splitElement[1];
    
    let calculatedResult = distanceCalculator(x, y);
    newDistance.push(calculatedResult);
});

console.log(newDistance);

let min = Math.min(...newDistance);
let max = Math.max(...newDistance);

let closestDistance = `The closest delivery point is ${min} km.`;
let furthestDistance = `The furthest delivery point is ${max} km.`;

console.log(closestDistance);
console.log(furthestDistance);