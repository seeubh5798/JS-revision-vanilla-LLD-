

// // // for(var i =1;i<=5;i++){
// // //     setTimeout(function ()  {
       
// // //         console.log(j);
// // //     }, i*1000);
// // //     console.log(i);
// // // }

// // // for(let i =1;i<=5;i++){
// // //     // let j =i;
// // //     setTimeout(function ()  {
       
// // //         console.log(i);
// // //     }, i*1000);
// // //     console.log(i);
// // // }

// // // for(var i =1;i<=5;i++){


// // //     function f(j){
// // //         let a =j;
// // //         setTimeout(function ()  {
       
// // //             console.log(j,a);
// // //         }, i*1000);
// // //         // console.log(i);
// // //     }
// // //     f(i);
    
// // // }
// // console.log(o);
// // var o = {
// //     a: 1,
// //     b: null,
// //   };


// //   console.log(o);
// // function outer(){
// //     var a=0;

// //     return function inner(){
// //         a++;
// //         console.log(a);
// //     }

// // }
// // // console.log(a);
// // var c1 = outer();
// // c1();
// // c1();
// // c1();

// // var c2 = outer();
// // c2();
// // c2();

// // c1();
// // c1();

// // c2();
// // c2();

const o1 = {
    name :"Shubham"
}

const o2 = {
    name : "shubham2"
}

console.log(typeof o1);

const fname ="shubham";
console.log(typeof fname);

const lname = new String("shubham2");
console.log(typeof lname);

Object.prototype.getName = function(){
    console.log(this.name);
}

o1.getName();
o2.getName();
o1.__proto__.getName = function() {
    console.log("you have been hacked");
}
console.log("after being hacked");
o1.getName();
o2.getName();

function f (){
    console.log("proto demo");
}

f();
console.log(f);

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const student = new Student("John Doe", 20);
console.log(Student.prototype);
console.log(student.__proto__);
console.log("is equal: " + (Student.prototype === student.__proto__));

student.__proto__ = null;
console.log(student.__proto__);

const student2 = {
 name : "test abc",
 __proto__ : Student.prototype
}
console.log(student2);

document.appendChild