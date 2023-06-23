
// ====================================================
// CONFIGURING CANVAS
// ====================================================
const bgCanvas = document.querySelector("#background-layer")
const bgC = bgCanvas.getContext("2d")

const dpr = window.devicePixelRatio;
const rect = bgCanvas.getBoundingClientRect();

bgCanvas.width = rect.width * dpr;
bgCanvas.height = rect.height * dpr;    

bgC.scale(dpr, dpr);

bgCanvas.style.width = `${rect.width}px`;
bgCanvas.style.height = `${rect.height}px`;
// --------------------------------------------------