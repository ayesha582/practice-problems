
/**
 * @question :-shuffle array(fisher-yates-shuffle)
 * @complexity :-O(n)
 * @link :- https://www.techiedelight.com/shuffle-given-array-elements-fisher-yates-shuffle/
 */
const main = () =>{
    let arr = [1,2,3,4,5];

    const pickRand = (min,max) =>{
        return Math.floor(Math.random() *(max-min+1))+min;
    }
    for(let i =0;i<arr.length;i++){
        let j = pickRand(i,arr.length-1);
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
}

let ctr = 5;
while(ctr !== 0){
    main();
    ctr--;
}