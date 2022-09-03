const theme = document.querySelectorAll('.theme');
const body = document.body;

theme.forEach((el)=>{
    el.addEventListener('click',()=>{

        theme.forEach(el => el.classList.toggle('active'))
        
        body.classList.toggle('dark');

    })
})

///////////////////////////////////

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      
  });
/////////////////////////////////////////////

const nav = document.querySelectorAll('header li');

const boxes = document.querySelectorAll('.box');

nav.forEach(el => {
    el.addEventListener('click',()=>{

        nav.forEach(el => el.classList.remove('active'));

        el.classList.add('active');
        switchTo(el.innerText.toLowerCase());

    })
})  

boxes.forEach(el => {
    el.style.order = el.dataset.order;
})

function switchTo(selector){

    boxes.forEach(el => {
        if(el.classList.contains(selector)){
            el.classList.remove('half-opacity');
            el.classList.add('full-opacity');
        }
        
        else if(selector === 'all'){
            el.classList.remove('full-opacity');
            el.classList.remove('half-opacity');
        }
        else if(selector === 'language'){
            el.classList.remove('full-opacity');
            el.classList.remove('half-opacity');
        }

        else{
            el.classList.remove('full-opacity');
            el.classList.add('half-opacity');
        }
    })

}