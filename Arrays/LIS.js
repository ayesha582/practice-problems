
/**
 * @approch1 :- dynamic progeamming
 * @question :- longest increasing subsequence
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/longest-increasing-subsequence-using-dynamic-programming/
 */
const main1 = () =>{
    let arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
    let dp = Array(arr.length).fill(1);
    let i=0,j=0,max=1;
    while(j<arr.length){
        if(i===j){
            j++;
            i=0;
        }
        if(arr[i]<arr[j]){
            dp[j] = Math.max(dp[j],dp[i]+1);
            if(dp[j]>max){
                max = dp[j];
            }
        }
        i++;
    }
    console.log(max);
}

main1();

/**
 * @approach2 :-https://www.techiedelight.com/longest-increasing-subsequence/
 */

const main2 = () =>{
    let arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
        
}

main2();