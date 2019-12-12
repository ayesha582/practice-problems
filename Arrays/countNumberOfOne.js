const arr = [0,0,0,0,1,1,1];

// find the first occurance of the element in sorted array

function firstOccurance(arr, key) {
    let high = arr.length - 1;
    let low = 0;
    let mid;
    let res;
    while(high >= low) {
        mid = Math.floor((high + low)/ 2);
        if(arr[mid] === key) {
            // update the result and search in the left half
            res = mid;
            high = mid - 1;
        } else if(arr[mid] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return res;
}

console.log(firstOccurance(arr, 1));

// count number of 1's in binary sorted array


function countNumberOfOne(arr) {
    if(arr[arr.length - 1]) {
        return (arr.length - firstOccurance(arr, 1));
    } else return 0;
}

console.log(countNumberOfOne(arr));
