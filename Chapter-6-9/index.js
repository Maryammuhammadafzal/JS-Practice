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


// Question 04
// user number prompt
document.write('<h1>Question 04</h1>');


var userNum = prompt('Enter your lucky number:');

document.write(userNum + ' x  1 = ' + userNum*1  + '<br></br>');
document.write(userNum + ' x  2 = ' + userNum*2  + '<br></br>');
document.write(userNum + ' x  3 = ' + userNum*3  + '<br></br>');
document.write(userNum + ' x  4 = ' + userNum*4  + '<br></br>');
document.write(userNum + ' x  5 = ' + userNum*5  + '<br></br>');
document.write(userNum + ' x  6 = ' + userNum*6  + '<br></br>');
document.write(userNum + ' x  7 = ' + userNum*7  + '<br></br>');
document.write(userNum + ' x  8 = ' + userNum*8  + '<br></br>');
document.write(userNum + ' x  9 = ' + userNum*9  + '<br></br>');
document.write(userNum + ' x  10 = ' + userNum*10 + '<br></br>' );


// Question 05
// user number prompt
document.write('<h1>Question 05</h1>');

var sub1 = prompt('Enter subject?');
var sub2 = prompt('Enter subject?');
var sub3 = prompt('Enter subject?');

var total_marks = 100;

var sub1_Marks = +prompt('How many numbers did you get in ' + sub1);
var sub2_Marks = +prompt('How many numbers did you get in ' + sub2);
var sub3_Marks = +prompt('How many numbers did you get in ' + sub3);

document.write('<b>Subject</b>' + '&nbsp;&nbsp;&nbsp;' +  '<b>Total Marks</b>' + '&nbsp;&nbsp;&nbsp;' +  '<b>Obt Marks</b>' +  '&nbsp;&nbsp;&nbsp;' + '<b>Percentage</b>' +  '<br></br>' );
document.write( sub1  + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  +   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +   total_marks + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  sub1_Marks + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + (sub1_Marks/total_marks)*100 + '%' + '<br></br>');
document.write( sub2  + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  +  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +   total_marks + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  sub2_Marks + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  (sub2_Marks/total_marks)*100 + '%' + '<br></br>');
document.write( sub3  + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  +  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  total_marks + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  sub3_Marks + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  (sub3_Marks/total_marks)*100 + '%' + '<br></br>');
document.write( '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  + (total_marks + total_marks + total_marks) + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + (sub1_Marks + sub2_Marks + sub3_Marks));

