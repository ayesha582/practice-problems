const obj1 = {
  a: 'asd',
  b: 123,
  c: {
    ab: 1,
    abc: 23,
    abcd: ['asdf'],
    abcde: { a: 1 },
  },
  d: [1, 2, 3, {
    a: 1,
    b: { ab: 1 },
  }],
};

obj1.e = {};

obj1.e.eb = obj1;


function deepClone(obj) {
  const object = {};
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach(key => {
      if (obj && typeof obj[key] === 'object' && obj[key] !== obj1) {
        object[key] = deepClone(obj[key]);
      } else {
        object[key] = obj[key];
      }
    });
  }
  return object;
}

const reformed = deepClone(obj1);

reformed.b = 12345;

reformed.c.ab = 12345;

reformed.c.abcde.f = 12345;

reformed.e = 1234;

console.log(reformed);

console.log(obj1);

// const shallowCloneObj = {...obj1};

// shallowCloneObj.b = 1233233;
// shallowCloneObj.c.abc = 568;

// console.log(shallowCloneObj);

// console.log(obj1);
