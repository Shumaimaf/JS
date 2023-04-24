// ...TASK 1..

// var zakat_Percentage = 0.025;

// var userInput = prompt("Enter your total wealth for Zakat calculation: ");

// // userInput = parseInt(userInput);
// console.log(typeof Number(userInput));

// var result = zakat_Percentage * userInput;

// alert("Your Zakat value is " + result); 

// ..TASK 2..

// var familyMembers = prompt("Enter the total number of family members:");

// var fitrahMethod = prompt("Choose a fitrah method:1. wheat  2. dates  3. raisins  4. barley");
// var wheat = 250;
// var dates = 2100;
// var raisins = 2800;
// var barley = 450;


//     if(fitrahMethod == '1' ){
//         alert("Your Fitrah value is "  + familyMembers * wheat);
//     }  
//     if(fitrahMethod == '2'){
//         alert("Your Fitrah value is "  + familyMembers * dates);
//     }
//     if(fitrahMethod == '3'){
//         alert("Your Fitrah value is "  + familyMembers * raisins);
//     }
//     if(fitrahMethod == '4'){
//         alert("Your Fitrah value is "  + familyMembers * barley);
//     }
//  else {
//   alert("Invalid input!");
// }

// ..TASK 3..

// var secretNumber = 5;
// var guess = prompt("Enter the secret number between 1 and 10");

// if (guess=="5") {
//     alert("Congratulation! You guessed the secret number.")

// } else if (guess < "5") {
//     alert("your guess is too low. Try again!")

// } else if (guess > "5") {
//        alert("Your guess is too high. Try again!")
// }

// ..TASK 4..

// var userName = prompt("Enter Your Name");

// var Name = userName.charAt(0).toUpperCase() + userName.slice(1);
// document.write(Name);

// ..TASK 5..

// var contactNumbers=[];
// var contactNames=[];


// for(i = 0; i < 3; i++) {
//    var userName=prompt("Enter your Name");
//    var userNumber= prompt("Enter your Number");
//    contactNames.push(userName);
//    contactNumbers.push(userNumber);
// }  

// for (i = 0; i < contactNumbers.length; i++) {
//     console.log(`Contact Number: ${contactNumbers[i]} | Contact Name: ${contactNames[i]}`);
//   }

// .. TASK 6..

// var products = ["green", "blue", "orange", "pink", "yellow"];

// var userInput = prompt("Enter the position of the item you want to remove: ");

// var removedItem = products.splice(userInput - 1, 1);

// console.log("Removed item: " + removedItem);
// console.log("Remaining items: " + products);
// console.log("Total items remaining: " + products.length);

// ..TASK 7..

// var nationality = prompt(' Please Enter Your Nationality');
// var gender = prompt('Please Enter Your Gender');
// var age = parseInt(prompt('Please Enter Your Age'));
// if (nationality == "Pakistani" || nationality == "Indian") {
//     if (gender == "Male" && age >= 18) {
//         alert("You are eligible to vote.");
//     } else if (gender == "Female" && age >= 18) {
//         var married = prompt("Are you married? (yes or no)");
//         if (married == "yes") {
//             alert("You are eligible to vote");
//         } else {
//             alert("You are not eligible to vote");
//         }
//     } else {
//         alert("You are not eligible to vote");
//     }
// }
// else {
//     alert('You are not eligible to vote due to Nationality issue')
// }

// ..TASK 8..

// var WorldCupSquad = ["Sarfaraz Ahmed", "Fakhar Zaman", "Imam-ul-Haq", "Babar Azam", "Haris Sohail", "Shoaib Malik", "Asif Ali", "Shadab Khan", "Imad Wasim", "Hasan Ali", "Wahab Riaz", "Mohammad Amir", "Shaheen Afridi", "Mohammad Hasnain", "Abid Ali"];

// console.log(WorldCupSquad);

// var WorldCupSquad2 = WorldCupSquad.slice(0, 11)
// console.log(WorldCupSquad2);