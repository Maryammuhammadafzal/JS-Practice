
// Question 12
//longest number

// function maximumLength(){

// var str = 'Web development course';
// var split = str.split(' ');
// var length = 5;
// for(var i = 0; i < split.length; i++){
//     for(var j = 0; j < split[i].length; j++){
//        if(length < j){
//           alert(split[i]);
//           break;
//         }
// }
// }

// }
// maximumLength();

//Question 13
//Count letters

// function countletter(){


// }
// countletter


// Queston 1
//Power calculate

// function power(){
//     var a = +prompt('enter a number');
//     var b = +prompt('enter a number');

//     var powernumber = a**b;
//     alert('Power of a raised to b is ' + powernumber);
// }
// power();

//Queston 2
//Leap year

// var year = prompt('Enter your year');

// switch (year){
//     case '2012' :
//         alert('This is a leap year');
//         break;

//         case '2016' :
//         alert('This is a leap year');
//         break

//         case '2020' :
//         alert('This is a leap year');
//         break

//         default :
//         alert('This is not a leap year');
        
// }

//Question 3
// area of triangle

// var a = +prompt('Enter 1st side of a triangle');
// var b = +prompt('Enter 2nd side of a triangle');
// var c = +prompt('Enter 3rd side of a triangle');

// function calculatedistance(){
//    var s = (a + b + c) / 2;
//    return s;
// }  
// var founds = calculatedistance();

// function area(S){
//     var calculatearea = (S*(S-a)*(S-b)*(S-c));
//     return calculatearea;
//  }
 
//  var result = area(founds);
//  alert(result);

//Question 4
//Average percentage

function mainFunction(){
    var subject1 = +prompt('Enter numbers of english');
    var subject2 = +prompt('Enter numbers of math');
    var subject3 = +prompt('Enter numbers of urdu');
    var totalNum = subject1 + subject2 + subject3; 

      function averageFunction(){
        var averagenumber = (subject1 + subject2 + subject3) / 3;

           function percentageFunction(){
            var percentage =  (totalNum / 300) * 100;
            return percentage
           }
      }
}
alert(percentage)