const moon = document.querySelector(".moon");
const mars = document.querySelector(".mars");
const europa = document.querySelector(".europa");
const titan = document.querySelector(".titan");
const info = document.querySelector(".info");
const about = document.querySelector(".about");
const distance = document.querySelector(".distance");
const estimated = document.querySelector(".estimatedtime");
const navigator = document.querySelector(".navigator");
const destination = document
  .querySelector(".destinations")
  .querySelector("img");

document.querySelector(".burger").addEventListener("click", () => {
  navigator.classList.add("open");
});
if (navigator) {
  navigator.querySelector(".close").addEventListener("click", () => {
    navigator.classList.remove("open");
  });
}
moon.addEventListener("click", () => {
  info.firstElementChild.textContent = "moon";
  about.textContent =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  distance.lastElementChild.textContent = "384,400 km";
  estimated.lastElementChild.textContent = "3 days";
  destination.src = "./assets/destination/image-moon.png";
});

europa.addEventListener("click", () => {
  info.firstElementChild.textContent = "europa";
  about.textContent =
    " The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  distance.lastElementChild.textContent = "628 mil. km";
  estimated.lastElementChild.textContent = "3 years";
  destination.src = "./assets/destination/image-europa.png";
});
titan.addEventListener("click", () => {
  info.firstElementChild.textContent = "titan";
  about.textContent =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  distance.lastElementChild.textContent = "1.6 bil. km";
  estimated.lastElementChild.textContent = "7 years";
  destination.src = "./assets/destination/image-titan.png";
});
mars.addEventListener("click", () => {
  info.firstElementChild.textContent = "mars";
  about.textContent =
    " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  distance.lastElementChild.textContent = "225 mil. km";
  estimated.lastElementChild.textContent = "9 months";
  destination.src = "./assets/destination/image-mars.png";
});
