// Your code goes here


let navItem = document.querySelectorAll('.nav-link');
console.log(navItem);

for(let i=0;i<navItem.length; i++){
    navItem[i].addEventListener('click', event =>{
        if(event.target.style.color != 'red'){
            event.target.style.color = 'red';
        }
        else{
            event.target.style.color = 'black';
        }
    })
}
let p = document.querySelectorAll('p');

p.forEach((paragraph)=>{
    paragraph.addEventListener('copy', event =>{
        alert('Copying is plagiarism!');
    }) 
})

window.addEventListener('scroll', event =>{
    p.forEach((paragraph)=>{
        paragraph.style.color = 'green';
    })
})

let btn = document.querySelectorAll('.btn');

btn.forEach(button =>{
    button.addEventListener('mouseover', event =>{
            button.textContent = "Hey There";
            console.log(button);
    })
})

btn.forEach(button =>{
    button.addEventListener('mouseleave', event =>{
            button.textContent = "Bye";
            console.log(button);
    })
})
btn.forEach(button =>{
    button.addEventListener('mouseup', event =>{
            button.style.background = "yellow";
            console.log(button);
    })
})

const h2 = document.querySelectorAll('h2');

h2.forEach((header)=>{
    header.addEventListener("contextmenu", event => {
        header.style.color = 'blue';
    })
});

window.addEventListener('resize', event=>{
    alert('your screen has been resized');
})

window.addEventListener('beforeprint', event=>{
    alert('proceed to printing?');
})

window.addEventListener('afterprint', event=>{
    alert('printed successfully');
})