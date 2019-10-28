const arr = [8, 9, 10, 12, 15, 6];

/**
 * @question findPeakElement
 * @description Peak element is the element which is greater than all of its neighbours
 * @complecity O(n)
 */

function findPeakElement(arr, low, high) {
  let mid, res;
  mid = Math.floor((low + high) / 2);
  if ((mid === 0 || (arr[mid] >= arr[mid + 1])) &&
    ((mid === arr.length - 1) || (arr[mid] >= arr[mid - 1]))) {
    res = arr[mid];
    return res;
  }

  if (mid != arr.length - 1 && arr[mid + 1] > arr[mid]) low = mid + 1;
  else high = mid - 1;
  return findPeakElement(arr, low, high);
}

console.log(findPeakElement(arr, 0, arr.length));
