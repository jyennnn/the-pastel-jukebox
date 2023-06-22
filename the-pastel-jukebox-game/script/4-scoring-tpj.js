
// ---------------------------+
// Score System               |
// ---------------------------+

// ==================================================
// SCOREBOARD 
// ==================================================

// score 
const scoreboard = document.getElementById("scoreboard");
const scorePoints = document.getElementById("score-points");
let scoreCount = 0;

// miss 
const missPoints = document.getElementById("miss-points");
let missCount = 0; 

// combo
const comboPoints = document.getElementById("combo-points");
const combo = document.getElementById("combo");
let comboCount = 0;

// perfect
const perfectPoints = document.getElementById("perfect-points");
let perfectCount = 0; 

// great
const greatPoints = document.getElementById("great-points");
let greatCount = 0; 

// poor
const poorPoints = document.getElementById("poor-points");
let poorCount = 0; 

// hits animation
const hits = document.getElementById("hits");


// ====================================================
// SCORE SYSTEM FUNCTIONS
// ==================================================== 

// COMBO ---------------------------------------------

function comboAdd (){
    comboCount += 1
    comboPoints.innerHTML = comboCount
    comboPoints.classList.add("combo-class")
    combo.classList.add("combo-class")
    setTimeout(() => {
    comboPoints.classList.remove("combo-class")
    combo.classList.remove("combo-class")}, 300)
}

function comboRestart (){
    comboCount = 0
    comboPoints.innerHTML = comboCount
    comboPoints.classList.add("combo-class")
    combo.classList.add("combo-class")
    setTimeout(() => {
    comboPoints.classList.remove("combo-class")
    combo.classList.remove("combo-class")}, 300)
}



// HITS ---------------------------------------------

function hitAnimation(){
    hits.classList.remove("hits-class")
    hits.style.visibility = "hidden"
    hits.style.visibility = "visible"
    hits.classList.add("hits-class")
    setTimeout(() => {
        hits.classList.remove("hits-class")
        hits.style.visibility = "hidden"}, 499)
}



// PERFECT -----------------------------------------------

function perfectScore(){
    scoreCount += 1500
    scorePoints.innerHTML = scoreCount

    //combo 
    comboAdd()

    //perfect counter
    perfectCount += 1
    perfectPoints.innerHTML = perfectCount

    // hits style
    hits.innerHTML = "PERFECT"
    hits.style.color = "#6C53C2"
    hitAnimation()
}



// GREAT -----------------------------------------------

function greatScore(){
    scoreCount += 1000
    scorePoints.innerHTML = scoreCount
    
    //combo
    comboAdd()

    greatCount += 1
    greatPoints.innerHTML = greatCount

    //hits 
    hits.innerHTML = "GREAT"
    hits.style.color = "#B6DBE8"
    hitAnimation()
}



// POOR -----------------------------------------------

function poorScore(){
    scoreCount += 500
    scorePoints.innerHTML = scoreCount

    //combo
    comboAdd()

    poorCount += 1
    poorPoints.innerHTML = poorCount

    // hits 
    hits.innerHTML = "POOR"
    hits.style.color = "#FFD5B7"
    hitAnimation()
}



// MISS -----------------------------------------------

function missScore(){
    scoreCount -= 500
    scorePoints.innerHTML = scoreCount
    missCount += 1 
    missPoints.innerHTML = missCount
    
    //combo 
    comboRestart()

    // hits 
    hits.innerHTML = "MISS"
    hits.style.color = "#D169C4"
    hitAnimation()
}

