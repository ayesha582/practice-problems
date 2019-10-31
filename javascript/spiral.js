function spriral(n) {
  let begin = -1,
    end = n,
    count = 0,
    arr = [];
  for (let i = 0; i < n; i++) arr.push([]);
  while (count <= (n * n)) {
    begin++;
    end--;
    // for going in right direction
    for (let j = begin; j <= end; j++) {
      arr[begin][j] = ++count;
    }
    // console.log(arr);
    if (count >= (n * n)) break;
    for (let j = begin + 1; j <= end; j++) {
      arr[j][end] = ++count;
    }
    // console.log(arr);
    if (count >= (n * n)) break;
    for (let j = end - 1; j >= begin; j--) {
      arr[end][j] = ++count;
    }
    // console.log(arr);
    if (count >= (n * n)) break;
    for (let j = end - 1; j > begin; j--) {
      arr[j][begin] = ++count;
    }
    // console.log(arr);
    if (count >= (n * n)) break;
  }
  return arr;
}

const ar = spriral(4);

console.log(ar);
