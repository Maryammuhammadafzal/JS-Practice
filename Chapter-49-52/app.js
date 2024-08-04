

 function formData(){
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let userName = firstName + lastName
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value
    let birthdate = document.getElementById('birth-date').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let comment = document.getElementById('feedback').value;
   document.write(userName + '<br>')
   document.write(email + '<br>');
   document.write(password + '<br>');
   document.write(birthdate + '<br>');
   document.write(country + '<br>');
   document.write(city + '<br>');
   document.write(comment + '<br>');
}
