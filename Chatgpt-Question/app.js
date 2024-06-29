// Today i can ask help chatgpt to help me for practicing javaScript question 
// Here are some question that i solve by self

//************Question 01 *****************
//1. Write a function that takes two numbers as arguments and returns their sum.

// var userNum1 = +prompt('Enter a number that sum you want?');
// var userNum2 = +prompt('Enter an another number that sum you want?');

// var sum = userNum1 + userNum2;
// alert(sum);


//************Question 02 *****************
//2. Create a function that takes an array of numbers and returns the sum of all the numbers in the array.

// var userNumber = [];

// userNumber[0] = +prompt('Enter 1st number i give you sum of 5 number');
// userNumber[1] = +prompt('Enter 2nd number i give you sum of 5 number');
// userNumber[2] = +prompt('Enter 3rd number i give you sum of 5 number');
// userNumber[3] = +prompt('Enter 4th number i give you sum of 5 number');
// userNumber[4] = +prompt('Enter 5th number i give you sum of 5 number');

// var sumArr = userNumber[0] + userNumber[1] + userNumber[2] + userNumber[3] + userNumber[4];
// alert(sumArr);

//************Question 03 *****************
//3. Write a function that takes a string as input and returns the reversed string.

// var string = prompt('Enter any name or string i can give you reverse of this name or string');

// var convertArr = string.split('')
// var reversedArr = convertArr.reverse()
// alert(reversedArr);


//************Question 04 *****************
//4. Create a function that takes an array of strings and returns a new array with all the strings capitalized.

// var nameArr = prompt('Enter your name in simple form i capatilized your name');

// var capatilized = nameArr.toLocaleUpperCase();
// alert(capatilized);


//************Question 05 *****************
//5. Write a function that takes a number as input and returns true if the number is even and false if it's odd.

// var EvenOrOddNumber = +prompt('Enter a number i can give you "true" when the number is "even" or "false" when the number is "odd" ?');

// if( EvenOrOddNumber % 2 === 0 ){
//     alert ('True');
// }
// else {
//     alert('False');
// }

//************Question 06 *****************
//6. Create a function that takes an array of numbers and returns the largest number in the array.

// var largestNumber = [];

// largestNumber[0] = +prompt(' Enter 3 number one by one i check that number is largest or not ');
// largestNumber[1] = +prompt(' Enter 3 number one by one i check that number is largest or not ');
// largestNumber[2] = +prompt(' Enter 3 number one by one i check that number is largest or not ');

// console.log(largestNumber);
// var mylargestNumber = largestNumber[0];

// for(var i = 0; i < largestNumber.length; i++){
//     if(largestNumber[i] > mylargestNumber){
//         mylargestNumber = largestNumber[i]
//     }
// }
// console.log(' The ' + mylargestNumber + ' is largest number from other');


//************Question 07 *****************
//7. Write a function that takes a string as input and returns the number of vowels in the string.

// var countVowels = prompt('write any word i give you the number of vowels','maryam');

// countVowels.split('');
// var count = countVowels[0];
// console.log(count)

// for(var i = 0; i < countVowels.length; i++ ){
//     if (countVowels[i].toLowerCase == 'a' ||
//         countVowels[i].toLowerCase == 'e' ||
//         countVowels[i].toLowerCase == 'i' || 
//         countVowels[i].toLowerCase == 'o' || 
//         countVowels[i].toLowerCase == 'u'  ){
//         count++  
//     }
//     console.log(count);
// console.log(i);
// }
// console.log(countVowels('Hello World'));

//************Question 08 *****************
// 8. Create a function that takes an array of numbers and returns a new array with only the even numbers from the original array.

// for( var i = 0 ; i <=10 ; i++){
//     if(i % 2 === 0){
//        console.log(i);
//     }
// }


//************Question 09 *****************
// 9. Write a function that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

var userString = prompt('Write a word which i check that is palindrome or not?');

var convertStringToArr = userString.split('');
var reversedArr = convertStringToArr.reverse();
var originalArr = reversedArr.join();

for(var i = 0 ; i < userString.length ; i++){
    if (convertStringToArr == originalArr){
        alert(userString + ' is a palidrome word');
        
    }
    else if( userString != originalArr){
        alert (userString + ' is not a palindrome word');
    }
}
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************
//************Question 01 *****************