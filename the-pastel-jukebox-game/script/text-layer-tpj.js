
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

