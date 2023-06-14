// ====================================================
// CONFIGURING CANVAS
// ====================================================
const gameCanvas2 = document.querySelector("#gameplay-layer2")
const gameC2 = gameCanvas2.getContext("2d")

const gamedpr2 = window.devicePixelRatio;
const gamerect2 = gameCanvas2.getBoundingClientRect();

gameCanvas2.width = gamerect2.width * gamedpr2;
gameCanvas2.height = gamerect2.height * gamedpr2;    

gameC2.scale(gamedpr2, gamedpr2);

gameCanvas2.style.width = `${gamerect2.width}px`;
gameCanvas2.style.height = `${gamerect2.height}px`;

// let windowWidth = window.innerWidth
// let windowHeight = window.innerHeight
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

    remove() {
        this.radius = 0
        // this.y = -50
    }
}

// class CircleBlue {
//     constructor(x, y, radius, color, dx, dy) {
//         this.x = x 
//         this.y = y
//         this.radius = radius
//         this.color = color
//         this.dx = dx
//         this.dy = dy
//     }

//     draw(gameC2){
//         gameC2.beginPath();
//         gameC2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//         gameC2.lineWidth = 5
//         gameC2.strokeStyle = "white"
//         gameC2.stroke();
//         gameC2.fillStyle = this.color
//         gameC2.fill()
//     }

//     update() {
//         this.draw(gameC2); 
    
//         this.x += this.dx
//         this.y += this.dy
//     }

//     remove() {
//         this.radius = 0
//         // this.y = -50
//     }
// }

class Line2 {
    constructor(x, y, newx, newy, color) {
        this.x = x 
        this.y = y
        this.newx = newx
        this.newy = newy
        this.color = color
    }

    draw(gameC2){
        gameC2.beginPath()
        gameC2.moveTo(this.x, this.y)
        gameC2.lineTo(this.newx,this.newy)
        gameC2.lineWidth = 2
        gameC2.strokeStyle = this.color
        gameC2.stroke()
    }


}

// ====================================================
// NEW VARIABLES
// ==================================================== 





// for (i=0; i<3; i++){
//     let circle2Go = (new CircleBlue(525, 0, 27, "#aee2ff", 0, (Math.random() * 10)))
//     allCircles.push(circle2Go) 
// }

// let circle1Go = new Circle2(325, 0, 27, "#ceedc7", 0, 3);
// allCircles.push(circle1Go)

// let circle2Go = new Circle2(525, 0, 27, "#aee2ff", 0, 3.5);
// allCircles.push(circle2Go)

// let circle3Go = new Circle2(725, 0, 27, "#fecedf", 0, 3.8);
// allCircles.push(circle3Go)

// let circle4Go = new Circle2(925, 0, 27, "#ffdeb4", 0, 4);
// allCircles.push(circle4Go)

// let circle5Go = new Circle2(1125, 0, 27, "#dfffd8", 0, 4.5);
// allCircles.push(circle5Go)

// ====================================================
// AUDIO
// ==================================================== 

// const file = document.getElementById('fileupload');

// file.addEventListener('change', function(){
//     const files = this.files
//     const audio1 = document.getElementById('audio1')
//     audio1.src =URL.createObjectURL(files[0])
//     // audio1.load()
// }) 

const audio1 = document.getElementById('audio1')
// ANIMATED CIRCLES-----------
let allCircles = []; 

audio1.addEventListener("play", function(){
    audio1.play()
    updateAnimations();

    // GREEN CIRCLE
    let greenNotes = [
            {delay: 1.6},
            {delay: 4.7}, 
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

    ] 

    greenNotes.forEach(obj => {
        setTimeout(function() {
            let newGreenCircles = new FallingCircle(325, 0, 27, "#C5EEDF", 0, 5)
            allCircles.push(newGreenCircles);
        }, obj.delay * 1000);
    })

    // BLUE CIRCLE
    let blueNotes = [
        {delay: 2.44},
        {delay: 3.84}, 
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
    ] 

    blueNotes.forEach(obj => {
    setTimeout(function() {
        let newBlueCircles = new FallingCircle(525, 0, 27, "#B3DEFF", 0, 5)
        allCircles.push(newBlueCircles);
    }, obj.delay * 1000);
    })

    // PINK CIRCLE
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
    ] 

    pinkNotes.forEach(obj => {
    setTimeout(function() {
        let newPinkCircles = new FallingCircle(725, 0, 27, "#F9CEEE", 0, 5)
        allCircles.push(newPinkCircles);
    }, obj.delay * 1000);
    })

    // ORANGE CIRCLE
    let orangeNotes = [
        {delay: 2.44},
        {delay: 3.84}, 
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
    ] 

    orangeNotes.forEach(obj => {
    setTimeout(function() {
        let newOrangeCircles = new FallingCircle(925, 0, 27, "#FFE1C8", 0, 5)
        allCircles.push(newOrangeCircles);
    }, obj.delay * 1000);
    })


    // PURPLE CIRCLE
    let purpleNotes = [
        {delay: 1.6},
        {delay: 4.7}, 
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
    ] 

    purpleNotes.forEach(obj => {
    setTimeout(function() {
        let newPurpleCircles = new FallingCircle(1125, 0, 27, "#CAA0FF", 0, 5)
        allCircles.push(newPurpleCircles);
    }, obj.delay * 1000);
    })

    // const audioContext = new AudioContext();
    // let audioSource = audioContext.createMediaElementSource(audio1)
    // let analyser = audioContext.createAnalyser()
    // audioSource.connect(analyser)
    // analyser.connect(audioContext.destination)
    // analyser.fftSize = 256;
    // const bufferLength = analyser.frequencyBinCount
    // const dataArray = new Uint8Array(bufferLength)

    // const beatThreshold = 60 
    // let isBeat = false

    // let analyseBeats = function() {
    // analyser.getByteFrequencyData(dataArray)
    // let energy = 0;

    // for (let i = 0; i < bufferLength; i++) {
    //     energy += dataArray[i];
    //   }
    //   energy /= bufferLength;

    // if (energy > beatThreshold && !isBeat) {
    //     isBeat = true;
    //     console.log("Beat detected!");

    //     let circle1Go = new CircleGreen(325, 0, 27, "#ceedc7", 0, 5);
    //     allCircles.push(circle1Go);

    // } else if (energy < beatThreshold) {
    //     isBeat = false;
    //   } 
    
    // requestAnimationFrame(analyseBeats);
    // }
    // analyseBeats();

})

// ====================================================
// FUNCTIONS
// ==================================================== 


// CIRCLE ANIMATING FUNCTION
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

            allCircles.forEach(circle => {
                if (key === 's' && circle.color === '#C5EEDF' && circle.y > 550) {
                    circle.remove()
                }

                if (key === 'd' && circle.color === "#B3DEFF" && circle.y > 550) {
                    circle.remove()
                }

                if (e.keyCode === 32 && circle.color === "#F9CEEE" && circle.y > 550) {
                    circle.remove()
                }

                if (key === 'k' && circle.color === "#FFE1C8" && circle.y > 550) {
                    circle.remove()
                }

                if (key === 'l' && circle.color === "#CAA0FF" && circle.y > 550) {
                    circle.remove()
                }
            })
            })
}


// ====================================================
// CALLING THE FUNCTIONS
// ==================================================== 





