function abc(a) {
  return (b) => {
    return a + b;
  }
}

console.log(abc(1)(2));

[1, 2, 3, 3, 4].map(elem => {
  console.log(elem);
});

let sum = 0;

function test1(a) {
  if (a) {
    sum += a;
    return test1;
  }
  return sum;
}

console.log(test1(3)(3)(6)(3)(6)(7)(8)());


const obj = {};

obj.__proto__.sum = 0;

obj.__proto__.getSum = function () {
  console.log(this.sum);
  const s = this.sum;
  obj.__proto__.sum = 0;
  return s;
}

obj.__proto__.curry = function curry(a) {
  obj.__proto__.sum += a;
  console.log(obj.__proto__.sum);
  return curry;
}

console.log(obj.curry(8)(9)(10));

console.log(obj.getSum());

console.log(obj.curry(8)(9)(10));

console.log(obj.getSum());
