/**
 * @question :- Sort Binary Array in Linear Time
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/sort-binary-array-linear-time/
 */


// Sample Input - [1, 0, 1, 0, 1, 0, 0, 1]


function sortBinaryArray(arr) {
  let i = 1,
    pos = 0,
    temp;
  for (; i < arr.length; i++) {
    if (arr[i] < 1) {
      // swap the element with pos
      temp = arr[pos];
      arr[pos] = arr[i];
      arr[i] = temp;
      pos++;
    }
  }
  return arr;
}


console.log(sortBinaryArray([1, 0, 1, 0, 1, 0, 0, 1, 0]));
