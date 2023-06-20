
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


// ====================================================
// ARROWS
// ====================================================
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


// ====================================================
// INFO MENU 
// ====================================================

const infoButton = document.getElementById("info-button")
const infoButton2 = document.getElementById("info-button-2")
const infoCancel = document.getElementById("info-cancel")
const infoMenu = document.getElementById("info-menu")

// INFO on HOVER
infoButton.addEventListener("mouseover", function() {
    infoButton.src = "images/song-select/information-hover.png"
});

infoButton.addEventListener("mouseout", function() {
    infoButton.src = "images/song-select/information.png"
});

infoCancel.addEventListener("mouseover", function() {
    infoCancel.src = "images/song-select/info-cancel-hover.png"
});

infoCancel.addEventListener("mouseout", function() {
    infoCancel.src = "images/song-select/info-cancel.png"
});

infoButton2.addEventListener("mouseover", function() {
    infoButton2.src = "images/song-select/information-hover.png"
});

infoButton2.addEventListener("mouseout", function() {
    infoButton2.src = "images/song-select/information.png"
});


// INFO on CLICK 
infoButton.addEventListener("click", function() {
    infoMenu.style.visibility = "visible"
});

infoCancel.addEventListener("click", function() {
    infoMenu.style.visibility = "hidden"
});

infoButton2.addEventListener("click", function() {
    infoMenu.style.visibility = "visible"
});


// PLAY-GUY-BUTTON
const playGuyButton = document.getElementById("play-guy-button")
const songMenu = document.getElementById("song-menu")

// playGuyButton.addEventListener("click", function(){
//     songCanvas.style.visibility = "hidden"
//     songMenu.style.visibility = "hidden"
// })