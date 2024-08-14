

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

let shoppingList = document.getElementById('shopping-list').innerHTML

console.log(shoppingList);

function expandShoppingList(){
   
   document.getElementById('shopping-list').add( `
        <li id="disable-shopping-list-item" >Cakes</li>
        <li id="disable-shopping-list-item" >Biscuit</li>
        <li id="disable-shopping-list-item" >Alpha Tea</li>
        <li id="disable-shopping-list-item" >Floor</li>
        <li id="disable-shopping-list-item" >Butter</li>`)

   


}

