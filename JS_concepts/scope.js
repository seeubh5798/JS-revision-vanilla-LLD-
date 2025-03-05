var a =10;

function b(){
    let c = 100;
    var cc =100;
    {
        let ccc = "ccc";
        console.log(c);
    }
    d();
   
    function d(){
        var f="ff c";
        console.log(c);
        console.log(a);
        console.log(f);
        console.log(a);
        console.log(aa);
        console.log(cc);
    }
    console.log(aa);  // error becuase f is not defined in this scope
}
let aa = 20;
b();