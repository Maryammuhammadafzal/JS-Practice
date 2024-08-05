
// Task # 01 : find the middle 'h'

var studentName = 'huDa ayesha hafsa MisBah';
var firstIndex = studentName.indexOf('h'); 
var lastIndex = studentName.lastIndexOf('h');
var middleIndex = (firstIndex + lastIndex)/2
console.log(Math.round(middleIndex));

var studentName = 'huDa ayesha hafsa MisBah';
var letterCount = 0;

for(var i = 0; i < studentName.length; i++ ){
    if(studentName[i] === 'h' ){
        letterCount++;
        if(letterCount === 2){
            console.log(i)
        }

    }
}

// console.log(letterCount);


// Task # 02 : Generate a random password

// var passwordLength = +prompt('Enter a length of the password');

// var specialChar = "grofwjiYiplsmnbjkdtk7r2830kdlAB~!@#u9r7feiwo840mx,s$%^S'dp=k&*()dlp3[e_-+=`|{}[]:;'<>,./?|";
// var password = '';

// for(var i = 0; i < passwordLength; i++ ){
//     var randomNum = Math.floor(Math.random()*specialChar.length);
//     password += specialChar[randomNum];
  
// }

// console.log(password);


//Task # 03 Head or Tail Game

// var player1 = prompt('Enter player 1 name');
// var player2 = prompt('Enter player 2 name');

// var toss = prompt('Choose 1' , 'Head or Tail');
// var tosstoLowerCase = toss.toLowerCase();
// var toss2;

// var tossNumber = Math.floor(Math.random()*2);

// if(tossNumber == 0 && toss == 'head'){
//     toss2 = 'tail';
//     alert(player1 + ' ' + toss + ' win ');
// }
// else if(tossNumber == 0 && toss == 'tail'){
//     toss2 = 'head';
//     alert(player1 + ' ' + toss + ' win');
// }
// else if(tossNumber == 1 && toss == 'head'){
//     alert(player2 + ' ' + toss + ' win ');
// }
// else if(tossNumber == 1 && toss == 'tail'){
//      alert(player2 + ' ' + toss + ' win ');

// }
// console.log(tossNumber);


// document.write('<h1> Printing Stars </h1>')
// // Printing STars

// for (i = 0; i <= 7; i++){
//     for(j = 1; j <= i; j++){
//         document.write('<b> * </b>');
        
//     }
//     document.write('<br>');
// }

// document.write('<br>');
// // Reverse Stars

// for (i = 7; i >= 0; i--){
//     for(j = 1; j <= i; j++){
//         document.write('<b> * </b>');
        
//     }
//     document.write('<br>');
// }

// document.write('<br>');

// Name Printing

for (i = 0; i <= 0; i++){
    for(j = 1; j <= 10; j++){
        document.write('<b> * </b>' + '&nbsp;' );
        if(j == 4){

            continue;
        }
    }
    document.write('<br>' + ' ' );
}

document.write('<br>');