const tabs = [
    {
        id:1,
        title: "Tab1",
        content : "This is tab1 content"
    },
    {
        id:2,
        title: "Tab2",
        content : "This is tab2 content"
    },
    {
        id:3,
        title: "Tab3",
        content : "This is tab3 content"
    },
    {
        id:4,
        title: "Tab3",
        content : "This is tab3 content"
    },
    {
        id:5,
        title: "Tab3",
        content : "This is tab3 content"
    },
    {
        id:6,
        title: "Tab3",
        content : "This is tab3 content"
    }
]


const tablinks = document.querySelector('.tablinks');
const tabcontents = document.querySelector('.tabcontent');
let activetab ;

document.addEventListener('DOMContentLoaded',()=>{
    activetab = tabs[0].id;
    tabs.forEach((tab)=>{
        const button = document.createElement('button');
        button.innerHTML = tab.title;
        button.setAttribute('id',tab.id);
        tablinks.appendChild(button);

        const content = document.createElement('div');
        content.classList.add('tabcontentlist');
        content.innerHTML = tab.content;
        content.setAttribute('id',tab.id);
        tabcontents.appendChild(content);

        if(activetab == tab.id){
            button.classList.add('active');
            content.classList.add('active');
        }
        else{
            button.classList.remove('active');
            content.classList.remove('active');
            content.style.display = 'none';

        }
    });

    


})


tablinks.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target);
    const id = e.target.id;
    activetab = id;

   const list =  document.querySelectorAll('.tabcontentlist');
   list.forEach((ele)=>{
       ele.style.display = 'none';

       if(ele.id == activetab){
           ele.style.display = 'block';
           ele.classList.add('active');
       }
       else{
          ele.classList.remove('active');
       }
   })

   tablinks.childNodes.forEach((ele)=>{
      if(ele.id == id){
          ele.classList.add('active');
      }
      else{
          ele.classList.remove('active');
      }
   })

})