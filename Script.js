
let button = document.querySelector(".Button")


function ButtonHover(){

    document.querySelector(".Button").innerText = "🤪"

}

function ButtonHoverLeave(){

    document.querySelector(".Button").innerText = "😎"

}

button.addEventListener('mouseenter' , ButtonHover)

button.addEventListener('mouseleave' , ButtonHoverLeave)





