
/**
 * @question :- Sort an array containing 0’s, 1’s and 2’s
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/sort-array-containing-0s-1s-2s-dutch-national-flag-problem/
 */
const main = () =>{
    const arr = [ 0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0 ];
    let pivot = 1;
    let end = arr.length -1,start = 0,mid=0;
    while(mid<=end){
        if(arr[mid]<pivot){
            let temp = arr[mid];
            arr[mid] = arr[start];
            arr[start] = temp;
            start++;mid++;
        }else if(arr[mid]>pivot){
            let temp = arr[mid];
            arr[mid] = arr[end];
            arr[end] = temp;
            end--;
        }else{
            mid++;
        }
    }
    console.log(arr);
}

main();