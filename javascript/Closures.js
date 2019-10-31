// Links from MDN

/**
 * A closure is the combination of a function bundled together (enclosed) with references to its
 * surrounding state (the lexical environment).
 * In other words, a closure gives you access to an outer function’s scope from an inner function.
 * In JavaScript, closures are created every time a function is created, at function creation time.
 * * */

/**  ****************** Example ********************************       ** */

function outerFunction() {
  const data = 10;

  function innerFunction() {
    return data;
  }
  return innerFunction;
}

const fn = outerFunction();

// data is available even after the outer function has finished execution because of closure

console.log(fn());



/**  **************************************************       ** */


function* test(i) {
  yield i;
  yield i + 10;
};


const ab = test(10);

console.log(ab.next());

console.log(ab.next());

function abc() {
  let a = 8;
  ((a) => setTimeout(() => {
    console.log(a);
  }, 0))(a);
  a = a + 19;
}

console.log(abc());


const add = (a, b) => a + b;

console.log(add(10, 7));

const partialApply = (fn, factor) => {
  return (a) => {
    return fn(a, factor);
  };
}

const add10 = partialApply(add, 10);

console.log(add10(5));
