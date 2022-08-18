email = document.querySelector("#email");
btn = document.querySelector("#btn");
error= document.querySelector(".error");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener('click', function onClick(e) {
    if(!(email.value.match(mailformat))){
        error.style.opacity = "1";
     }else{
         error.style.opacity = "0";
     } 
});