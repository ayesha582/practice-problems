
/**
 * @question :- Function to merge overlapping intervals
 * @complexity :- O(nlogn)
 * @link :- https://www.techiedelight.com/merging-overlapping-intervals/
 */
const main = () => {
  let arr = [[1, 5], [2, 3], [4, 6], [7, 8], [8, 10], [12, 15]];
  arr.sort((a, b) => a[0] - b[0]);
  let i = 1;
  let j = 0;
  let res = [];
  res.push(arr[0]);
  while (i < arr.length) {
      if(arr[i][0] <= res[j][1] && arr[i][1] > res[j][1]){
        res[j][1] = arr[i][1];
      }else if(arr[i][0] > res[j][1]){
          res.push(arr[i]);
          j++;
      }
    i++;
  }
  console.log(res);
};

main();
