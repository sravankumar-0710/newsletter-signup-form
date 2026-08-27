const form =document.querySelector('.signupForm');
const successButton=document.querySelector('.dismissButton');
const emailInput=document.querySelector(".emailInputField");
const errorMessage=document.querySelector(".errorMessage");
const mainSection=document.querySelector('.card');
const successSection = document.querySelector('.successCard');

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const email= emailInput.value.trim();
    
    if(!emailInput.checkValidity()){
        errorMessage.style.display = 'block';
        errorMessage.style.color = 'red';
        emailInput.classList.add("error");
    }
    else{
        errorMessage.style.display='none';
        emailInput.classList.remove("error");
        mainSection.style.display = "none";
        successSection.style.display = "flex";
        document.querySelector('.emailBold').textContent=email;
    }
});

successButton.addEventListener("click",(event)=>{
    mainSection.style.display = "flex";
    successSection.style.display = "none";
});