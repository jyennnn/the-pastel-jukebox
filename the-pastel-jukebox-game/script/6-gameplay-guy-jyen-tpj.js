
// -------------------------------------------+
// 3rd Page - Game Menu > JYEN GUY            |
// -------------------------------------------+

// ====================================================
// CONFIGURING CANVAS
// ====================================================
const gameCanvas2 = document.querySelector("#gameplay-guy-jyen")
const gameC2 = gameCanvas2.getContext("2d")

const gamedpr2 = window.devicePixelRatio;
const gamerect2 = gameCanvas2.getBoundingClientRect();

gameCanvas2.width = gamerect2.width * gamedpr2;
gameCanvas2.height = gamerect2.height * gamedpr2;    

gameC2.scale(gamedpr2, gamedpr2);

gameCanvas2.style.width = `${gamerect2.width}px`;
gameCanvas2.style.height = `${gamerect2.height}px`;

// --------------------------------------------------

// ====================================================
// CLASSES
// ==================================================== 

class FallingCircle {
    constructor(x, y, radius, color, dx, dy) {
        this.x = x 
        this.y = y
        this.radius = radius
        this.color = color
        this.dx = dx
        this.dy = dy
    }

    draw(gameC2){
        gameC2.beginPath();
        gameC2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        gameC2.lineWidth = 5
        gameC2.strokeStyle = "white"
        gameC2.stroke();
        gameC2.fillStyle = this.color
        gameC2.fill()
    }

    update() {
        this.draw(gameC2); 
    
        this.x += this.dx
        this.y += this.dy
    }
}


// ====================================================
// ANIMATED CIRCLES for JYEN - GUY 
// ==================================================== 

// Music ---------------------------------------------
const guyMusic = document.getElementById('guy-music')



// Array for the circles  -----------------------------
let allCircles = []; 



// Creating falling circles to music ----------------------

playGuyButton.addEventListener("click", function(){
    // remove song menu 
    songMenu.style.visibility = "hidden"
    listOfSongs[currentIndex].div.style.visibility = "hidden"
    guyPreview.pause()

    // play guy - jyen 
    guyMusic.play()

    // canvas animations 
    updateAnimations();

    // GREEN CIRCLE ------------
    let greenNotes = [
            {delay: 1.56},
            {delay: 4.63}, 
            {delay: 6.12},
            {delay: 10.64},
            {delay: 12.92},
            {delay: 16.05},
            {delay: 18.28},
            {delay: 19.7},
            {delay: 20},
            {delay: 20.84},
            {delay: 20.84},
            {delay: 21.1},
            {delay: 22},
            {delay: 22.25},
            {delay: 22.82},
            {delay: 27.06},
            {delay: 28.77},
            {delay: 29.9},
            {delay: 30.44},
            {delay: 31.89},
            {delay: 33.3},
            {delay: 34.45},
            {delay: 34.98},
            {delay: 35.56},
            {delay: 35.88},
            {delay: 37.84},
            {delay: 38.96},
            {delay: 39.5},
            {delay: 40.64},
            {delay: 45.75},
            {delay: 46.02},
            {delay: 58.68},
            {delay: 59.315},
            {delay: 62.96},
            {delay: 63.56},
            {delay: 64.15},
            {delay: 64.42},
            {delay: 65.2},
            {delay: 65.82},
            {delay: 69.68},
            {delay: 71.77},
            {delay: 72.9},
    ] 

    greenNotes.forEach(obj => {
        setTimeout(function() {
            let newGreenCircles = new FallingCircle(325, 0, 30, "#C5EEDF", 0, 5)
            allCircles.push(newGreenCircles);
        }, obj.delay * 1000);
    })

    // BLUE CIRCLE ------------
    let blueNotes = [
        {delay: 2.41},
        {delay: 3.8}, 
        {delay: 7.8},
        {delay: 10.88},
        {delay: 13.12},
        {delay: 15.73},
        {delay: 16.36},
        {delay: 18.05},
        {delay: 18.6},
        {delay: 20.28},
        {delay: 21.39},
        {delay: 21.68},
        {delay: 22.54},
        {delay: 26.5},
        {delay: 27.64},
        {delay: 27.9},
        {delay: 28.2},
        {delay: 29.02},
        {delay: 30.18},
        {delay: 31.61},
        {delay: 33.52},
        {delay: 34.69},
        {delay: 36.7},
        {delay: 37.52},
        {delay: 38.17},
        {delay: 39.22},
        {delay: 40.64},
        {delay: 42.9},
        {delay: 43.48}, 
        {delay: 44.04}, 
        {delay: 46.32},
        {delay: 58.44},
        {delay: 59.04},
        {delay: 59.58},
        {delay: 59.89},
        {delay: 62.72},
        {delay: 63.14},
        {delay: 63.84},
        {delay: 65.41},
        {delay: 66.12},
        {delay: 70.33},
        {delay: 72.21},
        {delay: 73.19},
    ] 

    blueNotes.forEach(obj => {
    setTimeout(function() {
        let newBlueCircles = new FallingCircle(525, 0, 30, "#B3DEFF", 0, 5)
        allCircles.push(newBlueCircles);
    }, obj.delay * 1000);
    })

    // PINK CIRCLE ------------
    let pinkNotes = [
        {delay: 8.4},
        {delay: 8.92}, 
        {delay: 9.52}, 
        {delay: 9.52}, 
        {delay: 10.1}, 
        {delay: 12.34}, 
        {delay: 14.6}, 
        {delay: 16.88}, 
        {delay: 19.12},
        {delay: 25.93},
        {delay: 26.21},
        {delay: 33.85},
        {delay: 34.15},
        {delay: 42.36},
        {delay: 44.6},
        {delay: 46.6},
        {delay: 46.88},
        {delay: 47.3},
        {delay: 47.72},
        {delay: 48.15},
        {delay: 48.57},
        {delay: 49.14},
        {delay: 49.56},
        {delay: 49.98},
        {delay: 50.40},
        {delay: 50.84},
        {delay: 51.4},
        {delay: 51.83},
        {delay: 52.25},
        {delay: 52.68},
        {delay: 53.1},
        {delay: 53.66},
        {delay: 54.09},
        {delay: 54.51},
        {delay: 54.92},
        {delay: 55.08},
        {delay: 55.366},  
        {delay: 57.631},
        {delay: 62.16},
        {delay: 62.39},
        {delay: 66.68},
        {delay: 71.2},
        {delay: 71.42},
        {delay: 73.48},
    ] 

    pinkNotes.forEach(obj => {
    setTimeout(function() {
        let newPinkCircles = new FallingCircle(725, 0, 30, "#F9CEEE", 0, 5)
        allCircles.push(newPinkCircles);
    }, obj.delay * 1000);
    })


    // ORANGE CIRCLE ------------
    let orangeNotes = [
        {delay: 2.41},
        {delay: 3.8}, 
        {delay: 7.48},
        {delay: 11.2},
        {delay: 11.68},
        {delay: 13.5},
        {delay: 14.05},
        {delay: 15.44},
        {delay: 17.7},
        {delay: 20.28},
        {delay: 23.64},
        {delay: 25.37},
        {delay: 25.62},
        {delay: 27.64},
        {delay: 27.9},
        {delay: 28.2},
        {delay: 29.31},
        {delay: 31.38},
        {delay: 32.44},
        {delay: 33.52},
        {delay: 34.69},
        {delay: 36.98},
        {delay: 37.23},
        {delay: 38.42},
        {delay: 40.37},
        {delay: 41.49},
        {delay: 42.9}, 
        {delay: 43.48},
        {delay: 44.04},  
        {delay: 46.32},
        {delay: 56.44}, 
        {delay: 57.045},
        {delay: 61.1},
        {delay: 61.54},
        {delay: 67.69},
        {delay: 68.38},
        {delay: 70.67},
        {delay: 72.61},
        {delay: 73.19},
    ] 

    orangeNotes.forEach(obj => {
    setTimeout(function() {
        let newOrangeCircles = new FallingCircle(925, 0, 30, "#FFE1C8", 0, 5)
        allCircles.push(newOrangeCircles);
    }, obj.delay * 1000);   
    })


    // PURPLE CIRCLE ------------ 
    let purpleNotes = [
        {delay: 1.56},
        {delay: 4.63}, 
        {delay: 6.12},
        {delay: 11.48},
        {delay: 13.76},
        {delay: 15.18},
        {delay: 17.44},
        {delay: 19.7},
        {delay: 20},
        {delay: 22.82},
        {delay: 23.64},
        {delay: 23.96},
        {delay: 24.48},
        {delay: 25.09},
        {delay: 29.31},
        {delay: 31.03},
        {delay: 32.16},
        {delay: 32.66},
        {delay: 33.3},
        {delay: 34.45},
        {delay: 34.98},
        {delay: 36.12},
        {delay: 36.46},
        {delay: 38.42},
        {delay: 40.08},
        {delay: 41.22},
        {delay: 41.82},
        {delay: 45.75},
        {delay: 46.02},
        {delay: 56.16}, 
        {delay: 56.77},
        {delay: 60.7},
        {delay: 61.28},
        {delay: 67.43},
        {delay: 68.08},
        {delay: 68.62},
        {delay: 68.94},
        {delay: 70.04},
        {delay: 71.97},
        {delay: 72.9},
    ] 

    purpleNotes.forEach(obj => {
    setTimeout(function() {
        let newPurpleCircles = new FallingCircle(1125, 0, 30, "#CAA0FF", 0, 5)
        allCircles.push(newPurpleCircles);
    }, obj.delay * 1000);
    })
})



// drawing & animating on the canvas with circles created above ----------------------
let updateAnimations = function() {
    requestAnimationFrame(updateAnimations)
    gameC2.clearRect(0, 0, innerWidth, innerHeight)


        // CIRCLE update -----------
            allCircles.forEach(circle => {
                circle.update();
            })

        // listening to keydowns -----------------
        window.addEventListener('keydown', function(e){
            const key = e.key.toLowerCase(); 

            allCircles.forEach((circle, index) => {
            // GREEN CIRCLE ----- 
                if (key === 's' && circle.color === '#C5EEDF'){
                    // Perfect 
                    if (circle.y > 565 && circle.y < 635) {
                        allCircles.splice(index, 1)
                        perfectScore()
                    }

                    // Great
                    if (circle.y > 634 && circle.y < 675 ||  circle.y > 525 && circle.y < 566) {
                        allCircles.splice(index, 1)
                        greatScore()
                    }
                    
                    // Poor
                    if (circle.y > 674 && circle.y < 701){
                        allCircles.splice(index, 1)
                        poorScore()
                    }
                }
                
            // BLUE CIRCLE ----- 
                if (key === 'd' && circle.color === "#B3DEFF"){
                    // Perfect 
                    if (circle.y > 565 && circle.y < 635) {
                        allCircles.splice(index, 1)
                        perfectScore()
                    }

                    // Great
                    if (circle.y > 634 && circle.y < 675 ||  circle.y > 525 && circle.y < 566) {
                        allCircles.splice(index, 1)
                        greatScore()
                    }
                    
                    // Poor
                    if (circle.y > 674 && circle.y < 701){
                        allCircles.splice(index, 1)
                        poorScore()
                    }
                }

            // PINK CIRCLE ----- 
                if (e.keyCode === 32 && circle.color === "#F9CEEE"){
                    // Perfect 
                    if (circle.y > 565 && circle.y < 635) {
                        allCircles.splice(index, 1)
                        perfectScore()
                    }

                    // Great 
                    if (circle.y > 634 && circle.y < 675 ||  circle.y > 525 && circle.y < 566) {
                        allCircles.splice(index, 1)
                        greatScore()
                    }
                    
                    // Poor
                    if (circle.y > 674 && circle.y < 701){
                        allCircles.splice(index, 1)
                        poorScore()
                    }
                }

            // ORANGE CIRCLE ----- 
                if (key === 'k' && circle.color === "#FFE1C8"){
                    // Perfect 
                    if (circle.y > 565 && circle.y < 635) {
                        allCircles.splice(index, 1)
                        perfectScore()
                    }

                    // Great
                    if (circle.y > 634 && circle.y < 675 ||  circle.y > 525 && circle.y < 566) {
                        allCircles.splice(index, 1)
                        greatScore()
                    }
                    
                    // Poor
                    if (circle.y > 674 && circle.y < 701){
                        allCircles.splice(index, 1)
                        poorScore()
                    }
                }

            // PURPLE CIRCLE ----- 
                if (key === 'l' && circle.color === "#CAA0FF"){
                    // Perfect 
                    if (circle.y > 565 && circle.y < 635) {
                        allCircles.splice(index, 1)
                        perfectScore()
                    }

                    // Great
                    if (circle.y > 634 && circle.y < 675 ||  circle.y > 525 && circle.y < 566) {
                        allCircles.splice(index, 1)
                        greatScore()
                    }
                    
                    // Poor
                    if (circle.y > 674 && circle.y < 701){
                        allCircles.splice(index, 1)
                        poorScore()
                    }

                }

            })
        })  
        
        // listening to misses -----------------
            allCircles.forEach((circle, index) => {
                if (circle.y > 700){
                allCircles.splice(index, 1)
                missScore()
                }
            })
}



