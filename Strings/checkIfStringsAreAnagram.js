const str = 'silent';

const str1 = 'listen';

function returnHashedObject(str) {
  const obj = {};
  str.split('').forEach(elem => {
    if (elem != ' ') {
      if (obj[elem]) obj[elem]++;
      else obj[elem] = 1;
    }
  });
  return obj;
}

function checkIfStringsAreAnagram(str1, str2) {
  const hashedObj = returnHashedObject(str1);
  for (let i = 0; i < str2.length; i++) {
    if (!hashedObj[str2[i]]) {
      hashedObj[str2[i]] = 99;
      break;
    } else {
      hashedObj[str2[i]]--;
    }
  }
  return Object.keys(hashedObj).every(key => hashedObj[key] === 0);
}

console.log(checkIfStringsAreAnagram(str1, str));
