//Initial Variables

//variable set to empty string for calculation command
var operator = "";

//variables set to 0 to pass new numbers 
var num1 = 0;
var num2 = 0;




//Assign variables 


//ignore 0 and 1
var operator = process.argv[2];
//set numbers using parseInt function to return a number instead of a string

var num1 = parseInt(process.argv[3]);

var num2 = parseInt(process.argv[4]);


//If Statements to do the calculation


//Addition

if(operator == "add"){
	console.log(num1 + num2);
}

//Subtraction

if(operator == "subtract")
	console.log(num1 - num2);

//Division

if(operator == "divide")
	console.log(num1 / num2);

//multiplication

if(operator == "multiply")
	console.log(num1 * num2);

//remainder

if(operator == "remainder")
	console.log( num1 % num2);

//exponent

if(operator == "exponent");
	console.log(Math.pow(num1,num2));

