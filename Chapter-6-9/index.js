// Question 01
document.write('<h1>Question 01</h1>');

document.write('RESULT ' + '<br></br>');

var a = 10;
document.write('The value of a is : ' + a + '<br></br>' + '<br></br>');


var a = ++a;
document.write('The value of ++a is : ' + ++a + '<br></br>');
document.write('Now the value of ++a is : ' + a + '<br></br>' +'<br></br>');


var a = a++;
document.write('The value of a++ is : ' + a++ + '<br></br>');
document.write('Now the value of a is : ' + a + '<br></br>' + '<br></br>');


var a = --a;
document.write('The value of --a is : ' + --a + '<br></br>');
document.write('Now the value of a is : ' + a + '<br></br>' + '<br></br>');


var a = a--;
document.write('The value of a-- is : ' + a-- + '<br></br>');
document.write('Now the value of a is : ' + a + '<br></br>' + '<br></br>');


// Question 02
document.write('<h1>Question 02</h1>');

var a = 2; //1  
var b = 1; //0   //1   //0

var result = --a - --b +  ++b  +  b--;
         //    1 -   0 +    1  +   1
        //        1    +    2
        //             3 
document.write( ' a is = ' + a + '<br></br>');
document.write( ' b is = ' + b + '<br></br>' );

document.write( ' Result of --a - --b + ++b + b--  is = ' + result);

// Question 03 
// user Name Prompt

var username = prompt('Assalam - o - Alaikum \n'  + 'Enter your Name')


