/**
 * Javascript does not provide a class implementation per se (the class keyword is introduced in ES2015,
 * but is syntactical sugar, JavaScript remains prototype-based).
 * Each object has a private property which holds a link to another object called its prototype.
 * That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
 * By definition, null has no prototype, and acts as the final link in this prototype chain
 * *** */

// Inheriting Properties

const fn = function () {
  this.a = 4;
  this.b = 6;
}

const obj = new fn();

fn.prototype.c = 10;

console.log(obj); // { a: 4, b: 6 }

fn.prototype.a = 1;

console.log(obj.c) // 10

console.log(obj.a) // 4

// Is there a 'a' own property on obj? Yes, and its value is 4.
// The prototype also has a 'a' property, but it's not visited.
// This is called Property Shadowing


// Inheriting methods

const o = {
  a: 4,
  getData: function () {
    return this.a + 1;
  },
};


const p = Object.create(o);
// p is an object that inherites from o

console.log(p) // {}

console.log(p.getData()) // 5

p.a = 9;

console.log(p.getData()) // 10


// when p.getData is called, 'this' refers to p.
// So when p inherits the function getData of o,
// 'this.a' means p.a, the property 'a' of p


const o1 = { a: 1 };

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype.
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype.__proto__ ---> null

var b = ['yo', 'whadup', '?'];

// Arrays inherit from Array.prototype
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Functions inherit from Function.prototype
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null


// A "constructor" in JavaScript is "just" a function that happens to be called with the new operator.



/** ************************************************************************ */

function Bar(params) {
  this.abc = params;
}

Bar.prototype.getAbc = function () {
  return this.abc;
}

Bar.prototype.getResult = function () {
  return 'Yay';
}

const abc = new Bar(56);

const def = new Bar(569);

console.log(abc.getAbc());

console.log(def.getAbc());

console.log(abc.getResult());

console.log(def.getResult());
