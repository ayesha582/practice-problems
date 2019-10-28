
/**
 * @question :-Function to find the maximum sequence of continuous 1's by replacing atmost k 0's by 1 using sliding window technique
 * @complexity :- O(n)
 * @link :-https://www.techiedelight.com/find-maximum-sequence-of-continuous-1s-can-formed-replacing-k-zeroes-ones/
 */
const main = () =>{
    let arr = [ 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0];
    let start=0,end=0,k=4;
    let zCount =0,maxL =0,cMax=0;
    while(end < arr.length){
        while(zCount > k){
            if(arr[start] === 0){
                zCount--;
            }
            cMax--;
            start++;
        }
        if(maxL < cMax){
            maxL=cMax;
        }
        if(arr[end] === 0){
            zCount++;
        }
        cMax++;
        end++;
    }
    if(maxL < cMax){
        maxL=cMax;
    }
    console.log(maxL,cMax);
}

main();