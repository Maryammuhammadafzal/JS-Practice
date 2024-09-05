
// Question 1

// 1. Basic Object Creation

var person = {
    name: "Maryam",
    age: 20,
    isStudent: true,
    greet: function () {
        console.log(`hello ${person.name}`);

    }
}

person.greet();

// Question 2

// 2. Manipulating Object Properties

var car = {
    make: "aaa",
    model: 'honda',
    year: '2010',
    color: 'white',

    changeColor: function () {
        car.color = 'black'
        return car.color;
    }
}

console.table(car);
console.log(car.changeColor());


//Question 3

// 3. Nested Objects

var library = {
    name: 'Quaid-e-Azam',
    address: {
        city: 'Lahore',
        street: 'abc road street no 5',
        zipCode: '57362'
    },

    books: [{
        title: `Muslim's Sacrifies`,
        author: 'Allama Iqbal',
        isAvailable: 'yes'
    },

    {
        title: `Seperation of india`,
        author: 'Liaquat Ali khan',
        isAvailable: 'no'
    },

    {
        title: `Women's Empowerment`,
        author: 'Fatima Jinnah',
        isAvailable: 'yes'
    },
    ],

    addMoreBooks: function () {
        library.books.push({
            title: `justice`,
            author: 'john',
            isAvailable: 'yes'
        });

        return library.books
    },

    findBooksByTitle: function () {
        library.addMoreBooks();
       var title = library.books[0].title;
       return title;
    }
}

console.table(library);
console.log(library.findBooksByTitle());
// console.log(library.addMoreBooks());
// console.log(library.books);



//Question 4

//4. Iterating Through an Object

var inventry = {

    properties: {
        item1: 'apple',
        item2: 'banana',
        item3: 'grape',
        item4: 'oranges',
    },

    quantity: {
        item1Value: '45',
        item2Value: '51',
        item3Value: '6',
        item4Value: '15',
    },

    iterationOfItems: function () {

        for (var keys in inventry.properties) {
            var itemName = inventry.properties[keys];
            // console.log(itemName)
        }

        for (var keys in inventry.quantity) {
            var itemValue = inventry.quantity[keys]
        }

        var items = itemName + ' ' + itemValue;
        return items;

    }

}

// inventry.iterationOfItems();
console.log(inventry.iterationOfItems());
