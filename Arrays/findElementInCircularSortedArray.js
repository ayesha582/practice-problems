const arr = [12, 14, 18, 21, 3, 6, 8, 9];

/**
 * @question Search an element in circulary sorted array
 * @complecity O(log n)
 */


function findElementInCircularlySortedArray(arr, target) {
  let low = 0,
    high = arr.length - 1,
    mid, res = -1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      res = mid;
      break;
    } else if (arr[mid] < arr[high]) {
      if (target > arr[mid] && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (target >= arr[low] && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return res;
}

console.log(findElementInCircularlySortedArray(arr, 9));
