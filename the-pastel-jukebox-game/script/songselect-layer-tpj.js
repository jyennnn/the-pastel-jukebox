
// ====================================================
// CONFIGURING CANVAS
// ====================================================
const songCanvas = document.querySelector("#songselect-layer")
const songC = songCanvas.getContext("2d")

const songDpr = window.devicePixelRatio;
const songRect = songCanvas.getBoundingClientRect();

songCanvas.width = songRect.width * songDpr;
songCanvas.height = songRect.height * songDpr;    

songC.scale(songDpr, songDpr);

songCanvas.style.width = `${songRect.width}px`;
songCanvas.style.height = `${songRect.height}px`;
// --------------------------------------------------

// ARROWS 
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")

// ARROW HOVERS 
leftArrow.addEventListener("mouseover", function() {
    leftArrow.src = "images/song-select/arrow-hover.png"
});

leftArrow.addEventListener("mouseout", function() {
    leftArrow.src = "images/song-select/arrow.png"
});

rightArrow.addEventListener("mouseover", function() {
    rightArrow.src = "images/song-select/arrow-hover.png"
});

rightArrow.addEventListener("mouseout", function() {
    rightArrow.src = "images/song-select/arrow.png"
});

// PLAY-GUY-BUTTON
