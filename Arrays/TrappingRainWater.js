
/**
 * @question :- trapping rain water
 * @complexity :-O(n) DP
 * @link :-https://www.techiedelight.com/trapping-rain-water-within-given-set-bars/
 */
const main = () =>{
    let arr =[7, 0, 4, 2, 5, 0, 6, 4, 0, 5];
    let left =[];
    let right = [];
    let cmax = arr[0];
    arr.forEach(k=>{
        if(k > cmax){
            cmax = k;
        }
        left.push(cmax);
    });
    cmax = arr[arr.length-1];
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i] > cmax){
            cmax = arr[i];
        }
        right =[cmax].concat(right);
    }
    console.log(left);
    console.log(right);
    let res = 0;
    arr.forEach((k,i)=>{
        res+=(Math.min(left[i],right[i]) - arr[i]);
    });
    console.log(res);
}

main();