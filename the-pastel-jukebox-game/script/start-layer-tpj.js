
// ====================================================
// CONFIGURING CANVAS
// ====================================================
const startCanvas = document.querySelector("#start-layer")
const startC = startCanvas.getContext("2d")

const startDpr = window.devicePixelRatio;
const startRect = startCanvas.getBoundingClientRect();

startCanvas.width = startRect.width * startDpr;
startCanvas.height = startRect.height * startDpr;    

startC.scale(startDpr, startDpr);

startCanvas.style.width = `${startRect.width}px`;
startCanvas.style.height = `${startRect.height}px`;
// --------------------------------------------------

const startButton = document.getElementById("start-button"); 
const startMenu = document.getElementById("start-menu")
const guyPreview = document.getElementById("guy-preview")


startButton.addEventListener("click", function(){
    startCanvas.style.visibility = "hidden"
    startMenu.style.visibility = "hidden"
    guyPreview.play()
})

