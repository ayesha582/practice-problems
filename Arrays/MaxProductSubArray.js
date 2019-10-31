
/**
 * @question :- find max product sub array
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/find-maximum-product-subarray-given-array/
 */
const main = () =>{
    let arr = [-6, 4, -5, 8, -10, 0, 8 ];
    let cmax=0, cmin=0, umax=0;
    for(let i=0;i<arr.length;i++){
        let temp = cmax;
        cmax = Math.max(arr[i],Math.max(arr[i]*cmax,arr[i]*cmin));
        cmin = Math.min(arr[i],Math.min(arr[i]*temp,arr[i]*cmin));
        umax = Math.max(cmax,umax);
        console.log(cmax,cmin,umax);
    }
    console.log(umax);
}

main();