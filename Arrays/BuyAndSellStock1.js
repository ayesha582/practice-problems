/**
 * @question :-  Function to find maximum profit that can be earned by buying and selling shares any number of times
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/maximum-profit-earned-buying-and-selling-shares/
 */
const main = () =>{
    let arr = [1, 5, 2, 3, 7, 6, 4, 5];
    let start = 0;
    let end = 1;
    let profit =0;
    while(end<arr.length && start<arr.length){
        while(end<arr.length && arr[end+1] > arr[end]){
            end++;
        }
        console.log(end,start);
        while(arr[start] > arr[end]){
            start++;
        }
        if(end < arr.length){
            profit += arr[end] - arr[start];
            start = end+1;
            end = start+1;
        }
        console.log(end)
    }
    console.log(profit);
}

main();