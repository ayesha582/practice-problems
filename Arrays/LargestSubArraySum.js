/**
 * @question :- Function to find contiguous sub-array with the largest sum
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/maximum-subarray-problem-kadanes-algorithm/
 */

const main = () =>{
    let arr = [-8, -3, -6, -2, -5, -4 ];
    let cMax = arr[0],tMax = arr[0];
    for(let i = 1;i<arr.length;i++){
        cMax += arr[i];
        cMax = Math.max(cMax,arr[i]);
        tMax = Math.max(tMax,cMax);
    }
    console.log(tMax);
}

main();