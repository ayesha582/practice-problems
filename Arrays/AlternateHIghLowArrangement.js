/**
 * @question :- Function to rearrange the array such that every second element
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/rearrange-the-array-with-alternate-high-and-low-elements/
 */
const main = () => {
  const arr = [2, 6, 5, 7, 9, 2, 10];
  let start = 1;
  while (start < arr.length) {
    if(arr[start-1] > arr[start]){
        let temp = arr[start];
        arr[start] = arr[start-1];
        arr[start-1] = temp;
    }
    if(start+1 < arr.length && arr[start+1]>arr[start]){
        let temp = arr[start+1];
        arr[start+1] = arr[start];
        arr[start] = temp;
    }
    start+=2;
  }
  console.log(arr);
};

main();
