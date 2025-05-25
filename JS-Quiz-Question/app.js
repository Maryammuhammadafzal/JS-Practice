
// var a = ['boo','zi','foo'];
// a.length = 0;
// a.push('bin');
// console.log(a);

// ['bin']  // True

// for (var i = 0; i < 5; i++){
//    for(var j = 0; j< 3; j++ ){
//     console.log(i);
//    }
// }

// 15 times   //True

// for (var i = 1; i <= 3; i++){
//     for(var j = 1; j <= 2; j++ ){
//      console.log(i*j);
//     }
//  }

 // 1 2 2 4 3 6   // True

//  var myName = 'John Appleseder';
//  var copy = myName.slice(5,10);
//  console.log(copy);

 // Apple   //False


 //What is for loop executes?
 //Loops can execute a block of code a number of times.


 // Is JavaScript a Case-Sensitive?
//  True

// What is JavaScript do?
// JavaScript to program the behavior of web pages


// In HTML what script tag we wrote?
// <script src="app.js"></script>


// Where do you write javaScript in HTML
// Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.


// How to single line comment in Js?
//

// how to multi line comment in js?
//  /* */

// how to declare a variable in js?
// var a;

// how to reasssign the value  to a variable?
// a = 45


//tick the checkbox of Legal variable names 
//abc123
//abcGb


//Which method convert a string to lower case?
// var str = 'MarYam';
// var lowercase = str.toLowerCase();
// console.log(lowercase);

// var str = 'test';
// console.log(str.toLowerCase().toUpperCase());

// which method extracts a part of a string and return as a new string
// var str = 'Maryam';
// var extracts = str.slice(0,3);
// console.log(extracts);

// var str = 'Maryam';
// var extracts = str.substring(0,5);
// console.log(extracts);

// var str = 'javascript';
// console.log(str.substring(1,4));

// var str = 'programming';
// str = str.substring(0, 3);
// console.log(str);

//What does 'indexOf('world') return if the string is ('Hello world')?

// var str = 'Hello world';
// var indexnumber = str.indexOf('world');
// console.log(indexnumber);

//What does 'lastIndexOf('o') return if the string is ('Hello world')?

// var str = 'Hello world';
// var indexnumber = str.lastIndexOf('o');
// console.log(indexnumber);


//What does charAt(3) return for the string 'Hello';

// var str = 'Hello';
// var indexnumber = str.charAt(3);
// console.log(indexnumber);// l

// var str = 'javascript';
// console.log(str.charAt(4));

//What does charCodeAt(0) return for the string 'A';

// var str = 'A';
// var Charcode = str.charCodeAt(0);
// console.log(Charcode);// 65

// var str = 'Programming';
// console.log(str.charCodeAt(0));

// What is the result of 'Hello'.replace('H' ,'J')?

// var str = 'Hello';
// var replace = str.replace('H' , 'J');
// console.log(replace);

// var str = 'apple';
// console.log(str.replace(/p/g , 'z'));

// var str = 'Hello Hello';
// console.log(str.replace(/Hello/g , 'Hi'));

// What is the result of 'Hello world'.replace('world' ,'there')?

// var str = 'Hello world';
// var replace = str.replace('world' , 'there');
// console.log(replace);

//What is the result of ath.ceil(4.2)?

// console.log(Math.ceil(4.2));
// console.log(Math.round(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.abs(4.2));

// console.log(Math.floor(Math.random()*100) +1);


//What does parseInt(10.5)return?

// console.log(parseInt('10.5'));

//What does parseFloat(10.5)return?

// console.log(parseFloat('10.5'));

// console.log(parseFloat('123abc'));
// console.log(parseInt('10px'));

//What does Number((10.12345).toFixed(2))return

// console.log(Number((10.12345).toFixed(2)));

//What does (10.12345).toFixed(2) return

// console.log((10.12345).toFixed(1));


//wht method whould you use to the current year?

// var now = new Date();
// console.log(now.getFullYear());

//What method to get the month of a date?

// console.log(now.getMonth());

// console.log(new Date().getDay());

// var now = new Date(2000 , 0 , 1);
// console.log(now);

// console.log(new Date(2020 , 11 , 25));

// var year = new Date('2020 , 4 , 1')
// var setyear = year.setFullYear(2021);
// console.log(year);

// what does the following function return?

// function sum(a , b){
//     return a + b
// }
// console.log(sum(3,4));

//What is the value of x?
// function substract(a,b){
//     return a - b; 
// }
// var x = substract(10, 4);
// console.log(x);
