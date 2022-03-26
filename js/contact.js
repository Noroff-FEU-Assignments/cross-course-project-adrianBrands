const isEmailValid = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;

};





const form = document.querySelector(".contact-form");
const nameInput = document.querySelector('input[name="name"]');
const thankYou = document.querySelector(".thank-you");
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="text-erea"]');


const inputs = [nameInput,emailInput,messageInput];

let formIsValid = false;
let validationInProgress = false;

const resetInput = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");

};

const invalidateElm = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");

};


const validateInputs = () => {
    if (!validationInProgress) return;
    
    formIsValid = true;
    resetInput(nameInput);
    resetInput(emailInput);
    resetInput(messageInput);

   
    if (!nameInput.value){
        formIsValid = false;
        invalidateElm(nameInput);
        
    }

    if (!isEmailValid(emailInput.value)){
        formIsValid = false;
        invalidateElm(emailInput);
        console.log("hello");
        
    }

    if (!messageInput.value){
        formIsValid = false;
        invalidateElm(messageInput);
        
        
    }

};


form.addEventListener('submit', (event) => {
    event.preventDefault();
    validationInProgress = true;
    validateInputs();
    if (formIsValid){
        form.remove();
        thankYou.classList.remove("hidden");
    }
});

inputs.forEach(input => {
    input.addEventListener("input", () => {
        validateInputs();
    
    });

});

