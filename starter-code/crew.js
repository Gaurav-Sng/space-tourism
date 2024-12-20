const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const dot4 = document.querySelector('.dot4');
const post = document.querySelector('.post');
const Name = document.querySelector('.name');
const bio = document.querySelector('.bio');
const img = document.querySelector('.img').querySelector('img');

const navigator = document.querySelector('.navigator');
document.querySelector('.burger').addEventListener("click", () => {
    navigator.classList.add('open');
});
if (navigator) {
    navigator.querySelector(".close")?.addEventListener("click", () => {
        navigator.classList.remove('open');
    })
}
dot1.addEventListener("click", () => {
    post.textContent = "commander";
    Name.textContent = "douglas hurley";
    bio.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    img.src = './assets/crew/image-douglas-hurley.png';
})

dot2.addEventListener("click", () => {
    post.textContent = "mission specialist";
    Name.textContent = "mark shuttleworth";
    bio.textContent = " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    img.src = './assets/crew/image-mark-shuttleworth.png'
})

dot3.addEventListener("click", () => {
    post.textContent = "Pilot";
    Name.textContent = "victor glover";
    bio.textContent = " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    img.src = './assets/crew/image-victor-glover.png';
})

dot4.addEventListener("click", () => {
    post.textContent = "flight engineer";
    Name.textContent = " Anousheh Ansari";
    bio.textContent = " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    img.src = './assets/crew/image-anousheh-ansari.png';

})



