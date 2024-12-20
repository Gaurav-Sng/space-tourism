const info=document.querySelector('.info');
const Name=document.querySelector('.name');
const box=document.querySelector('.box');
const img=box.lastElementChild;
const c1=document.querySelector('.c1');
const c2=document.querySelector('.c2');
const c3=document.querySelector('.c3');

const navigator=document.querySelector('.navigator');
document.querySelector('.burger').addEventListener("click",()=>{
    navigator.classList.add('open');
    });
    if(navigator){
        console.log(navigator.classList);
            navigator.querySelector('.close').addEventListener('click',()=>{
        navigator.classList.remove('open');
    })}
    
c1.addEventListener("click",()=>{
    img.src='../starter-code/assets/technology/image-launch-vehicle-portrait.jpg';
    Name.textContent='launch vehicle';
    info.textContent="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a  payload from Earth's surface to space, usually to Earth orbit or beyond. Our  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
})
c2.addEventListener("click",()=>{
    img.src='../starter-code/assets/technology/image-spaceport-portrait.jpg';
    Name.textContent='spaceport';
    info.textContent=
    " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
})
c3.addEventListener("click",()=>{
    img.src='../starter-code/assets/technology/image-space-capsule-portrait.jpg'
    Name.textContent='space capsule';
    info.textContent="A space capsule is a often crewed spacecraft that uses a blunt body reentry capsule to reenter the earth's atmosphere without wings. Our capsule is where you will spend your time during the flight. It includes a space gym, cinema andother activities to keep you entertained. " 
})