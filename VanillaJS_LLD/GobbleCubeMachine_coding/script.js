const arraysize = document.getElementById("arraysize");
const stepsize = document.getElementById("stepsize");
const button = document.getElementById("button");
const parent = document.getElementById("parent");

let sizeofArray = 0;
let sizeofstep = 0;


arraysize.addEventListener("change", function (e) {
    sizeofArray = Number(e.target.value);
});


stepsize.addEventListener("change", function (e) {
    sizeofstep = Number(e.target.value);
});


button.addEventListener("click", function () {
    parent.innerHTML = ""; 

    for (let i = 0; i < sizeofArray; i++) {
        let box = document.createElement("div");
        box.className = "box";
        box.style.backgroundColor = "rgba(255,255,255,0.5)";
        parent.appendChild(box);
    }

    startGame(); 
});

function startGame() {
    let curridx = 0;
    let size = sizeofArray;
    let boxes = Array.from(parent.children); 

    while (size > 1) {
        while (boxes[curridx].classList.contains("color")) {
            curridx = (curridx + 1) % sizeofArray;
        }

        boxes[curridx].classList.add("color");
        boxes[curridx].style.backgroundColor = "red";

        size--; 
        curridx = (curridx + sizeofstep) % sizeofArray;
          
    }

    boxes[curridx].classList.add("winner");
    boxes[curridx].style.backgroundColor = "green";
}
