
// //Question # 01

// // Part (i)

// var mainContent = document.getElementById("main-content");
// // console.log(mainContent.innerHTML)

// // Part (ii)

// var childElementsOfMainContent = mainContent;
// document.write(childElementsOfMainContent);

// //part (iii)

// var renderClassElement = document.getElementsByClassName('render')
// console.log(renderClassElement.innerHTML);


// // document.write(renderClassElement.innerHTML)

// console.log(0.1 + 0.2 == 0.3)
// console.log(3 > 2 > 1)
// console.log(typeof typeof 1);

// const isTrue = true == [];
// const isFalse = true == ![];

// console.log(isTrue + isFalse);

// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());
// console.log(('m' + 'a' + + 'm' + 'a').toLowerCase());

// console.log('this is a string' instanceof String)

// console.log("1" - - "1");

// var foo = {
//     x : 2,
//     baz : {
//         x : 1,
//         bar : function() {
//             return this.x;
//         }
//     }
// }

// var go = foo.baz.bar;

// alert(go());
// console.log(foo.baz.bar());

// console.log(new Array(2).toString());

// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
  
//   console.log(shape.diameter());
//   console.log(shape.perimeter());
var x = [1 , 2 , 3]
if(Array.isArray(x)){
    console.log('array');
    
}

