const arr = [9, -3, 5, -2, -8, -6, 1, 3];

/**
 * @question Segregate positive and negative in O(n) time
 * @complecity O(n)
 */

function segregatePositiveAndNegativeIntegers(arr) {
  let pointer = 0,
    temp;
  arr.forEach((elem, index) => {
    if (elem < 0) {
      // swap element at index with pointer
      temp = arr[pointer];
      arr[pointer] = elem;
      arr[index] = temp;
      pointer++;
    }
  });
  return arr;
}

console.log(segregatePositiveAndNegativeIntegers(arr));
