
// ---------------------------+
// 1st Page - Start Menu      |
// ---------------------------+

const startButton = document.getElementById("start-button"); 
const startMenu = document.getElementById("start-menu")
const guyPreview = document.getElementById("guy-preview")

guyPreview.loop = true

startButton.addEventListener("click", function(){
    startMenu.style.visibility = "hidden"
    guyPreview.play()
})


