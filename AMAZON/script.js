const imgs=document.querySelectorAll('.header-slider ul img');
const priv_btn=document.querySelector('.control-priv');
const nxt_btn=document.querySelector('.control-next');

let n=0;

function changeSlide(){
    for(let i=0;i< imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
    }
changeSlide();

priv_btn.addEventListener('click',(e)=>{
if(n>0){
    n--;
}else{
    n=imgs.length-1;
}
changeSlide();
})

nxt_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
    })

    const product=document.querySelectorAll('.prod');
    for(const item of product){
        item.addEventListener('wheel',(evt)=>{
            evt.preventDefault();
            item.scrollLeft+=evt.deltaY;
        });

    }
    





