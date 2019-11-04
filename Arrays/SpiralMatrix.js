// Create Spiral Matrix from given number

function printSpiralMatrix(n) {
  let i = 0,
    j = 0,
    count = 0,
    fac = -1,
    arr = [];
  // push empty array into the result array for making it 2-D array
  for (; i < n; i++) arr.push([]);
  console.log(arr);
  while (count < (n * n)) {
    fac++;
    // right
    for (j = fac; j <= ((n - 1) - fac); j++) {
      console.log(((n - 1) - fac), j);
      count += 1;
      arr[fac][j] = count;
    }
    // bottom
    for (i = fac + 1; i <= ((n - 1) - fac); i++) {
      count += 1;
      arr[i][((n - 1) - fac)] = count;
    }
    // left
    for (j = ((n - 1) - fac - 1); j >= fac; j--) {
      count += 1;
      arr[((n - 1) - fac)][j] = count;
    }
    //  up
    for (i = ((n - 1) - fac - 1); i >= (fac + 1); i--) {
      count += 1;
      arr[i][fac] = count;
    }
  }
  return arr;
}


console.log(printSpiralMatrix(3));
