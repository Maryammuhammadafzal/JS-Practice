//Question 1
//multi array

//Declare and initialize multi Dimentional array 
var multi_array = [ ,[ , ,[ , ], ], ,[ , , ,[ , ],[ , , ]],  ];

multi_array[0] = 1;
multi_array[1][0] = 2;
multi_array[1][1] = 3;
multi_array[1][2][0] = 4;
multi_array[1][2][1] = 5;
multi_array[1][3] = 6;
multi_array[2] = 7;
multi_array[3][0] = 8;
multi_array[3][1] = 9;
multi_array[3][2] = 10;
multi_array[3][3][0] = 11;
multi_array[3][3][1] = 12;
multi_array[3][4][0] = 13;
multi_array[3][4][1] = 14;
multi_array[3][4][2] = 15;
multi_array[4] = 16;

console.log(multi_array);


//Question 2
// print Counting 

// print numeric counting from 1 to 10 by using loop
for(var i = 1; i <= 10; i++ ){
    document.write(i + '<br>');
}


//Question 3
// print Table 

// print table by taking number and length of table
document.write('<h1> Table </h1>');

var tableNumber = +prompt('Enter a number that table you want to print?');
var tableTimes = +prompt('How many times you want to print the table of ' + tableNumber + ' :');

for(i = 1; i <= tableTimes; i++){
    document.write(tableNumber + ' X ' + i + ' = ' + tableNumber*i + '<br>');
}


//Question 4
// print fruits array

// making an array of fruits
var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawberry'];

// print fruit array line by line
for(i = 0; i<fruits.length; i++ ){
    document.write(fruits[i] + '<br>');
}

// Display the fruits array with their index number
for( i = 0; i<fruits.length; i++){
    document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>');

}