const headerEl=document.querySelector('.header');
function backgroundCuriosMusic(){
    const titleEl=document.querySelector('title');
    if(titleEl.textContent==='Home')
        headerEl.style.cssText = "background: url('./img/bachground.png'); padding-bottom: 7.88rem";
    headerEl
}
addEventListener('load',backgroundCuriosMusic);
