
// Here are Some JavaScript Variable Question from Chatgpt solving answer by own self

//Question-01
// 1. What are variables in JavaScript, and why are they important?

//A variable is a word that refers a particular value.It is very important because they stored the value and get back the value when want.

//Question-02
//2. How do you declare a variable in JavaScript?

var myname;//Declare a variable

//Question-03
// 3. How do you assign a value to a variable in JavaScript?

 myname = 'Maryam'; //Assigning the value to variable

 //Question-04
// 4. Describe the rules for naming variables in JavaScript.
 
//Rules for naming the variable

//var user name;                                  //No Space
//var alert;                                      // No Reserved Keyword will use
//var myname; var my_name; var $myname; my1stname // Valid Character will used
//var myName; var myFirstName;                    //Case Sensitivity
//var userName; var email;                        //Meaningfull name

//Question-05
// 5. What is a data type in JavaScript? Give examples of different data types.

//Primitive Data Types

//Bolean
//String
//Number
//undefined
//null

//Question-06
// 6. How do you convert one data type to another in JavaScript?

var StringToNumber = +'55';

//Question-07
// 7. Describe the different types of operators in JavaScript (arithmetic, assignment, comparison, logical, etc.).

// Arithmetic operator

// +
// -
// *
// /
// %
// ** 

// Assignment Operator

// =
// +=
// -=

// Comparision Operator

// ==
// ===
// !=
// !==
// <
// >
// <=
// >=

//Logical Operator

//&&
// ||
// !

//Question-08
// 8. How do you use arithmetic operators in JavaScript?

var num = 9 + 7 ;
var num = 9 - 7 ;
var num = 9 * 7 ;
var num = 9 / 7 ;
var num = 9 ** 7 ; 
var num = 9 % 7 ;

//Question-9
// 9. What is the difference between == and === operators in JavaScript?

var operator = 7 == '7'  // == CHECK only the value not datatype.  // true  because 7 is equual '7' in == operator
var operator = 7 === '7'  // == CHECK the value and datatype also.  // false  because 7 is intiger and '7' is a string 