const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const moviesselect = document.getElementById('movie');
const button = document.querySelector('.button');
let ticketprice = +moviesselect.value;

console.log(ticketprice);

populateUI();
function updateSelectedCount(){
    const selectedseat = document.querySelectorAll('.row .seat.selected');
    console.log(selectedseat);
    const selectedseats = selectedseat.length;
    count.innerHTML = selectedseats;
    total.innerHTML = selectedseats * ticketprice ;
    const seatIndex = [...selectedseat].map((seat)=>  [...seats].indexOf(seat));
    console.log(seatIndex);
    localStorage.setItem('selected', JSON.stringify(seatIndex));

}

function populateUI(){
    const selectedseats = JSON.parse(localStorage.getItem('selected'));
    const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedseats != null){
        seats.forEach((seat, index) => {
            if([...selectedseats].includes(index)){
                seat.classList.add('selected');
            }
        });

        ticketprice = selectedMoviePrice;
        moviesselect.selectedIndex = selectedMovieIndex;
        total.innerHTML = ticketprice;
    }
}
moviesselect.addEventListener('change', function(e){
    ticketprice = +e.target.value;
    const selectedmovieindex = e.target.selectedIndex;
    localStorage.setItem('selectedMoviePrice', e.target.value);
    localStorage.setItem('selectedMovieIndex', selectedmovieindex);
    updateSelectedCount();
})


document.addEventListener('DOMContentLoaded', populateUI);
container.addEventListener('click', function(e){
   
    if(e.target.classList.contains('seat') &&!e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

button.addEventListener('click', function(){
    const selectedseats = document.querySelectorAll('.row .seat.selected');
    selectedseats.forEach((seat)=>{
        seat.classList.add('occupied');
        seat.classList.remove('selected');
    })
    localStorage.setItem('selectedMoviePrice', moviesselect.value);
    localStorage.setItem('selectedMovieIndex', moviesselect.selectedIndex);
   


})




// How can you implement a retry mechanism for fetching data?

function retryPromise(fn, retries = 3, delay = 1000) {
    // write code here
    console.log("inside outer function");
    return new Promise((resolve, reject)=>{

        const retry = (n)=>{
            console.log("inside retry function: " + n);
            fn().then((data)=>resolve(data)).catch((error)=>{
                if(n<1){
                     reject(error);
                    
                }
                else{
                    setTimeout(() => {
                        console.log("retrying " + n + " times");
                        retry(n-1);
                    }, delay);
                }
                
            });

        }

        retry(retries);
    })
}

// mock fetch data
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate a request that might fail
    const success = Math.random() * 0.5 > 0; // 50% chance of success
    // const success = false;ß
    console.log(success, "success")
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data");
    }
  });
};

retryPromise(fetchData, 3, 1000)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


const outerPromise = new Promise((resolve, reject) => {
    const innerPromise = new Promise((res, rej) => {
      setTimeout(() => rej("Inner error ❌"), 1000);
    });
  
    resolve(innerPromise); // resolving outer with inner promise
  });
  
  outerPromise
    .then((result) => console.log("Success:", result))
    .catch((error) => console.error("Caught:", error));
  