
/**
 * @question :-in-place merge two sorted arrays X[] and Y[]
 * @complexity :-O(mn)
 * @link :- https://www.techiedelight.com/inplace-merge-two-sorted-arrays/
 */
const main = () =>{
    const arr1 = [ 1, 4, 7, 8, 10 ];
    const arr2 = [2, 3, 9];
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]>arr2[0]){
            let temp = arr1[i];
            arr1[i] = arr2[0];
            arr2[0] = temp;

            let first = arr2[0];
            let j;
            for(j=1;j<arr2.length && arr2[j]<first;j++){
                arr2[j-1] = arr2[j];
            }
            arr2[j-1] = first;
        }
    }
    console.log(arr1);
    console.log(arr2);
}

main();