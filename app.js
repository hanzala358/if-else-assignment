// Rs.12870/= Oil amount 12*3=48 litre ....per liter Rs.357.69/=

//              Doubt questions:
//  1. Agar user se prompt m true ya false len or 
// oski data type boolean m laane k lye kya karen QK prompt always shows 
// type in string or in number..

// 17 , 14 , 12  , 9 ,  , 6 

//                   INEREMENT   &&   DECREAMENT :
//          ++  ||    --

// TYPES OF INCREAMENT :

// 1. num++ (Post-increament)
// 1. num-- (Post-decreament)
// 2. ++num (Pre-increament)
// 2. --num (Pre-decreament)

//                         EXCERCISE  STRTED:

// var num = 10;
// num = ++num + num++ + ++num + --num + num++ + num-- - --num + num--
// // 11 + 11 + 13 + 12 +   12 +  12 -10   +11  ===>  

// console.log(num , 11 + 11 + 13 + 12 +   12 +  12 -10 +11);

//                          EXCERCISE   ENDED:



// Question No 1:
// 1. Write a program to check whether the given input number is 
// divisible by 3 or else show a message “Number is not divisible 
// by 3..”

// SOLUTION:

// var input = +prompt('Enter any number!!');

// if(input %3 === 0){
//     console.log('It is divisible by 3');
// }else{
//     console.log('It is not divisible by 3');  
// }

// Question No 2:

// 2. Write a program that checks whether the given input is an even 
// number or an odd number.

// SOLUTION:

// var input = +prompt("Enter Any number !");

// if(input %2 === 0){
//     console.log("It is an even number..")
// }else{
// console.log("It is an odd number..")
// }

// Question No 3:
// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough", 
// otherwise output "Too young"..

// SOLUTION:

var age = +prompt("Enter your perfect age !");

if(age > 18 && age <=115){
    console.log("Old enough.");
}else if(age < 18){
    console.log("Too young.");
}else{
    console.log("Invalid Age !");
}

// Question No 4:
// 4. Write a program that prompts the user for their name, and then 
// displays a special greeting to that person if their name is the 
// same as yours. If the name entered by the user is anything 
// other than your name, your code should not produce any 
// output..

// SOLUTION:

// var inputName = prompt("Please! Enter your name.")
// if(inputName==="Arsalan"){
//     console.log("Hey! your name is same as me.");
// }else{
//     console.log();
// }


// Question No 5:
// 5. Write a program to check whether the given input number is 
// divisible by 3 or not by using Switch Case statements. Show a 
// message “Number is not divisible by 3” or “Number is divisible 
// by 3”..

// SOLUTION:

// var input = +prompt("Enter any numer");
// if(input%3===0){
//     console.log("It is divisible by 3");
// }else{
//     console.log("It is not divisible by 3");
// }



// Question No 6:
// 6. Write a program that takes a character(number or string) in a 
// variable & checks whether the given input is a number, 
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)

// SOLUTION:

// var inputNum2 = prompt("Enter your first name.");
// var inputNum3 = prompt("Enter your last name.");
// var inputNum1 = +prompt("Enter your age.");
// var inputNum4 = +prompt("Enter your experience about website fact in (True or False):");

// console.log(typeof(inputNum1));
// console.log(typeof(inputNum2));
// console.log(typeof(inputNum3));
// console.log(typeof(inputNum4));


// Question No 7:
// 7. Write a program to create a calculator for +, -, *, /, % using 
// switch case statements. (number1, number2 and operator will 
// be input)

// SOLUTION:

// var num1 = 20;
// var num2 = 5;
// console.log(num1 + num2 + "         My answer is = 25");
// console.log(num1 - num2 + "         My answer is =  15");
// console.log(num1 * num2 + "         My answer is =  100");
// console.log(num1 / num2 + "          My answer is =   4");
// console.log(num1 % num2 + "         My answer is =   0");


// Question No 8:

// 8. Write a program that takes time as input from user in 24 hours 
// clock format like: 1900 = 7pm. Implement the following case 
// using if, else & else if statements

// SOLUTION:

// var time = +prompt("Enter actual time");
// if(time > 0 && time <= 11.59){
//     console.log("Good Morning")
// }
// else if(time >=12.0  && time <= 14.0){
//     console.log("Good Afternoon")
// }
// else if(time > 14.0 && time <= 19.0){
//     console.log("Good Evening")
// }
// else if(time > 19.0 && time <= 23.59){
//     console.log("Good Night")
// }


// Question No 9:
// 9. Write a program that takes a calendar year in YYYY format in 
// a variable. Check & notify the user whether it is a leap year or 
// not.

// SOLUTION:

// var January = +prompt("Enter total days of january.");
// var February = +prompt("Enter total days of february.");
// var March = +prompt("Enter total days of march.");
// var April = +prompt("Enter total days of april.");
// var May = +prompt("Enter total days of may.");
// var June = +prompt("Enter total days of june.");
// var July = +prompt("Enter total days of july.");
// var August = +prompt("Enter total days of august.");
// var September = +prompt("Enter total days of september.");
// var October = +prompt("Enter total days of october.");
// var November = +prompt("Enter total days of november.");
// var December = +prompt("Enter total days of december.");

// var totalYaerDays = (January+February+March+April+May+June+July+August
//                     +September+October+November+December);

// console.log("January = " + January);
// console.log("February = " + February);
// console.log("March = " + March);
// console.log("April = " + April);
// console.log("May = " + May);
// console.log("June = " + June);
// console.log("July = " + July);
// console.log("August = " + August);
// console.log("September = " + September);
// console.log("October = " + October);
// console.log("November = " + November);
// console.log("December = " + December);


// console.log("Total Days = " + totalYaerDays);


// if(totalYaerDays===365){
//     console.log('This is not the leap year.Kindly wait it will be on  2020, 2024 , 2028 and so on..');
// }
// else if(totalYaerDays===366){
//     console.log("HEY! This is the leap year which brings after every 4 years.");
// }
// else if(totalYaerDays<365 || totalYaerDays > 366){
//     console.log("Please! Enter carefully !....");
// }


// Question No 10:

// 10. Write a program that 
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give 
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered 
// matches the original password”. Show “Incorrect 
// password” otherwise.

// SOLUTION:

// var password1 = +prompt("Please ! Enter your Password.")
// var password2 = +prompt("Enter your Password")
// if (password1 == password2) {
    //     console.log("Correct! The password you entered matches the original password");
    // }else{
        //     console.log("“Incorrect password");
// }


// Question No 11:
//11. Write a program that adds an else statement to the following 
// script to display “You are not Fahad”
// var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }
// SOLUTION:

// var firstName = "Ali";
// if (firstName === "Fahad") {
    //  document.write("Hello Fahad!");
// }else{
//     document.write(' <h1>' +"You are not Fahad!" + '</h1>');
// }




// Question No 12:
// 12. This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
    //  greeting = "Good day";
    //  else
    //  greeting = "Good evening";
    //  }
    
    // SOLUTION:
    
//      var greeting;
//     var hour = 13;
//     if (hour < 18) {
//        console.log("Good day.."); ;
//     }else{
//         console.log(  "Good evening..");     
//     }
            
// Question No 13:
// 13. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.        
                
 // SOLUTION:
 
 //  var int1 = +prompt("Enter any two-digit number")
 //  var int2 = +prompt("Enter any two-digit number")
 //  if(int1 ===int2){  
     //      document.write( '<h1>'+ int1 +'</h1>' ) ;
     //      document.write( '<h1>'+ int1 +'</h1>' ) ;
     //  }           
     
     
     // Question No 14:            (Incomplete)
    //  14. Write a program that takes input a number from user & state 
    //  whether the number is positive, negative or zero.   
                     
      // SOLUTION:
      
      //    var input = +prompt("Enter any number !");
    //    if(input===0){
    //     console.log("Zero");
    //    }
    //    else if(input===++){
    //     console.log("Positive");
    //    }
    //    else if(input===--){
    //     console.log("Negative");
    //    }
      
    
    // Question No 15:
   // 15. Ask the user what the current hour is. If the hour is between 
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is 
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If 
// the hour is between 5 and 8 p.m., tell the user, "It's dinner 
// time." For any other hours, tell the user, "Sorry, you'll have to 
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock 
// format i.e. 14 for 2pm , 15 for 3pm)
                    
// 13 = 1pm  ,  17 = 5pm , 20 = 8pm   
     // SOLUTION:
  
//   var time = +prompt("Please! Let me tell the current time..");
//   if(time>=6 && time <= 9){
//     console.log("Breakfast is served.");
// }else if(time>= 11 && time <= 13){
//     console.log("Time for lunch.");
// }
// else if(time>= 17 && time <= 20){
//     console.log("It's dinner time.");
// }
// else{
//     console.log("Sorry, you'll have to wait, or go get a snack.");
// }
  
  


     // Question No 16:
    //  16. Write a program that stores value in a variable & tell whether 
    //  the type of that variable is a "number", "string", "boolean" or 
    //  “undefined”..
     
     // SOLUTION:

     // var age =  18;   
// var statement = true   
// var name = "Muhammad Arsalan";
// console.log(name)
// console.log(age)
// console.log(statement)
// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(statement))




// Question No 17:              (Incomplete)
// 17. Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise.

// SOLUTION:

// var num1 = prompt("Enter any one baby letter from a to z");
// if(num1===a,e,i,o,u){
//     console.log("true");
// }else{
//     console.log("false");
// }



// Question No 18:   
// 18. Choose the correct comparison operator to display "true", 
// when:
// 10 is NOT equal to 8.

// SOLUTION:

// var num1 = 10 !== 8;
// console.log(num1 + "  True  ");



// Question No 19:   
// 19. Use a switch statement to rewrite the following JavaScript 
// code. Prompt the user for the number of a month rather than 
// setting it to 8..

// SOLUTION:

// var num = +prompt("Enter a current month number without")

// if(num===1){
//     console.log("January");
// }else if(num===2){
//     console.log("February");
// }
// else if(num===3){
//     console.log("March");
// }
// else if(num===4){
//     console.log("April");
// }
// else if(num===5){
//     console.log("May");
// }
// else if(num===6){
//     console.log("June");
// }
// else if(num===7){
//     console.log("July");
// }
// else if(num===8){
//     console.log("August");
// }
// else if(num===9){
//     console.log("September");
// }
// else if(num===10){
//     console.log("October");
// }
// else if(num===11){
//     console.log("November");
// }
// else if(num===12){
//     console.log("December");
// }
// else{
//     console.log("Invalid Number !");
//     console.log("Please!Enter a correct month number..");
// }

   
// Question No 20:   
// 20. Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough"

// SOLUTION:

// var age = +prompt("Please! Enter your age");
// var vote = "Voteable";
// if(age< 18){
//     console.log( vote +" Too young" );
    
// }else if(age>18 && age < 50){
//     console.log( vote +" Young" );
// }else if(age>18 && age < 110){
//     console.log( vote +" Old enough" );
// }else{
//     console.log("Invalid Age! Please write carefully!.")
// }