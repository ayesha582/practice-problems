
/**
 * @question :- Function to find the smallest window in the array sorting which will make the entire array sorted
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/smallest-window-sorting-which-make-array-sorted/
 */
const main = () =>{
    let arr = [ 1,2,3,7,5,6,4,8];
    let left=0,right=arr.length-1,min=arr[arr.length-1],max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<max){
            right = i;
        }
    }
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]<min){
            min = arr[i];
        }
        if(arr[i]>min){
            left = i;
        }
    }
    console.log(left,right);
}

main();