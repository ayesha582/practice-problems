/**
 * @question :- Move all zeroes present in the array to the end
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/move-zeros-present-array-end/
 */


// Sample Input - [1, 0, 1, 0, 1, 0, 0, 1]


function moveAllZeroesToEnd(arr) {
  let i, pos = 0,
    temp;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[pos] === 0) {
        temp = arr[i];
        arr[i] = arr[pos];
        arr[pos] = temp;
      }
      pos++;
    }
  }
  return arr;
}


console.log(moveAllZeroesToEnd([0, 1, 0, 6, 0, 8, 0, 0, 1, 0]));
