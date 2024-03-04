const barra = document.getElementById('barra');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (barra){
    barra.addEventListener('click',() =>{
        nav.classList.add('active')
    })
}


if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active')
    })
}