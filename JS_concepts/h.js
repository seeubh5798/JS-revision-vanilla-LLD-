
getName();  // Outputs: Hello due to hoisting
// getName2();  // Outputs: gives error
console.log(b); // Outputs: undefined due to hoisting
var a =10;
console.log(a);
var b=11;

function getName() {
    console.log("Hello");
}

var getName2 = function() {
    console.log("Hello 😇 World");
}
getName2();
