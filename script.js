const theme = document.querySelectorAll('.theme');
const body = document.body;

theme.forEach((el)=>{
    el.addEventListener('click',()=>{

        theme.forEach(el => el.classList.toggle('active'))
        
        body.classList.toggle('dark');

    })
})


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
  
    // And if we need scrollbar
    
  });