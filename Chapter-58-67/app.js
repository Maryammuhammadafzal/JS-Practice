
// Question 01


var main_content = document.getElementById('main-content');

var render = document.getElementsByClassName("render");
var firstname = render[0].innerHTML;
var lastname = render[1].innerHTML;
var email = render[2].innerHTML


for(var i = 0; i<render.length; i++){
    
  if(render[i].innerHTML == firstname){
    var firstname_input = document.getElementById('first-name');
    firstname_input.value = firstname;
  }
  else if(render[i].innerHTML == lastname){
    var lastname_input = document.getElementById('last-name');
    lastname_input.value = lastname;
  }
  else if(render[i].innerHTML == email){
    var email_input = document.getElementById('email');
    email_input.value = email;
  }
  
}


//Question 2 

// var form_content = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3];

// Node type of form content
var form_content = document.getElementById('form-content');
console.log(" Node type of form content is " +form_content.nodeType);

//Node type of last name
var lastName = document.getElementById('lastName');
console.log(" Node type of  last name is " +lastName.nodeType);

//child nodes of last name
var lastNameChild = document.getElementById('lastName');
console.log(`Child Nodes of last name are  ${lastNameChild.childNodes[0].textContent}`);

// Update child nodes of last name
lastNameChild.childNodes[0].textContent = "John";
console.log(`Child Nodes of last name are  ${lastNameChild.childNodes[0].textContent}`);

//Get first or last child of main content
var main_content = document.getElementById('main-content');
console.log(main_content.firstChild.childNodes);
console.log(main_content.lastChild.childNodes);

//Get next or previous siblings of last name 
var lastName = document.getElementById('lastName');
console.log(lastName.nextSibling);
console.log(lastName.previousSibling);

//get the parent node of email 
var email = document.getElementById('email')
console.log(email.nodeType);
console.log(email.parentNode);
