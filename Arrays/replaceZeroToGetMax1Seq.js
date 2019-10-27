/**
 * @question :- Find index of 0 to replaced with 1 to get maximum sequence
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/find-index-0-replaced-get-maximum-length-sequence-of-continuous-ones/
 */

const main = () =>{
    let arr = [0, 0, 1, 0, 1, 1, 1, 0, 1, 0,1,1,1,1,1,0,1,1,1,0];
    let maxIndex = -1;
    let maxCount = 0;
    let prevZero = -1;
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 1){
            count++;
        }else{
            count = i-prevZero;
            prevZero = i;
        }
        if(count > maxCount){
            maxCount = count;
            maxIndex = prevZero;
        }
    }
    console.log(maxIndex);
}
main();