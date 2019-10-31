
/**
 * @question :- Program to find the equilibrium index of an array
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/find-equilibrium-index-array/
 */
const main = () =>{
    let arr = [ 2,3,4,5,4,3,2];
    let left = []
    let lSum = 0,rSum=0;
    for(let i=0;i<arr.length;i++){
        lSum += arr[i];
        left.push(arr[i]);
    }
    let right = [],res=0;
    while(rSum < lSum){
        lSum -= left[left.length-1];
        if(lSum === rSum){
            res = left.length - 1;
            break;
        }
        right.push(left[left.length-1]);
        rSum += left[left.length-1];
        left = left.slice(0,left.length-1);
    }
    console.log(left);
    console.log(right);
    console.log(res);
}

main();