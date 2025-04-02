console.log("Hello world");
const input = document.querySelector('.input');
const btn = document.querySelector('.adbtn');
const ul = document.querySelector('.list');
const form = document.querySelector('.todoform');
const del =document.querySelector('.delete');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const li = document.createElement('li');
    const editbtn = document.createElement('button');
    const deletebtn = document.createElement('button');
    li.textContent = input.value;
    editbtn.textContent = 'Edit';
    deletebtn.textContent = 'Delete';
    li.appendChild(editbtn);
    li.appendChild(deletebtn);

    ul.appendChild(li);
    input.value = '';
    

})

    ul.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(e);
        if(e.target.innerHTML.includes('Delete')){
            const li = e.target.parentElement;
            li.remove();
        }
        if(e.target.innerHTML.includes('Edit')){
            const li = e.target.parentElement;
            const res = prompt('enter edited value');
            li.firstChild.textContent = res.trim();
        }
    })
