/* Chapter 1 */

// Question Number 1
// alert("Hello my boy..!");


// // Question Number 2
// alert("Error! Please enter valid password.");


// // Question Number 3
// alert("Welcome to JS land...\nHappy Coding!");


// // Question Number 4
// alert("Welcome to JS land...");
// alert("Happy Coding")


// // Question Number 5
// alert("Hello... I can rum JS through my web browser's console");

/* Chapter 2 */

// Question Number 1
// let userName;


// // Question Number 2
// let myName = "Shahzaib Siddiqui";


// // Question Number 3
// let message = "Hello World";
// alert(message);


// Question Number 4
// let myName = "Shahzaib Siddiqui";
// let myAge = 21;
// let mycolification = "MS certified desktop and mobile app developer"
// alert(myName);
// alert(myAge);
// alert(mycolification);


// Question Number 5
// let a = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(a);


// Question Number 6
// let email = "shahzaibsiddiqui101@gmail.com";
// alert("My emial address is" + " " + email);


// Question Number 7
// let book = "A smarter way to learn JavaScript";
// alert("I am trying to learn a book " + book);


// Question Number 8
// document.getElementById("demo").innerHTML = "Yah! I can write HTML content throught JavaScript";


// Question Number 9
// let str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(str);


/* Chapter 3 */

// Question Number 1
// let age = 21;
// alert(age);


// Question Number 2

// Question Number 3
// let birthYear = 1999;
// document.write("My birth year is " + birthYear + "<br>" +"Data type of my declared variable is number")
// document.getElementById("demo").innerHTML = "My birth year is " + birthYear + "<br>" +"Data type of my declared variable is number"

// Question Number 4
// let visitorName = "Shahzaib Siddqui";
// let productTitle = "T-shirt";
// let quantity = 5;
// document.write(visitorName , " ordered " , quantity + " " + productTitle ,"(s) " , "XYZ Clothing store" ,"<br/>");


/* Chapter 5 */

// Question Number 1
// let a = 4;
// let b = 2;
// let sum = a + b;
// document.write("Sum of " , a , " and " , b , " is " , sum)


// Question Number 2
// let a = 4;
// let b = 2;
// let sub = a - b;
// let multi = a * b;
// let divi = a / b;
// let modu = a % b;
// document.write("Subtraction of " , a , " and " , b , " is " , sub , "<br/>");
// document.write("Mutliplication of " , a , " and " , b , " is " , multi , "<br/>");
// document.write("Division of " , a , " and " , b , " is " , divi , "<br/>");
// document.write("Modulus of " , a , " and " , b , " is " , modu);


// Question Number 3
// let num;
// document.write("Value after variable declaration is ", num , "<br/>");
// num = 5;
// document.write("Initial value ", num , "<br/>");
// num++;
// document.write("Value after increment is ", num , "<br/>");
// num += 7;
// document.write("Value after addition is ", num , "<br/>");
// num--;
// document.write("Value after decrement is ", num , "<br/>");
// num = num % 3;
// document.write("The remainder is ", num , "<br/>");


// Question Number 4
// let costOfOneticket = 700;
// let costOfFiveticket = costOfOneticket * 5;
// document.write("Cost of one movie ticket is ", costOfOneticket, "PKR", "<br/>")
// document.write("Total cost to buy 5 movie tickets is ", costOfFiveticket, "PKR");


// Question Number 5
// let num = parseInt(prompt("Enter any number for table"))
// document.write("Table of ",num ," is <br/>")
// for (let i = 1; i <= 10; i++) {
//     document.write(num, " * ", i, " = ", i * num, "<br/>");
// }

// Question Number 6
// let cTem = Number(prompt("Enter Temperature in Celsius"));
// let fTem = Number(prompt("Enter Temperature in Fahrenheit"));
// let cConversion = (fTem - 32) * 5 / 9;
// let fConversion = (cTem * 9 / 5) + 32;
// document.write(cTem, "C is ", fConversion, "F<br/>");
// document.write(fTem, "F is ", cConversion, "C");


// Question Number 7
// let price_item_1 = 650;
// let price_item_2 = 100;
// let order_quantity_item_1 = 3;
// let order_quantity_item_2 = 7;
// let deliveryCharges = 100;
// let total_cost = (price_item_1 * order_quantity_item_1) + (price_item_2 * order_quantity_item_2) + deliveryCharges;
// document.write("Price of item 1 is ", price_item_1, "<br/>")
// document.write("Price of item 2 is ", price_item_2, "<br/>")
// document.write("Ordered quantity of item 1 is ", order_quantity_item_1, "<br/>")
// document.write("Ordered quantity of item 2 is ", order_quantity_item_2, "<br/>")
// document.write("Shipping charges is ", deliveryCharges, "<br/>")
// document.write("Total cost is ", total_cost, "<br/>")


// Question Number 8
// let total_marks = 1100;
// let obtain_marks = parseFloat(prompt("Enter marks obtained by Student"));
// document.getElementById("demo").innerHTML = "Mark Sheet";
// document.write("Total marks : ", total_marks, "<br/>")
// document.write("Obtained marks : ", obtain_marks, "<br/>")
// document.write("Percentag : ", (obtain_marks / total_marks) * 100, "%")


// Question Number 9
// let dollar = 104.80, saudiRiyal = 28, inDollar = 10, inSaudiRiyal = 25, total;
// total = (dollar * inDollar) + (saudiRiyal * inSaudiRiyal);
// document.write("Total currency in PKR: " , total);


// Question Number 9
// let a = 3;
// let b = a + 5 * 10 / 2;
// console.log("The answer is", b); 


// Question Number 10
// let current_year = 2021;
// let birth_year = 1999;
// let age = current_year - birth_year;
// document.write("Current Year : ", current_year, "<br/>")
// document.write("Birth Year : ", birth_year, "<br/>")
// document.write("Your age : ", age, "<br/>")


// Question Number 10
// let radOfCircle = parseFloat(prompt("Enter the radius of the circle"));
// let circumferenceOfCircle = 2 * 3.142 * radOfCircle;
// let areaOfCircle = 3.142 * (radOfCircle * radOfCircle);
// document.write("Radius of cirle: ", radOfCircle , "<br/>");
// document.write("Circumfrence of cirle: ", circumferenceOfCircle , "<br/>");
// document.write("Area of circle: ", areaOfCircle , "<br/>");


/* Chapter 6 to 9 */

// Question Number 1
// function lineBreak(){
//     document.write("<br/>");
//     document.write("<br/>");
// }

// let a = 10;
// document.write("The value of a is ", a , "<br/>");
// document.write("..........................................." , "<br/>");
// lineBreak();

// document.write("The value of ++a is ", ++a , "<br/>");
// document.write("The value of a is ", a , "<br/>");
// lineBreak();

// document.write("The value of a++ is ", a++ , "<br/>");
// document.write("The value of a is ", a , "<br/>");
// lineBreak();

// document.write("The value of --a is ", --a , "<br/>");
// document.write("The value of a is ", a , "<br/>");
// lineBreak();

// document.write("The value of a-- is ", a-- , "<br/>");
// document.write("The value of a is ", a , "<br/>");
// lineBreak();


// Question Number 2
// function lineBreak(){
//     document.write("<br/>");
//     document.write("<br/>");
// }

// let a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("The value of a :", a ,"<br/>");
// document.write("The value of b :", b ,"<br/>");
// document.write("Result :", result ,"<br/>");
// lineBreak();

// result = --a;
// document.write("The value of a :", a ,"<br/>");
// document.write("The value of b :", b ,"<br/>");
// document.write("Result :", result ,"<br/>");
// lineBreak();

// result = --a - --b;
// document.write("The value of a :", a ,"<br/>");
// document.write("The value of b :", b ,"<br/>");
// document.write("Result:", result ,"<br/>");
// lineBreak();

// result = --a - --b + ++b;
// document.write("The value of a :", a ,"<br/>");
// document.write("The value of b :", b ,"<br/>");
// document.write("Result :", result ,"<br/>");
// lineBreak();

// result = --a - --b + ++b + b--;
// document.write("The value of a :", a ,"<br/>");
// document.write("The value of b :", b ,"<br/>");
// document.write("Result :", result ,"<br/>");
// lineBreak();


// Question Number 3
// let userName = prompt("Enter your name");
// alert("Hello " + userName + " Jani");


// Question Number 4
// let num = parseInt(prompt("Enter any number", "5"));
// console.log("The Table of", num, "is");
// for (let i = 1; i <= 10; i++) {
//     console.log("=>", num, "*", i, "=", (i * num));
// }


// Question Number 5
// let sub_1 = prompt("Enter first subject");
// let marks_Of_Sub_1 = parseInt(prompt("Enter marks of " + sub_1));

// let sub_2 = prompt("Enter second subject");
// let marks_Of_Sub_2 = parseInt(prompt("Enter marks of " + sub_2));

// let sub_3 = prompt("Enter third subject");
// let marks_Of_Sub_3 = parseInt(prompt("Enter marks of " + sub_3));

// let total_Mark = 100;

// let per_Of_Sub_1 = (marks_Of_Sub_1 / total_Mark) * 100;
// let per_Of_Sub_2 = (marks_Of_Sub_2 / total_Mark) * 100;
// let per_Of_Sub_3 = (marks_Of_Sub_3 / total_Mark) * 100;

// let total_Mark_Of_All_Sub = total_Mark * 3;
// let total_Obtained_Mark_Of_All_Sub = marks_Of_Sub_1 + marks_Of_Sub_2 + marks_Of_Sub_3;
// let total_Percentage = (total_Obtained_Mark_Of_All_Sub / total_Mark_Of_All_Sub) * 100;

// document.getElementById("sub_1").innerText = sub_1;
// document.getElementById("sub_2").innerText = sub_2;
// document.getElementById("sub_3").innerText = sub_3;

// document.getElementById("marks_Of_Sub_1").innerText = marks_Of_Sub_1;
// document.getElementById("marks_Of_Sub_2").innerText = marks_Of_Sub_2;
// document.getElementById("marks_Of_Sub_3").innerText = marks_Of_Sub_3;


// document.getElementById("per_Of_Sub_1").innerText = per_Of_Sub_1 + "%";
// document.getElementById("per_Of_Sub_2").innerText = per_Of_Sub_2 + "%";
// document.getElementById("per_Of_Sub_3").innerText = per_Of_Sub_3 + "%";

// document.getElementById("total_Mark_Of_All_Sub").innerText = total_Mark_Of_All_Sub;
// document.getElementById("total_Obtained_Mark_Of_All_Sub").innerText = total_Obtained_Mark_Of_All_Sub;
// document.getElementById("total_Percentage").innerText = total_Percentage + "%";


/* Chapter 9 to 11 */

// Question Number 1
// let city = prompt("Enter city");
// if (city === "Karachi" || city === "karachi" || city === "KARACHI") {
//     alert("Welcome to the city of light");
// }
// else {
//     alert("Welcome to " + city);
// }


// Question Number 2
// let gender = prompt("Enter gender");
// if (gender === "MALE" || gender === "Male" || gender === "male") {
//     alert("Good Morning Sir");
// }
// else if (gender === "FEMALE" || gender === "Female" || gender === "female") {
//     alert("Good Morning Ma’am.");
// }
// else {
//     alert("Good Morning");
// }


// Question Number 3
// let light = prompt("Enter color of road traffic signal");
// if (light === "Red" || light === "red") {
//     alert("Must Stop");
// }
// else if (light === "Yellow" || light === "yellow") {
//     alert("Ready to move");
// }
// else if (light === "Green" || light === "green") {
//     alert("Move now");
// }
// else {
//     alert("Invalid color");
// }


// Question Number 4
// let fuel = parseFloat(prompt("Enter fuel remain in your car"));
// if (fuel <= 0.25){
//     alert("Please refill the fuel in your car");
// }
// else {
//     alert("Your are good to go");
// }


// Question Number 5
// let english = +prompt("Enter the marks of English");
// let maths = +prompt("Enter the marks of Maths");
// let physic = +prompt("Enter the marks of Physic");
// let totalMarks = 300;
// let marksObtain = (english + maths + physic);
// let percentage = (marksObtain / totalMarks) * 100;

// if (percentage >= 80) {
//     document.write("Total Marks : " + totalMarks + "<br/>")
//     document.write("Marks Obtained : " + marksObtain + "<br/>")
//     document.write("Percentage : " + percentage + "%<br/>")
//     document.write("Grade : A-one" + "<br/>")
//     document.write("Remarks : Excellent" + "<br/>")
// }

// else if (percentage >= 70) {
//     document.write("Total Marks : " + totalMarks + "<br/>")
//     document.write("Marks Obtained : " + marksObtain + "<br/>")
//     document.write("Percentage : " + percentage + "%<br/>")
//     document.write("Grade : A" + "<br/>")
//     document.write("Remarks : Good" + "<br/>")
// }

// else if (percentage >= 60) {
//     document.write("Total Marks : " + totalMarks + "<br/>")
//     document.write("Marks Obtained : " + marksObtain + "<br/>")
//     document.write("Percentage : " + percentage + "%<br/>")
//     document.write("Grade : B" + "<br/>")
//     document.write("Remarks : You need to improve" + "<br/>")
// }
// else {
//     document.write("Total Marks : " + totalMarks + "<br/>")
//     document.write("Marks Obtained : " + marksObtain + "<br/>")
//     document.write("Percentage : " + percentage + "%<br/>")
//     document.write("Grade : Fail" + "<br/>")
//     document.write("Remarks : Sorry" + "<br/>")
// }


// Question Number 7
// let anyNum = 3;
// let guess = +prompt("Enter your number between 1 to 10");
// if (guess === anyNum){
//     alert("Bingo! Correct answer");
// }
// else if (++guess === anyNum){
//     alert("Close enough to the correct answer");
// }
// else {
//     alert("You guess the wrong number");
// }


// Question Number 8
// let num = +prompt("Enter any number");
// let answer = num % 3;
// if (answer === 0){
//     alert ("Enter number can be divided by 3");
// }
// else{
//     alert ("Enter number can not be divided by 3");
// }


// Question Number 9
// let num = +prompt("Enter number");
// let answer = num % 2;
// if (answer === 0){
//     alert ("Enter number is even");
// }
// else{
//     alert ("Enter number is odd");
// }


// Question Number 10
// let temp = +prompt("Enter temperature");
// if (temp > 40) {
//     alert("It is too hot outside.");
// }
// else if (temp > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (temp > 20) {
//     alert("Today’s Weather is cool.");
// }
// else if (temp > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }


// Question Number 11
// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// let operation = prompt("Enter operation");

// if (operation === "+") {
//     console.log("Result of addition is", num1 + num2);
// }
// else if (operation === "-") {
//     console.log("Result of subtraction is", num1 - num2);
// }
// else if (operation === "*") {
//     console.log("Result of multiplication is", num1 * num2);
// }
// else if (operation === "/") {
//     console.log("Result of division is", num1 / num2);
// }
// else if (operation === "%") {
//     console.log("Result of modulus is", num1 % num2);
// }
// else {
//     console.log("Invalid operation");
// }

/* Chapter 12 to 13 */

// Question Number 1


// Question Number 2
// let a = parseFloat(prompt("Enter first number"));
// let b = parseFloat(prompt("Enter second number"));
// if (a === b) {
//     console.log("",a, "is equal to", b);
// }
// else if (a > b) {
//     console.log("",a, "is greater then", b);
// }
// else if (b > a) {
//     console.log("",b, "is greater then", a);
// }


// Question Number 3
// let a = parseFloat(prompt("Enter number"));
// if (a === 0) {
//     console.log("Entered number is Zero");
// }
// else if (a > 0) {
//     console.log("Entered number is Positive");
// }
// else if (a < 0) {
//     console.log("Entered number is Negative");
// }


// Question Number 4
// let char = prompt("Enter any character");
// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
//     console.log(true);
// }
// else {
//     console.log(false);
// }


// Question Number 5
// let password = prompt("Enter Your Password");
// if (password === "") {
//     alert("Please enter your password");
// }
// else if (password === "Shahzaib_007") {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// }


// Question Number 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else {
//     greeting = "Good evening";
//     alert(greeting);
// }


// // Question Number 7
// let time = +prompt("ENter time");
// if (time >= 0000 && time <= 1200){
//     alert("Good Morning");
// }
// else if (time >= 1200 && time <= 1700){
//     alert("Good Afternoon");
// }
// else if (time >= 1700 && time <= 2100){
//     alert("Good Evening");
// }
// else if (time >= 2100 && time <= 2359){
//     alert("Good Night");
// }

/* Chapter 14 to 16 */

// Question Number 1
// let students1 = [];
// let students2 = new Array();

// let str = ["Ali", "Bilal", "Hassan", "Wasamad"];
// let num = [1, 24, 56, 7, 35, 34];
// let bool = [true, false, false, true];
// let mixArray = [1, "ali", false, 23.3];

// console.log(students1);
// console.log(students2);
// console.log(str);
// console.log(num);
// console.log(bool);
// console.log(mixArray);


// let qualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// for (i = 0; i < qualifications.length; i++) {
//     document.write((i+1)+ ") " +qualifications[i]+"<br>")
// }


// Question Number 8
// let students = ["ALi", "Bilal", "Hassan"];
// let marks = [320, 342, 357];

// for (let i = 0; i < 3; i++) {
//     document.write("Score of " + students[i] + " is " + marks[i] + ". Percentage:" + ((marks[i] / 500) * 100).toFixed(2) + "% <br>")
// }


// Question Number 9
// let colors = ["Black","Pink","Red","Green"];
// document.write(colors, "<br>");

// colors.unshift(prompt("Enter any Color in beginging of array"));
// document.write(colors, "<br>");

// colors.push(prompt("Enter any Color in the end of an array"));
// document.write(colors, "<br>");

// colors.unshift("Light Green", "Royal Blue");
// document.write(colors, "<br>");

// colors.shift();
// document.write(colors, "<br>");

// colors.splice(parseInt(prompt("Enter index number at which you want to add color")),0,prompt("Enter your desire color"));
// document.write(colors, "<br>");

// colors.splice(+prompt("Enter index number at which you want to delete color"),parseInt(prompt("Enter how many colors you want to detete")));
// document.write(colors, "<br>");


// Question Number 10
// let marks = [320, 230, 480, 120];
// marks = marks.sort(function(a,b){return a-b});
// console.log(marks);

// or or or

// let marks = [320, 230, 480, 120,154,444,142,751,141,11];
// let copyMarks = marks.slice(0);
// let newMarks = [];


// for (let i = 0; i < marks.length;i++) {

//     var smallNumber = copyMarks[0];

//     for (let j = 0; j < copyMarks.length; j++) {
//         if (smallNumber > copyMarks[j] ) {
//             smallNumber = copyMarks[j];
//         }
//     }
//     let indexOfSmallNumber = copyMarks.indexOf(smallNumber);

//     copyMarks.splice(indexOfSmallNumber, 1);
//     newMarks.push(smallNumber);
// }


// console.log(marks);
// console.log(newMarks);


// Question Number 12

// let array = ["This", "is", "my", "cat"];
// let str = array.join(" ");
// console.log(str);


// Question Number 15















/*Chapter 17-20*/

// Question Number 1

// let matrix = [[], [], []];
// let number;

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         number = +prompt("Enter numbers");
//         matrix[i][j] = number;
//     }
// }


// for (i = 0; i < matrix.length; i++) {
//     for (j = 0; j < matrix[i].length; j++) {
//         document.write(matrix[i][j] + " ");
//     }
//     document.write("<br>")
// }


// console.log(matrix);

// Question Number 7

// let sweets = ["cake", "apple pie", "cookie", "chips", "patties"]

// let selectSweet = prompt("Enter name");

// let answer = sweets.indexOf(selectSweet);
// if (answer === -1) {
//     document.write("We are sorry " + selectSweet + " is not avalible in our bakery")
// }

// else {
//     document.write(selectSweet + " avalible at index " + answer + " in our bakery");
// }

// Question Number 8

// let array = [24, 53, 78, 91, 12];

// let largestNumber = array[0];


// for (i = 0; i< array.length ; i++) {
//     if (largestNumber < array[i]) {
//         largestNumber = array[i];
//     }
// }

// document.write("The largest number is " + largestNumber);



/* Chapter 21 to 25 */

// Question NUmber 1

// let firstName = prompt("Enter you First name");
// let lastName = prompt("Enter you Last name");
// document.write("Hello " + firstName + " " + lastName);

