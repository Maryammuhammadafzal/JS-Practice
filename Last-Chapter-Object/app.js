// Question 1

var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }];

// Calculate total price of each item and all items; 

 var totalPrice = (itemsArray[0].price * itemsArray[0].quantity) + (itemsArray[1].price * itemsArray[1].quantity) + (itemsArray[2].price * itemsArray[2].quantity) + (itemsArray[3].price * itemsArray[3].quantity) 

console.log(totalPrice);
