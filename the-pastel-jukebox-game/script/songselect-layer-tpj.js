
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



// INFO on CLICK 
infoButton.addEventListener("click", function() {
    infoMenu.style.visibility = "visible"
});

infoCancel.addEventListener("click", function() {
    infoMenu.style.visibility = "hidden"
});



// PLAY-GUY-BUTTON
const playGuyButton = document.getElementById("play-guy-button")
const songMenu = document.getElementById("song-menu")
const songPlayer = document.getElementById("song-player")

// playGuyButton.addEventListener("click", function(){
//     songCanvas.style.visibility = "hidden"
//     songMenu.style.visibility = "hidden"
// })

// ====================================================
// SONG LIST
// ====================================================

const playGuyJyen = document.getElementById("play-guy-jyen")
const playOtherHalfRangga = document.getElementById("play-otherhalf-rangga")
const playMakeHerMineJason = document.getElementById("play-makehermine-jason")
const otherHalfPreview = document.getElementById("other-half-preview")
const makeHerMinePreview = document.getElementById("make-her-mine-preview")

const jyenObj = {
    div: playGuyJyen, 
    audio: guyPreview
}

const ranggaObj = {
    div: playOtherHalfRangga, 
    audio: otherHalfPreview
}

const jasonObj = {
    div: playMakeHerMineJason, 
    audio: makeHerMinePreview
}

let listOfSongs = []
listOfSongs.push(jyenObj)
listOfSongs.push(ranggaObj)
listOfSongs.push(jasonObj)

let currentIndex = 0

rightArrow.addEventListener("click", function() {
    if (currentIndex < listOfSongs.length - 1){
        currentIndex += 1 
        listOfSongs[currentIndex].div.style.visibility = "visible"
        listOfSongs[currentIndex - 1].div.style.visibility = "hidden"
        listOfSongs[currentIndex].audio.play()
        listOfSongs[currentIndex - 1].audio.pause()
    }
    else if (currentIndex === listOfSongs.length - 1) {
        currentIndex = 0
        listOfSongs[currentIndex].div.style.visibility = "visible"
        listOfSongs[listOfSongs.length - 1].div.style.visibility = "hidden"
        listOfSongs[currentIndex].audio.play()
        listOfSongs[listOfSongs.length - 1].audio.pause()
    }
});


leftArrow.addEventListener("click", function() {
    if (currentIndex === 0) {
        currentIndex = listOfSongs.length - 1
        listOfSongs[currentIndex].div.style.visibility = "visible"
        listOfSongs[0].div.style.visibility = "hidden"
        listOfSongs[currentIndex].audio.play()
        listOfSongs[0].audio.pause()
    }

    else if (currentIndex > 0){
        currentIndex -= 1
        listOfSongs[currentIndex].div.style.visibility = "visible"
        listOfSongs[currentIndex + 1].div.style.visibility = "hidden"
        listOfSongs[currentIndex].audio.play()
        listOfSongs[currentIndex + 1].audio.pause()
    }
});
