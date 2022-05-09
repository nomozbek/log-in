//Get elements from HTML

let elForm = document.querySelector(".log-in");
let elPasswordInput = document.querySelector(".password-input");

//Create an object of passwords
var passwords = [0077, 7777, 5555, 9999];


elForm.addEventListener('submit', function(evt){
  evt.preventDefault();

  let newPassword = Number(elPasswordInput.value);

 if(passwords.includes(newPassword)){
   alert("Parol to'g'ri!");
 }

 else{
   alert("Parolni qaytadan kiriting");
 }
})