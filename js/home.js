const bodyHome = document.getElementById("home");
let i = 0;
let images = [];

images[0] = "url('images/compass1.jpg')";
images[1] = "url('images/sunset2.jpg')";
images[2] = "url('images/backpacker.jpg')";
images[3] = "url('images/dark.jpg')";

function changeBackground() {
  bodyHome.style.backgroundImage = images[i];
  bodyHome.style.backgroundPosition = "bottom";

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeBackground()", 6000);
}

window.onload = changeBackground;


const sale = document.querySelector(".sale")
const endDate = new Date("May 30, 2022 00:00").getTime();

const x = setInterval(function() {

  const todaysDate = new Date().getTime();
  const difference = endDate - todaysDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  sale.innerHTML = `${days} days, and ${hours} hours left of our special sale... 50%`;

}, 1000);








