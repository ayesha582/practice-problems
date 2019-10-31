const str = 'ababcabcabababd';

const pattern = 'ababd';

function lpsArray(pattern) {
  let len = 0,
    i = 1;
  const lps = [0];
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return { lps };
}

function KMPAlgorithm(str, patt) {
  // fill the lps array
  const { lps } = lpsArray(patt);
  let j = -1,
    res = false,
    i = 0;
  while (i < str.length) {
    if (str[i] === patt[j + 1]) {
      j++;
      i++;
    } else {
      if (lps[j] && lps[j] != 0) {
        j = lps[j];
      } else {
        j = -1;
        i++;
      }
    }
    if ((j + 1) === patt.length) res = true;
  }
  return res;
}

console.log(KMPAlgorithm(str, pattern));
