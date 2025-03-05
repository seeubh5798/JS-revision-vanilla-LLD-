function grandparent(){
    console.log("Grandparent");
}

function parents(){
    console.log("Parent");
}

function child(e){
    console.log("Child");
    // e.stopPropagation();
}

function subchild(){
    console.log("Subchild");
}

const gparent = document.getElementById("grandparent");
// console.log(gparent);
gparent.addEventListener("click", grandparent, true);
const newElement = document.createElement("div");
newElement.innerHTML = "New Element"; // 
gparent.insertAdjacentElement("beforebegin",newElement)

const prent = document.getElementById("parent");
prent.addEventListener("click", parents), true;
console.log(prent);

const chld = document.getElementById("child");
chld.addEventListener("click", (e)=>child(e));

const schld = document.getElementById("subchild");
schld.addEventListener("click", subchild);



// class Person {
//     constructor(name){
//         this.name = name;
//     }
   
// }

// // Adding a method to the prototype
// Person.prototype.sayHello = function() {
//     return `Hello, my name is ${this.name}`;
// };

// const alice = new Person("Alice");
// console.log(alice.sayHello()); // Output: "Hello, my name is Alice"

// console.log(Person.prototype); 
// Output: { sayHello: [Function (anonymous)] }


function fun(){
    let i=1;
    return function(){
    
    setTimeout(function()  {
        i++;
        console.log(i);
    }, 1000);
}
}

// const bf =fun();
// bf();
// bf();
// bf();


const o1 = { name : "ashutoshj" , address : { street :601 , city : "hyderaabad"}};
const o2 = o1;
console.log(o1 === o2); // true
const o3 = {...o1};
o3.name ="shubham";
o3.address.city = "banglore";
console.log(o3);
console.log(o1); // ashutoshj

