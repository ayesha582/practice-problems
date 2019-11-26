// given a string remove all occurances of AB and C from string
const str = 'CBAABCAB';

const arr = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'C') {
    // empty block - no action
  } else if (str[i] === 'B' && arr[arr.length - 1] && arr[arr.length - 1] === 'A') {
    arr.pop();
  } else {
    arr.push(str[i]);
  }
}

console.log(arr.join(''));
