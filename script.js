'use strict'
/* multi language and adding text content functionality */

let currentLang = "en";
const langBtn = document.querySelector('header li.lang');
const langOption = document.querySelectorAll('header li.lang .option');

const textPromise = fetch('site-text.json').then( text => text.json() );

function checkCurrentLanguage(){
    if(navigator.language.indexOf("ar") !== -1){
        addText("ar")
    }else{
        addText('en')
    }
}
async function addText(lang){
    const contactBtn = document.querySelectorAll('.contact-btn a');
    const nav = document.querySelectorAll('header li span');
    const inrtoWelcom = document.querySelector('.introduction h4');
    const introName =  document.querySelector('.introduction .name');
    const introArticle =  document.querySelector('.introduction .text');
    const jobTitle = document.querySelector('.job-intro .title');
    const jobServices = document.querySelectorAll('.job-intro li');
    const learningTitle = document.querySelector('.learning-path .title');
    const learningTools = document.querySelectorAll('.learning-path .path .tool');
    const projectsTitles = document.querySelectorAll('.projects h3');
    const projectsDetails = document.querySelectorAll('.projects p');

    const text = await textPromise;

    contactBtn.forEach( (el) => el.innerText = text[lang].btns.contact);

    nav.forEach( (el, i) => el.innerText = text[lang].nav[i]);

    inrtoWelcom.innerText = text[lang].selfIntro.wellcome;
    introName.innerText = text[lang].selfIntro.name;
    introArticle.innerText = text[lang].selfIntro.article;

    jobTitle.innerText = text[lang].jobIntro.title;
    jobServices.forEach( (el, i) => el.innerText = text[lang].jobIntro.services[i]);

    learningTitle.innerText = text[lang].learnPath.title;
    learningTools.forEach( (el, i) => el.innerText = text[lang].learnPath.tools[i]);

    projectsTitles.forEach( (el, i) => el.innerText = text[lang].projects[i].title);
    projectsDetails.forEach( (el, i) => el.innerText = text[lang].projects[i].details);

    /* toggle body lang class */
    lang == 'ar' ? body.classList.add('arabic') : body.classList.remove('arabic'); 

}

checkCurrentLanguage();

langOption.forEach(el => {
    el.addEventListener('click',(event)=>{
        event.stopPropagation()
        langBtn.classList.remove('active');
        currentLang = el.dataset.value;
        console.log(el.dataset.value)
        addText(currentLang)

    })
})

/* theme functionality */

const theme = document.querySelectorAll('.theme');
const body = document.body;

theme.forEach((el)=>{
    el.addEventListener('click',()=>{

        theme.forEach(el => el.classList.toggle('active'))
        
        body.classList.toggle('dark');

    })
})

///////////////////////////////////////////


/* Nav functionality */
const nav = document.querySelectorAll('header li');

const boxes = document.querySelectorAll('.box');

nav.forEach(el => {

    el.addEventListener('click',(event)=>{

        if(!el.classList.contains('lang')){
            switchTo(el.dataset.value);
        }else{
            switchTo('all');
        }

        nav.forEach(el =>{
            if( !(el.classList.contains('lang') && event.target.closest('li').classList.contains('lang'))){
                el.classList.remove('active');
            }
        } );

        
        el.classList.toggle('active');
        
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
//////////////////////////////////////////////


/* slider functionality */

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

function strict(){
    return this;
}