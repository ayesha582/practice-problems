/**
 * @question :- Find minimum number of platforms needed in the station to avoid any delay in arrival of any train
 * @complexity :- O(n)
 * @link :- https://www.techiedelight.com/minimum-number-of-platforms-needed-avoid-delay-arrival-train/
 */
const main = () => {
  let arr = [2.0, 2.1, 3.0, 3.2, 3.5, 5.0];
  let dep = [2.3, 3.0, 3.2, 4.3, 4.0, 5.2];
  let merged = arr
    .map(k => ({ value: k, isArr: true }))
    .concat(dep.map((k) => ({ value: k, isArr: false })))
    .sort((a, b) => a.value - b.value);
  let platforms =0,max=0,prev;
  merged.forEach(k=>{
    if(k.isArr){
        platforms++;
    }else{
        platforms--;
    }
    if(platforms > max){
        max=platforms;
    }
    if(prev && prev.value === k.value){
        max--;
    }
    prev=k;
  });
  console.log(merged);
  console.log(max);
};

main();
