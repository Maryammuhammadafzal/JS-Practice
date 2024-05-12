
// Chapter # 05
// Math Expression

// Question 01
document.write('<h1>Question 01</h1>')

var num = 3 + 5;
document.write('The sum of 3 and 5 is ' + num + '<br></br>');

//Question 02
document.write('<h1>Question 02</h1>')

var num1 = 3 - 5;
document.write(' substract 3 from 5 is ' + num1 + '<br></br>');

var num2 = 3 * 5;
document.write(' Multiply 3 to 5 is ' + num2 + '<br></br>');

var num3 = 3 / 5;
document.write(' Divide 3 to 5 is ' + num3 + '<br></br>');

// Question 03
document.write('<h1>Question 03</h1>')

var number;
initialization = 5;
increament = ++initialization;
add = increament + 7;
decreament = --add;
remainder = decreament / 3;

document.write('Value after variable declearation is ' + number + '<br></br>');

document.write('Initial Value = ' + initialization + '<br></br>');

document.write('Value after increament = ' + increament + '<br></br>');

document.write('Value after addition = ' + add + '<br></br>');

document.write('Value after decreament = ' + decreament + '<br></br>');

document.write('The remainder = ' + remainder + '<br></br>');

//Question 04
document.write('<h1>Question 04</h1>')

var ticket_price = 600;
var ticket_quantity = 5;

var total_price = ticket_price * ticket_quantity;
document.write('Total cost to buy 5 tickets of movie is ' + total_price);

// Question 05
document.write('<h1>Question 05</h1>');

var tableHaeding = '<h1 style="border:1px solid grey; border-radius:30px; background-color:pink; display:inline-block; width:350px; color:darkgray; text-align:center; ">Table of 2</h1>';

var $1 = '2 x 1 = ' + (2 * 1) + '<br></br>';
var $2 = '2 x 2 = ' + (2 * 2) + '<br></br>';
var $3 = '2 x 3 = ' + (2 * 3) + '<br></br>';
var $4 = '2 x 4 = ' + (2 * 4) + '<br></br>';
var $5 = '2 x 5 = ' + (2 * 5) + '<br></br>';
var $6 = '2 x 6 = ' + (2 * 6) + '<br></br>';
var $7 = '2 x 7 = ' + (2 * 7) + '<br></br>';
var $8 = '2 x 8 = ' + (2 * 8) + '<br></br>';
var $9 = '2 x 9 = ' + (2 * 9) + '<br></br>';
var $10 = '2 x 10 = ' + (2 * 10) + '<br></br>';

document.write(tableHaeding + '<br></br>');
document.write($1 + $2 + $3 + $4, $5, $6, $7, $8, $9, $10);

// Question 05
document.write('<h1>Question 05</h1>');

var tempHaeding = '<h1 style="border:1px solid grey; border-radius:30px; background-color:pink; display:inline-block; width:350px; color:darkgray; text-align:center; ">Temperature Convertor</h1>';
document.write(tempHaeding + '<br></br>' );

var Temp_oC = 25 *  100 ;
var Temp_oF = ( 70 + 27 ) /100;

var NNoF =  (Temp_oC - 32 ) * 5 / 9; 
document.write(NNoF + "<br></br>");


var NNoF =  (Temp_oF * 9 /5) + 32; 
document.write(NNoF);



// Question 05
document.write('<h1>Question 06</h1>');

document.write('<h1>Shopping Cart</h1>');

var item1 = 500;
var item1_quantity = 5;
var item2 = 800;
var item2_quantity = 3;
var ship_charges = 100;

document.write('Price of item 1 is ' + item1 + '<br></br>' +
    'Quantity of item 1 is ' + item1_quantity + '<br></br>' +
    'Price of item 2 is ' + item2 + '<br></br>' +
    'Quantity of item 1 is ' + item2_quantity + '<br></br>' +
    'Shipping Charges' + ship_charges + '<br></br>');


var total_cost = (item1 * item1_quantity + item2 * item2_quantity + ship_charges);
document.write('Total cost of your order is ' + total_cost);

// Question 06
document.write('<h1>Question 06</h1>');

document.write('<h1>Mark Sheet</h1>');

var total_marks = 900;
var obt_marks = 759
var percentage = obt_marks / total_marks * 100;

document.write('Total marks = ' + total_marks + '<br></br>');
document.write('Obtained marks = ' + obt_marks + '<br></br>');
document.write('Percentage = ' + percentage + '%');


// Question 07
document.write('<h1>Question 07</h1>');

document.write('<h1>Currency in PKR</h1>');

var Currency_change = (10 * 104.80) + (25 * 28);
document.write('Total Currency in PKR = ' + Currency_change);


// Question 08
document.write('<h1>Question 08</h1>');

var num = 50;

document.write(num + 5 * 10 / 2);


// Question 09
document.write('<h1>Question 09</h1>');

document.write('<h1>Age Calculator</h1>');

var current_year = 2024;
var birth_year = 2004;
document.write('Current Year = ' + current_year + '<br></br>');
document.write('Birth Year = ' + birth_year + '<br></br>');

var age = 2024 - 2004;
document.write('Your Age = ' + age + '<br></br>');



// Question 10
document.write('<h1>Question 10</h1>');

document.write('<h1>The Geometrizer</h1>');

var radius = 20;
var circumfrances = 2 * 3.142 * radius;
var area = 3.142 * (radius * 20)  ;

document.write('Radius of a Circle = ' + radius + '<br></br>');
document.write('The Circumfrances = ' + circumfrances + '<br></br>');
document.write('The Area = ' + area + '<br></br>');



// Question 11
document.write('<h1>Question 11</h1>');

document.write('<h1>The lifetime supply calculator</h1>');

var fav_snack = 'Ice-Cream'
var age = 20;
var max_age = 80;
var snack_amount = 4;

document.write( 'Favourite snack : ' + fav_snack + '<br></br>');
document.write( 'Current age : ' + age + '<br></br>');
document.write( 'Estimated age : ' + max_age + '<br></br>');
document.write( 'Amount of snack per day : ' + snack_amount + '<br></br>');

var total_amount = 'You will need ' + ( max_age - age) * snack_amount + ' ' + fav_snack + ' to last until you rip the age ' + max_age;
document.write(total_amount);

