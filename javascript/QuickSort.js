const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
arr.push(Number.MAX_SAFE_INTEGER);


function quickSort(l, h) {
  const pivot = arr[l];
  let i = l,
    j = h;
  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  const temp = arr[l];
  arr[l] = arr[j];
  arr[j] = temp;
  return j;
}

function driverQuickSort(l, h) {
  if (l < h) {
    let j = quickSort(l, h);
    console.log(arr);
    driverQuickSort(l, j);
    driverQuickSort(j + 1, h);
  }
}

console.log(arr);

driverQuickSort(0, arr.length - 1);

console.log(arr);
