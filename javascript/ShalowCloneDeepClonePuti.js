//shalowClone
const shalowClone=(obj)=>{
    let res = {};
    Object.keys(obj).forEach(k=>{
        res[k] = obj[k];
    });
    return res;
}

Object.prototype.shalowClone = shalowClone;


let obj1 = {
    a:1,
    b:[1,2,3],
    c:{q:1,w:2}
}

let obj2 = Object.shalowClone(obj1);

console.log(obj2);

obj1.a = 4;
console.log(obj1);
console.log(obj2);

obj1.b.push(5);

console.log(obj1);
console.log(obj2);

obj1.c.q=8;

console.log(obj1);
console.log(obj2);


//deepClone

const deepClone = (obj) =>{
    let res;
    if(obj instanceof Array){
        res = [];
        res = obj.map(k=>{
            return deepClone(k);
        });
    }else if(obj instanceof Object){
        res = {};
        Object.keys(obj).forEach(k=>{
            if(obj[k]===obj){
                res[k] = res;
            }else{
                res[k] = deepClone(obj[k]);
            }
        });
    }else{
        return obj;
    }
    return res;
}


Object.prototype.deepClone = deepClone;

let obj3 = {
    a:1,
    b:[1,2,3],
    c:{q:1,w:2}
}

obj3['d'] = obj3;

let obj4 = Object.deepClone(obj3);



console.log(obj4);

obj3.a = 4;
console.log(obj3);
console.log(obj4);

obj3.b.push(5);

console.log(obj3);
console.log(obj4);

obj3.c.q=8;

console.log(obj3);
console.log(obj4);


