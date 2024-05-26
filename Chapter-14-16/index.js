
//Queston 1
// empty array

var studentName = [];


// Question 2
// empty array

var studentName = [];

// Question 03
// string array 

var siblingsName = ['Maryam' , ' Azam' ,'Misbah'];


//Question 04
// number array 

var num = [81 , 79 , 56];


//Question 05
// boolean array 

var boolean = [false , true];


//Question 06
// mixed array 

var mixed = [81 , ' Maryam' , true , undefined ];


//Question 07
// education array 

document.write('<h1>Qualification</h1>');

var qualification = ['1) SSC' , '2) HSC' , '3) BCS' , '4) BS' , '5) BCOM' , '6) MS' , '7) MPhil' , '8) PhD'];
document.write('<h1> Qualification </h1>');
document.write('<br>' , qualification[0] , '<br>' , qualification[1] , '<br>' , qualification[2] , '<br>' , qualification[3] , '<br>' , qualification[4] ,
'<br>' , qualification[5] ,'<br>' , qualification[6] ,'<br>' , qualification[7] , '<br>'
)

//Question 08
// Student score array 

document.write('<h1>Students Scores</h1>');

var studentsName = ['Maryam' , ' Misbah ' , 'Ayesha'];
var studentsScore = [480 , 428 , 320];
var totalScore = 500;
var percentage = [(studentsScore[0] / totalScore ) *100 , (studentsScore[1] / totalScore ) *100 , (studentsScore[2] / totalScore ) *100];

document.write('Score of ' + studentsName[0] + ' is ' + studentsScore[0] + ' .Percentage is '   + percentage[0] + '%'   + '  <br>'   +
               'Score of ' + studentsName[1] + ' is ' + studentsScore[1] + ' .Percentage is ' +  percentage[1] + '%' +  '<br>'  +
               'Score of ' + studentsName[2] + ' is ' + studentsScore[2] + ' .Percentage is ' + percentage[2] + '%' + '<br>'
)

// Question 9
// colour array

document.write('<h3>Colors</h3>');

// Initialize an array with color names
var colors = ["Red", "Green", "Blue"];

// Function to display array elements in the browser
function displayArray() {
    document.write("<b>Current Array:</b> " + colors.join(", ") + "<br>");
}

// Function to add color to the beginning of the array
function addColorToBeginning(color) {
    colors.unshift(color);
    displayArray();
}

// Function to add color to the end of the array
function addColorToEnd(color) {
    colors.push(color);
    displayArray();
}

// Function to add two colors to the beginning of the array
function addTwoColorsToBeginning() {
    colors.unshift("Yellow", "Purple");
    displayArray();
}

// Function to delete the first color in the array
function deleteFirstColor() {
    colors.shift();
    displayArray();
}

// Function to delete the last color in the array
function deleteLastColor() {
    colors.pop();
    displayArray();
}

// Function to add a color at a specific index
function addColorAtIndex(index, color) {
    colors.splice(index, 0, color);
    displayArray();
}

// Function to delete colors from a specific index
function deleteColorsFromIndex(index, numToDelete) {
    colors.splice(index, numToDelete);
    displayArray();
}

// Ask the user for input and perform operations accordingly
var userInput;
userInput = prompt("Enter the color you want to add to the beginning:");
addColorToBeginning(userInput);

userInput = prompt("Enter the color you want to add to the end:");
addColorToEnd(userInput);

addTwoColorsToBeginning();

deleteFirstColor();

deleteLastColor();

var index = prompt("Enter the index at which you want to add a color:");
userInput = prompt("Enter the color you want to add at index " + index + ":");
addColorAtIndex(index, userInput);

var deleteIndex = prompt("Enter the index from which you want to delete color(s):");
var deleteCount = prompt("Enter the number of colors you want to delete from index " + deleteIndex + ":");
deleteColorsFromIndex(deleteIndex, deleteCount);


//Question 10
// ascending an array

document.write('<b>Order the score</b>');

var studentScores = [87, 65, 92, 78, 90];


studentScores.sort(function(a, b) {
    return a - b;
});

document.write("Sorted student scores in ascending order: ");
document.write(studentScores);



//Question 11
// select cities array

document.write('<h1>Cities</h1>');

var cities = ["Karachi", "Lahore", "Islamabad", "peshawar", "Quetta"];

// Initialize an empty array for selected cities
let selectedCities = [];

// Copy three array elements from cities array to selectedCities array
selectedCities = cities.slice(0, 3);

document.write('<br>'+ "Selected cities: ");
document.write(selectedCities);

//Question 12
// joining an array

document.write('<h1>Joined array</h1>');

var arr = ["This", "is", "my", "cat"];

var joined = arr.join(' ');

document.write('<br>' + arr + '<br>');
document.write(joined);

//Question 13
// one by one calling array 
document.write('<h1> Devices </h1>');

var device = [];

device = ['Monitor ',];
document.write(device);

device = ['Keyboard ',];
document.write(device);

device = ['CPU ',];
document.write(device);

device = ['Mouse '];
document.write(device);

/////////////////////////////////////

device = device[0];
device = [ 'Monitor ',];
document.write('<h3>Out</h3>');
document.write(device);

device = device[1];
device = [ 'Keyboard ',];
document.write('<h3>Out</h3>');
document.write(device);

device = device[2];
device = [ 'CPU ',];
document.write('<h3>Out</h3>');
document.write(device);

device = device[3];
device = [ 'Mouse '];
document.write('<h3>Out</h3>');
document.write(device + '<br>');

//question 14
//from Last calling array

document.write('<h1>New Devices </h1>');

var newdevice = [];

newdevice = ['Monitor ',];
document.write(newdevice);

newdevice = ['Keyboard ',];
document.write(newdevice);

newdevice = ['CPU ',];
document.write(newdevice);

newdevice = ['Mouse '];
document.write(newdevice);

/////////////////////////////////////

newdevice = newdevice[3];
newdevice = [ 'Mouse ',];
document.write('<h3>Out</h3>');
document.write(newdevice);

newdevice = newdevice[2];
newdevice = [ 'CPU ',];
document.write('<h3>Out</h3>');
document.write(newdevice);

newdevice = newdevice[1];
newdevice = [ 'Keyboard ',];
document.write('<h3>Out</h3>');
document.write(newdevice);

newdevice = newdevice[0];
newdevice = [ 'Monitor '];
document.write('<h3>Out</h3>');
document.write(newdevice);


//Question 15
//Phone manufatue array

document.write('<h1>Phone Manufacture</h1>');

// Array to store phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Function to generate dropdown/select menu
function generateDropdown() {
    document.write("<select>");
    for (var i = 0; i < phoneManufacturers.length; i++) {
        document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
    }
    document.write("</select>");
}

// Call the function to generate the dropdown/select menu
generateDropdown();
