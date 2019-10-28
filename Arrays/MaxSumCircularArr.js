
/**
 * 
 * @question :-  Function to find maximum sum circular subarray in a given array
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/maximum-sum-circular-subarray/
 */
const kadane = (arr) =>{
    let cMax=arr[0],Tmax=arr[0];
    for(let i=1;i<arr.length;i++){
        cMax += arr[i];
        cMax = Math.max(cMax,arr[i]);
        Tmax = Math.max(Tmax,cMax);
    }
    return Tmax;
}

const main = () =>{
    let arr = [ 2, 1, 5, 4, -3, 1];
    let nArr = arr.map(k=>-k);
    let nMax = kadane(nArr);
    let arrSum = arr.reduce((t,k)=>t+k);
    let res = Math.max(kadane(arr),nMax+arrSum);
    console.log(res,arrSum);
}

main()