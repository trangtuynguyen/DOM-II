// Your code goes here

const title = document.querySelector('.logo-heading');
title.addEventListener('mouseover', (event) =>{
    title.style.color = 'blue';
})
title.addEventListener('mouseleave', (event) =>{
    title.style.color = 'black';
})
const navi = document.querySelectorAll('.nav a');
const pageName = document.querySelector('.intro h2');
const topImg = document.querySelector('.intro img');
console.log(navi);

navi.forEach((nav)=>{
    
    nav.addEventListener('click', (event) =>{
        event.preventDefault();
    } )
})

navi[0].addEventListener('click', (event) =>{
   navi[0].style.color = 'red';
   pageName.textContent = 'Home';
   topImg.style.display = 'none';
} )

navi[1].addEventListener('click', (event) =>{
    navi[1].style.color = 'red';
    pageName.textContent = 'About';
    topImg.style.display = 'none';
 } )

 navi[2].addEventListener('click', (event) =>{
    navi[2].style.color = 'red';
    pageName.textContent = 'Blog';
    topImg.style.display = 'none';
 } )

 navi[3].addEventListener('click', (event) =>{
    navi[3].style.color = 'red';
    pageName.textContent = 'Contact';
    topImg.style.display = 'none';
 } )

const p = document.querySelectorAll('p');

p.forEach((paragraph)=>{
    paragraph.addEventListener("copy", event => {
        alert('your text has been copied');
        paragraph.style.color = 'red';
    })
});


const h2 = document.querySelectorAll('h2');

h2.forEach((header)=>{
    header.addEventListener("dblclick", event => {
        header.style.color = 'green';
    })
});

const mainNav = document.querySelector('.main-navigation');

window.addEventListener('scroll',()=>{
    mainNav.style.background = 'yellow';
    
});

const destBtn = document.querySelector('.destination .btn button');
const dest = document.querySelector('.destination p');;
console.log(dest)

dest.addEventListener('copy', event =>{
    dest.style.color= 'blue';
    dest.preventDefault();
})





