
// ====================================================
// CONFIGURING CANVAS
// ====================================================
const textCanvas = document.querySelector("#text-layer")
const textC = textCanvas.getContext("2d")

const textdpr = window.devicePixelRatio;
const textRect = textCanvas.getBoundingClientRect();

textCanvas.width = textRect.width * textdpr;
textCanvas.height = textRect.height * textdpr;    

textC.scale(textdpr, textdpr);

textCanvas.style.width = `${textRect.width}px`;
textCanvas.style.height = `${textRect.height}px`;
// --------------------------------------------------



// ====================================================
// SCOREBOARD 
// ====================================================

// const scoreboard = "S C O R E"; 
// textC.font = "italic bold 20px Arial"
// textC.fillStyle = "white"
// textC.fillText(scoreboard, 1300, 80, 200)

// let points = 0; 
// textC.font = "italic bold 20px Arial"
// textC.fillStyle = "white"
// textC.fillText(points, 1300, 120, 200)

const scoreboard = document.getElementById("scoreboard");
const scorePoints = document.getElementById("score-points");
const missPoints = document.getElementById("miss-points");
const comboPoints = document.getElementById("combo-points");
const sPerfectPoints = document.getElementById("s-perfect-points");
const perfectPoints = document.getElementById("perfect-points");
const goodPoints = document.getElementById("good-points");

let scoreCount = 0;
let missCount = 0; 
let comboCount = 0;
let sPerfectCount = 0; 
let perfectCount = 0; 
let goodCount = 0; 
