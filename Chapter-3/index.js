
// Chapter # 03
// Variable for Number

// ----------Question-1-----------

var age = 20;
alert('I am ' + age + ' year old')

// ---------Question-2------------

var birth_year = 2004;
document.write('My birth year is ' + birth_year  + '<br></br>' + ' Data type of my declared variable is ' + typeof (birth_year));

// ----------Question-3-------------

var visit = 14;
alert('You have visited this site ' + visit + ' times');


// ----------Question-4-------------

var line = ' <hr></hr>'
var store = '<b>www.Online Clothing Store.com</b>';

var customer_Name = '<b>Azam Nagori</b>' ;
var product_Title = '<b>Smart Watches</b>';
var quantity = '<b> 2 </b>';

var customer_Info = customer_Name + ' ordered ' +  quantity + product_Title + ' on ' + store;
document.write(line );
document.write(customer_Info);
document.write(line);

// ----------------------------Custom design--------------------------------

var div = '<div style=" height:280px; width:350px; background-color: rgb(70, 135, 111); margin: auto auto; position:absolute; left:10px ; top:112px; z-index:-1; border: 2px solid black; border-radius : 30px; box-shadow: 2px 2px 8px black;"> </div>'
document.write(div)

var gap = ' &nbsp;&nbsp;&nbsp'

var store = ' <b>www.Online Clothing Store.com</b>';

var customer_Name = ' <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Azam Nagori</h1>';
var product_Title =  ' Order: <b>Smart Watches</b>';
var quantity = ' Quantity: <b> 2 </b>';

var customer_Info = gap + store + customer_Name + gap + product_Title + "<br></br>" + gap +   quantity ;

document.write(customer_Info);

// ----------------------------------------------------------------------------------------

