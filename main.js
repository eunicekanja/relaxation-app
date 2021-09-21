'use strict'
const container=document.querySelector('.container');
const text=document.querySelector('#text');

const totalTime=7500;
const breathe=(totalTime/5)*2
const hold=(totalTime/5)

breatheAnimate()

function breatheAnimate(){
    text.innerHTML='Breathe In';
    container.className='container grow'

    setTimeout(() => {
        text.innerText='Hold';
        setTimeout(() => {
            text.innerText='Breathe Out';
            container.className='container shrink'
        }, hold);
    }, breathe);
}

setInterval(breatheAnimate,totalTime);