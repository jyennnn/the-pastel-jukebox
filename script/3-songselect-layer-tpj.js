
// ---------------------------+
// 2nd Page - Song Menu       |
// ---------------------------+

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


// ====================================================
// SONG MENU
// ====================================================

// Song Player 
const songMenu = document.getElementById("song-menu")
const songPlayer = document.getElementById("song-player")

// Jyen - Guy 
const playGuyButton = document.getElementById("play-guy-button")
const playGuyJyen = document.getElementById("play-guy-jyen")

// Other Half - Rangga
const playOtherHalfRangga = document.getElementById("play-otherhalf-rangga")
const otherHalfPreview = document.getElementById("other-half-preview")

otherHalfPreview.loop = true

// Make Her Mine - Jason Yu
const playMakeHerMineJason = document.getElementById("play-makehermine-jason")
const makeHerMinePreview = document.getElementById("make-her-mine-preview")

makeHerMinePreview.loop = true

const jyenObj = {
    div: playGuyJyen, 
    audio: guyPreview,
    title: "guy",
    artist: "JYEN"
}

const ranggaObj = {
    div: playOtherHalfRangga, 
    audio: otherHalfPreview,
    title: "Other Half",
    artist: "Rangga Jones"
}

const jasonObj = {
    div: playMakeHerMineJason, 
    audio: makeHerMinePreview,
    title: "Make Her Mine",
    artist: "Jason Yu"
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
