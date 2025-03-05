

function debounced(cb , delay){
    let interval ;
    return function(){

       console.log(this)

        clearTimeout(interval);
        interval = setTimeout(cb , delay);
    }
}

let i=0;

const betterFunction = debounced(()=>{
        console.log("called: " + (++i) +" times");
}, 1000);