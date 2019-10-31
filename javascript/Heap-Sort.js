function insertHeap(arr, index) {
  let root = Math.floor(index / 2) - 1;
  if (root >= 0 && arr[root] < arr[index - 1]) {
    const temp = arr[root];
    arr[root] = arr[index - 1];
    arr[index - 1] = temp;
    insertHeap(arr, root + 1);
  }
}



function deleteHeap(arr) {
  if (arr.length === 1) {
    return arr.splice(arr.length - 1)[0]
  }
  const deleted = arr[0];
  arr[0] = arr.splice(arr.length - 1)[0];
  let index = 0;
  let leftChild = (2 * index + 1);
  let rightChild = (2 * index + 2);
  let max = arr[leftChild] > arr[rightChild] ? arr[leftChild] : arr[rightChild];
  while (index < arr.length && max > arr[index]) {
    if (max === arr[leftChild]) {
      const temp = arr[leftChild];
      arr[leftChild] = arr[index];
      arr[index] = temp;
      index = leftChild;
    } else {
      const temp = arr[rightChild];
      arr[rightChild] = arr[index];
      arr[index] = temp;
      index = rightChild;
    }
    leftChild = (2 * index + 1);
    rightChild = (2 * index + 2);
    max = arr[leftChild] > arr[rightChild] ? arr[leftChild] : arr[rightChild];
  }
  return deleted;
}


const arr = [50, 30, 20, 15, 10, 8, 16];

arr.push(60);

insertHeap(arr, arr.length);

console.log(arr);

deleteHeap(arr);

console.log(arr);

const arr1 = [];

for (let i = 0; i < 10; i++) {
  arr1.push(i + 1);
  insertHeap(arr1, arr1.length);
}

console.log(arr1);

while (arr1.length > 0) {
  let temp = deleteHeap(arr1);
  console.log(temp);
}



// const arrr = [1,2,3,4]

// console.log(arrr.splice(arrr.length - 1));

// console.log(arrr);
