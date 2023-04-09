var zakat_Percentage = 0.025;

var userInput = prompt("Enter your total wealth for Zakat calculation: ");

// userInput = parseInt(userInput);
console.log(typeof Number(userInput));

var result = zakat_Percentage * userInput;

alert("Your Zakat value is " + result); 

