const prompt = require('prompt-sync')();
          /*Convert cq ft to gallons of paint*/
let gallonsOfPaint = 0;
const cubicFeet = +prompt('Enter Cubic Feet '); 
const floor = +prompt('Enter Floor Square Feet ');
const door = +prompt('Enter number of Doors ');
const doorLength = prompt("Enter a whole number for the length of your door.");
const doorWidth = prompt("Enter a whole number for the width of your rectangle.");
const window = +prompt('Enter number of Windows ');
const windowLength = prompt("Enter a whole number for the length of your window.");
const windowWidth = prompt("Enter a whole number for the width of your window.");
const color = prompt('Enter paint color ');
const payment = prompt('New Customer? (Y/N) ')

let totalCost = 0;
const conversionRate = 35;
	      /*35 cq ft to 1 gallon of paint*/
let aDoor = (doorLength * doorWidth) *  door;
let aWindow = (windowLength * windowWidth) * door;
let newArea = aDoor + aWindow + floor;
gallonsOfPaint = parseFloat((cubicFeet - newArea) / conversionRate).toFixed(1)
totalCost = gallonsOfPaint * 30;
switch(color){
    case 'red':
        totalCost += 15;
        break;
    case 'yellow':
        totalCost += 10;
        break;
    case 'blue':
        totalCost += 25;
        break;
    case 'purple':
        totalCost += 5;
        break;
    case 'pink':
        totalCost += 12;
        break;
    case 'black':
        totalCost += 20;
        break;
    default:
        totalCost;
    
}
if(payment.toUpperCase().valueOf() == 'Y'){
    totalCost -= totalCost / 10; 
}

console.log(gallonsOfPaint + ' gallons of paint')
console.log(totalCost + ' $')




  