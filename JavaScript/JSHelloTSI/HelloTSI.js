/*console.log('Hello.TSI');
var x = 2 + 3
console.log(x)
const cars = ['Aston Martin','Mercedes','Ferrari'];
 
const element = cars.map( (x, y) => (y+1+'.'+x) ).join(' ');
console.log(element)
let  num = [3,4,8,6]
let arr = num.map((n,i) => (i + ') ' + (n * n)))
console.log(arr)
for (i=0; i<= cars.length; i++){
    console.log(cars[i])
}*/






/*N.1*/
const prompt = require('prompt-sync')();
let a = +prompt("Enter first number ");
let b = +prompt("Enter second number ");            /*return the sum 2 values insert into the input field*/      
let result = (a + b)
console.log(`Result is ${result}`)                  /*template literals*/

/*N.2*/
if(result < 10){
    console.log("Less than 10")
} 
else if(result == 10){
    console.log("Equal to 10")                       /*if-else loop which returns a text message*/
}
else{
    console.log("Greater than 10")
}

/*N.3*/
const day = prompt("Enter a number between 1 and 7 ");
    switch(day){
        case '1':
            console.log("It's Monday");
        break;
        case '2':
            console.log("It's Tuesday");
        break;

        case '3':
            console.log("It's Wednesday");         /* switch loop which returns a day of the week as a 
                                                      string according to the number insert into the input field*/
        break;

        case '4':
            console.log("It's Thursday");
        break;

        case '5':
            console.log("It's Friday");
        break;

        case '6':
            console.log("It's Saturday");
        break;

        case '7':
            console.log("It's Sunday");
        break;

        default:
            console.log("Not a valid day");
        break;
    }


