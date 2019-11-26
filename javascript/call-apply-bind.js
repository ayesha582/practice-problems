const obj = {
  name: 'ABCDEF',
  getName: function() {
    return this.name;
  },
};

function abc(params, parms) {
  console.log(typeof params);
  return 'Hi' + this.getName() + params + parms;
}

const def = abc.bind(obj);

// JS engine creates a new abc instance by copying the abc functions and returns the functions by setting the context / this of abc to the provided value

console.log(def());

console.log(abc.call(obj, '22323', '23232211'));

console.log(abc.apply(obj, [12, 122222278]));
