// web programming language,client side programming language,writes head n body body tag.browser intrepret,
// lightweight language,supports every browser that is called cross browser,powerful language,case sensative language,
// ignores spaces

       //    ALERT FUNCTION  alert means display,pop up,message to user.prints text, do calculation

    // window.alert formal type
// alert(3+2);
// alert("hello world"); text string or string
// alert('hello world'); ignores spaces except im text string
// alert('2+1');
// alert("2+1"); 
   
        //  document.write() fn prints text on browser,must end with semi colon and inside quotation

// document.write("hello");
// document.write('2+1');
// document.write(2+1);

        // VARIABLE
        
// var myname='shumaima';
// var myname = ('shumaima');
// var num = '2';
// var num = 2+1;
// var num = "2+1";
// alert(num);
  
        // VARIABLES FOR STRING AND NUMB

 
// var myname = 'shumaima';
// myname = "khan";
// alert(myname);

// var firstname = "shumaima";
// var lastname = "khan";
// alert(firstname + lastname);

// var age = "22";
// var height = "5'7";
// alert("Shumaima" + age + height);

// var numb = "2+1";
// var numb = 2+1;
// alert(numb);

// var my$ = "230"
// alert(my$);

    //   MATH EXPRESSION (operators)

// var popularNum = '2+2';
// var popularNum = 2+2;
// var popularNum = 2-2;   
// var popularNum = 2*4 ;
// var popularNum = 9/3;
// var popularNum = 10 % 3; modulus operator gives remainder
// alert(popularNum)

    //  Unfamiliar operators

// var num = 1;
// var newNum = num++ ; 
// var newNum = ++num ; incremented
// var newNum = num-- ;
// var newNum = --num ; decremented
// console.log(newNum);    \

        // ELIMINATIING AMBIGUITY

// var totalCost = 1+3*4;
// var totalCost = 1+(3*4);
// var totalCost = (2*2) + (3*4);
// var totalCost = 2*2 + 3*4;
// console.log(totalCost);

    // Concatenating text strings
    
// var message = 'thanks';
// alert(message); 

// var userName = "Shumaima";
// alert("Thanks, " + userName + " !");
   
    //   Concatenation to var \

// var message = 'Thanks';
// var userName = "Shumaima";
// var banger = "!";
// var customMess = message + userName + banger;
// alert(customMess);

    //    PROMPTS   like the alert code with two differences. you need a way to capture user response means declaring a variable.
    // second string 

// var spec = prompt("your species?", "human");
// var ques = "your species?";
// var defAns = "human";
// var spec = prompt(ques, defAns);

// var noOfCats = prompt("how many cats?");
// var tooManyCats = noOfCats + 1;
// console.log(tooManyCats);

        //  if Statements 

// var x = prompt("where do you live?");
// if (x === "pakistan") {
//     alert('correct');
// }

    //    comparisons operator === equality operator, case sensitive  !== it is not equals to 
    // < > >= <= operators

        // if else and else if statements

// var x = prompt("where do you live?");
// if (x === "pakistan") {
// alert('correct');
// }
// else {
//     score= 2;
//     userIQ ="problematic";
//     alert('wrong');
// }

    //   FUNCTION

// function tellTime("current time : "+ theHr + ":" + theMin ) {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     alert("current time:"+ theHr + ":" + theMin );
// }
// var whatever = "hello";
// tellTime()

    //  TASK 1
    
    // function leapYear(year) {
    //     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    //   }
    //   var typeYear = prompt('enter year'); 
    //     console.log(leapYear(typeYear));

// function greetUser(greetings) {
// alert(greetings);    
// }
// var whatever = "hello";
// greetUser(whatever);


// var a = [2,3,4,5,6,7];
// document.write(a[0]);

// var things = new
// Array('chair','table','door','window','wall');
// for (i=0; i<things.length; i++) {
//     document.write(things[i] + '<br/>');
// }

// var things = new
// Array('chair','table','door','window','wall');
// var total = things.join("=====");
// document.write(total);
// things.sort();
// things.reverse();
// for (i=0; i<things.length; i++) {
        // document.write(things.indexOf('door'));
        // things.push('testing')
        // for (i=0; i<things.length; i++) { 
    //    document.write(things[i] + " ");
        // }
// things.splice(0,1);
// things.pop();
// things.unshift('room');
// things.shift()
// for (i=0; i<things.length; i++) {
// document.write(things[i] + ' ');
// }

// var city0 = "pakistan";
// var city1 = "india";
// var cities=  [ 'pakistan' , 'india' , 'iran']
// alert('welcome' + " " + cities[2]);

// var pets = [];
// pets[0] = 'dogs';
// pets[1] = 'cats';
// pets[2] = 'bird';
// pets[3] = 'hee';
// pets.splice(2,1,'elephant', ' duck' ,'emu');
// document.write(pets);

// let userAge = +prompt("Enter your age");

// if (userAge >= 18) {
//     alert("You are eligible for NIC");
//  }else{
//         alert("You are not eligible for NIC");
//     }
  
    // multiple if
//  let user = ("wania");
//  let userRole = prompt("type your role")

//  if (user == "moosa") {
//     // alert("welcome sir");
//     if(userRole == 'teacher'){
//         alert('welcome sir')
//     }
//     else{
//         alert('welcome beta')
//     }
//  }
//  else{
//         // alert("welcome students");
//         alert('welcome beta');
//      }
 // single if
// let user = prompt("moosa");

// if (user == "moosa") {
//    alert("welcome sir");
// }
//  else{
//         alert("welcome students");
//      }
  
// let user =prompt("type your name");
//  let userRole = prompt("type your role")

// if (user == "moosa" || user == "moosa" && userRole == "teacher"){
//     alert("hello")
// } else{
//    alert('welcome beta'