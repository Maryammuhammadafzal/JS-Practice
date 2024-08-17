
console.log(typeof null);

var arr = ['a' , 'b' , 'c'];
arr.push('d');
console.log(arr);

console.log(typeof NaN);

var strToNum = Number('7');
console.log(strToNum);
console.log(typeof strToNum);

var arr = ['a' , 'b' , 'c'];
arr.unshift('d');
console.log(arr);

console.log(2 + '2');

var arr = [3 , 7 , 2].sort((a,b) => a - b );
console.log(arr);

console.log(10 > 9)
console.log(2 + true);
console.log(typeof undefined);
console.log('5' - 2);
console.log(1 + '1' - 1);
console.log(2 + 3 * 5);
console.log([1, 2] == [1, 2]);
console.log("Hello".length);

var arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);
console.log(arr);

function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet('Alice'));
  
  let x = [1, 2, 3];
  let y = [1, 2, 3];
  console.log(x === y);

  var fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.indexOf('banana'));

let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}

var sum = (a, b) => a + b;
console.log(sum(5, 3));

var person = {
    firstName: 'Jane',
    lastName: 'Doe'
  };
  
  console.log(person['firstName']);
  console.log(person.firstName);

  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }


var a = [1, 2, 3];console.log(a);
var b = a.map(x => x * 2);console.log(b);
var c = b.filter(x => x > 3);
console.log(c);


function test() {
    console.log(this);
  }
  
  test.call({ name: 'Test' });

  var arr = [1, 2, [3, 4]];
var [a, b, [c, d]] = arr;
console.log(a, b, c, d);

var getValue = () => ({ value: 42 });
console.log(getValue().value);

var arr = [1, 2, 3];
var newArr = arr.concat([4, 5]);
console.log(newArr);

const str = 'hello';
console.log([...str].reverse().join(''));

function outer() {
    let x = 10;
    function inner() {
      console.log(x);
    }
    return inner;
  }
  
  const func = outer();
  func();

  const foo = () => {
    let x = 1;
    {
      let x = 2;
      console.log(x);
    }
    console.log(x);
  };
  
  foo();

  function generateMultiples(n) {
    let result = [];
    for (let i = 1; i <= 5; i++) {
      result.push(n * i);
    }
    return result;
  }
  
  console.log(generateMultiples(3));

  const isPositive = num => num > 0 ? 'Positive' : 'Not Positive';
console.log(isPositive(10));
console.log(isPositive(-5));

const evenNumbers = [2, 4, 6];
const doubled = evenNumbers.map(num => num * 2);
console.log(doubled);

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}


function checkNumber(num) {
    if (num > 0) {
      return 'Positive';
    } else if (num < 0) {
      return 'Negative';
    } else {
      return 'Zero';
    }
  }
  
  console.log(checkNumber(5));
  console.log(checkNumber(-3));
  console.log(checkNumber(0));

  const isEven = num => num % 2 === 0;
console.log(isEven(4));
console.log(isEven(7));

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5));
  
