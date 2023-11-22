

let signUp= document.getElementById("signUp")
let signIn= document.getElementById("signin")
let nameInput = document.getElementById("nameInput")
let title = document.getElementById("title")

signIn.onclick = function(){
    nameInput.style.maxHeight="0"
    title.innerHTML="Login"
    signUp.classList.remove("disable")
    signIn.classList.add("disable")
}
signUp.onclick = function(){
    nameInput.style.maxHeight="60px"
    title.innerHTML="Registro"
    signUp.classList.remove("disable")
    signIn.classList.add("disable")
}