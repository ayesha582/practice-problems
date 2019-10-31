function merge(arr1, arr2) {
  let l1 = 0,
    l2 = 0;
  let arr = [];
  while (l1 < arr1.length && l2 < arr2.length) {
    if (arr1[l1] <= arr2[l2]) {
      arr.push(arr1[l1]);
      l1++;
    } else {
      arr.push(arr2[l2]);
      l2++;
    }
  }
  while (l1 < arr1.length) {
    arr.push(arr1[l1]);
    l1++;
  }
  while (l2 < arr2.length) {
    arr.push(arr2[l2]);
    l2++;
  }
  return arr;
}

function mergeSort(arr, l, r) {
  if (r > l) {
    let m = Math.floor((l + r) / 2);
    let leftArr = mergeSort(arr, l, m);
    let rightArr = mergeSort(arr, m + 1, r);
    return merge(leftArr, rightArr);
  } else {
    return [arr[l]];
  }
}

const ar = [10, 5, 20, 15];

console.log(mergeSort(ar, 0, ar.length - 1));
