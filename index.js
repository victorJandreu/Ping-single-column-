

// change the color of the socil media image

const intentar = document.querySelectorAll(".intento")

for(let i = 0; i < intentar.length; i++){
    intentar[i].addEventListener("mouseenter", function(){
        intentar[i].querySelector("i").style.color = "white"

        intentar[i].addEventListener("mouseleave", function(){
            intentar[i].querySelector("i").removeAttribute("style");
        })

    })
}

// create a advert in the email input 
const form = document.getElementById("form")
const parrafo = document.getElementById("mensaje")
const emailInput = document.getElementById("email")

form.addEventListener("submit", function(e){
    parrafo.removeAttribute("style")
    emailInput.removeAttribute("style")
    e.preventDefault()

    if(emailInput.value.length === 0) {
        parrafo.style.display = "block"
        emailInput.style.borderColor = "hsl(354, 100%, 66%)"
    }
   
    emailInput.value = ""

})


