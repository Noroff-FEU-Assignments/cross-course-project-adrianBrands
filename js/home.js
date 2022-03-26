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

const searchIcon = document.querySelector(".search-icon");
const inputSearch = document.querySelector(".input-search1");
const hamburger = document.querySelector("#hamburger-menu"); 
const shopping = document.querySelector(".shopping"); 
const hamburgerLabel = document.querySelector(".hamburger-label");



searchIcon.addEventListener("click", () => {
  inputSearch.innerHTML = `<input class="input-search2" type="text" placeholder="search...">`;
  searchIcon.innerHTML = `<img src="images/close.png">`;
  shopping.style.display="none";
  hamburgerLabel.style.display="none";
  

  searchIcon.addEventListener("click", () => {
    if (searchIcon.innerHTML === `<img src="images/close.png">`) {
      inputSearch.style.display = "none";
      shopping.style.display="unset";
      hamburgerLabel.style.display="unset";
      searchIcon.innerHTML = `<img src="images/icons8-search-24.png">`;
    } else {
      inputSearch.innerHTML = `<input class="input-search2" type="text" placeholder="search...">`;
      searchIcon.innerHTML = `<img src="images/close.png">`;
      inputSearch.style.display = "unset";
      shopping.style.display="none";
      hamburgerLabel.style.display="none";
    }
  });
});



const sale = document.querySelector(".sale")
const endDate = new Date("April 30, 2022 00:00").getTime();

const x = setInterval(function() {

  const todaysDate = new Date().getTime();
  const difference = endDate - todaysDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  sale.innerHTML = `${days} days, and ${hours} hours left of our special sale... 50%`;

}, 1000);





hamburger.addEventListener("click", () => {
  const logo = document.querySelector(".logo"); 
  if (logo.style.display === "none"){
    logo.style.display = "block"; 
  } else {
    logo.style.display = "none";
  }
  
  
  
  
  

});


