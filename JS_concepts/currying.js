//  1. currying f(a,b) => f(a)(b)

function add(a){
    return function(b){
        return a+b;
    }
}

console.log(add(3)(4)); // 7



// infinite currying  add(1)(2)(3)() or add(1)(2)();


function infiniteAdd(a){
    return function(b){
        if(b === undefined){
            return a;
        }
        else{
            return infiniteAdd(a + b);
        }
    }
}
const c = infiniteAdd(1)(2)(3);
console.log("c length : " + c.length); // 6
console.log(infiniteAdd(1)(2)()); // 3




// given a function, make it curried  e.g f(a,b,c)  to f(a)(b)(c)


function curry(func){
    return function curried(...args){
        console.log(args);
        console.log(func.length);
        if(func.length === args.length){
            return func(...args);
        }
        else{
            return function(...nextargs){
                return curried(...args,...nextargs);
            }
        }
    }
}

function tobecurried(a,b,c){
    return a+b+c;
}
// console.log(curry(tobecurried))// 6
console.log(curry(tobecurried)(10)(20)(30)); // 6)


const user = {
    name :"shubham",
    age:26
}

console.log(JSON.stringify(user));
console.log(typeof JSON.stringify(user));


const pm = new Promise((resolve, reject)=>{
    console.log("inside prompse");

    resolve("resolved promise");
})

console.log(pm);
pm.then((res)=> console.log(res));

console.log("eof")