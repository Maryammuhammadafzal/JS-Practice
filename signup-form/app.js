

let signupbtn = document.querySelector('.signup-btn');
let backtosignupbtn = document.querySelector('.back-btn');
let body = document.querySelector('.body');

signupbtn.onclick = function(){
    body.classList.add('slide');
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let userName = firstName + lastName
    console.log(userName)
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value

    if(document.getElementById('gendermale').value == 'Male'){
        console.log('Male')
    }
    else{
        console.log('Female')
    }

    let birthdate = document.getElementById('birth-date').value;

    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let comment = document.getElementById('feedback').value;
    console.log(email);
    console.log(password);
    console.log(birthdate);
    console.log(country);
    console.log(city);
    console.log(comment);
}

backtosignupbtn.onclick = function(){
    body.classList.remove('slide');
}



// console.log(firstName)
// signupbtn.onclick = function userInformation(){
   
    
// }    