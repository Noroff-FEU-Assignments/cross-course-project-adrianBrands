let addToCart = document.querySelector(".cart");
const displayshoppingIcon = document.querySelector(".shopping1");
const hideIcon = document.querySelector(".shopping");
const closePopUp = document.querySelector(".close-popup");
const popUp = document.querySelector(".content-pop");
const imageShoppingIcon = document.createElement("img");
imageShoppingIcon.src = "images/iconshopping1.png";

addToCart.addEventListener("click", () => {
  console.log("has been clicked");
  hideIcon.style.display = "none";
  document.querySelector(".shopping1").appendChild(imageShoppingIcon);
  popUp.showModal();
});

closePopUp.addEventListener("click", () => {
  popUp.close();
});

addToCart.onclick = function () {
    hideIcon.style.display = "none";
    document.querySelector('.shopping1').appendChild(imageShoppingIcon);
}

 




function onload () {
    
    let shoppinCartNumber = localStorage.getItem("clicked");
    if (shoppinCartNumber) {
        document.querySelector('.shopping1').appendChild(imageShoppingIcon);
        hideIcon.style.display = "none";
    }
    console.log(shoppinCartNumber);

    shoppinCartNumber = parseInt(shoppinCartNumber);
    console.log(typeof shoppinCartNumber);
    addToCart = localStorage.setItem("clicked", 1);

}

onload ()




