

var a =10;
let b =20;

function c (){
    var f =1000;
    let e = 30;
    // d();

    function d(){
        // console.log(e);
        console.log(f);
    }
    e = 500;
    return d;
}

const res = c();
res();