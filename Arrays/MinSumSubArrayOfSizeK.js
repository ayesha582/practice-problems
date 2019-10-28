/**
 * @question :-Find minimum sum sub-array of given size k
 * @complexity :- O(n) sliding window
 * @link :-https://www.techiedelight.com/find-minimum-sum-subarray-given-size-k/
 */

const main = () =>{
    let arr=[ 10, 4, 2, 5, 6, -10, 8, 1];
    let start=0,end=0,k=3,csum=0,fsum=9999,i,j;
    while(end<arr.length){
        if(end - start === k){
            if(csum < fsum){
                console.log(start,end,csum)
                fsum = csum;
                i=start;
                j=end;
            }
            csum -= arr[start];
            start++;
        }
        csum+=arr[end];
        end++;
    }
    console.log(fsum,i,j);
}

main();