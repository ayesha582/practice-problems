const encodeString = (s) =>{
    let evenSet = {};
    let oddSet = {};
    for(let i=97;i<=122;i++){
        evenSet[String.fromCharCode(i)] = 0;
        oddSet[String.fromCharCode(i)] = 0;
    }
    for(let i=0;i<s.length;i++){
        let cur = s.charAt(i);
        if(i%2 === 0){
            evenSet[cur]++;
        }else{
            oddSet[cur]++;
        }
    }
    let res='';
    console.log(Object.keys(oddSet).length)
    Object.keys(evenSet).forEach(k=>{
        res+=`${evenSet[k]}-${oddSet[k]}-`;
    });
    return res;
}

const main = () =>{
    const s1 = "abcdefg";
    const s2 = "gbafcde";
    let res = [];
    if(s1.length !== s2.length){
        res.push("No");
    }
    else if(encodeString(s1) === encodeString(s2)){
        res.push("Yes");
    }else{
        res.push("No");
    }
    console.log(res);
    return res;
}

main();