const searchIcon = document.querySelector(".search-icon");
const inputSearch = document.querySelector(".input-search1");
const hamburger = document.querySelector("#hamburger-menu"); 
const shopping = document.querySelector(".shopping"); 
const hamburgerNav = document.querySelector(".hamburger-nav");
const hamburgerName = document.querySelector('label[name="hamburger-name"]');

searchIcon.addEventListener("click", () => {
  inputSearch.innerHTML = `<input class="input-search2" type="text" placeholder="search...">`;
  searchIcon.innerHTML = `<img src="images/close.png">`;
  shopping.style.display="none";
  hamburgerNav.style.display="none";

  searchIcon.addEventListener("click", () => {
    if (searchIcon.innerHTML === `<img src="images/close.png">`) {
      inputSearch.style.display = "none";
      shopping.style.display="unset";
      hamburgerNav.style.display="unset";
      searchIcon.innerHTML = `<img src="images/icons8-search-24.png">`;
      
    } 
    
    else {
      inputSearch.innerHTML = `<input class="input-search2" type="text" placeholder="search...">`;
      searchIcon.innerHTML = `<img src="images/close.png">`;
      inputSearch.style.display = "unset";
      shopping.style.display="none";
      hamburgerNav.style.display="none";
      
    }
  });
});



hamburger.addEventListener("click", () => {
    hamburgerName.innerHTML = `<img src="images/close.png">`;
    
    const logo = document.querySelector(".logo"); 
    if (logo.style.display === "none"){
      logo.style.display = "block";
      hamburgerName.innerHTML = `<i class="fas fa-bars"></i>`;
    } else {
      logo.style.display = "none";
      
      
    }
  });
  