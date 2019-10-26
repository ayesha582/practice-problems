const main = () =>{
    let arr = [ 5, 6, -5, 5, 3, 5, 3, -2, 0];
    let sum =8;
    let obj={};
    let csum=0;
    let end_i=0,len=0;
    arr.forEach((k,i)=>{
        csum+=k;
        if(obj[csum]===undefined){
            obj[csum]=i;
        }
        if(obj[csum-sum] !== undefined && len < i-obj[csum-sum]){
            len = i-obj[csum-sum];
            end_i = i;
        }
    });
    console.log(end_i-len+1,end_i);
}

main();