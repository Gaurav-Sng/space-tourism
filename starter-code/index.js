const sc=document.querySelector('.large');
const othercircle=document.querySelector('.outercircle');

const navigator=document.querySelector('.navigator');
document.querySelector('.burger').addEventListener("click",()=>{
    navigator.classList.add('open');
    });
    if(navigator){
        console.log(navigator.classList);
            navigator.querySelector('.close').addEventListener('click',()=>{
        navigator.classList.remove('open');
    })}
    
sc.addEventListener("mouseover",()=>{
    othercircle.style.backgroundColor='rgba(255, 255, 255, 0.282);' 
})
sc.addEventListener("mouseout",()=>{
    othercircle.style.backgroundColor='transparent';
})

document.querySelector('.close').addEventListener('click',()=>{

})