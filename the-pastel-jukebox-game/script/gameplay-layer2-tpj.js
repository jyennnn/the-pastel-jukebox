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

class CircleGreen {
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

class CircleBlue {
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

let allCircles = []; 

// ANIMATED CIRCLES

// GREEN CIRCLE

let circleGreenNotes = [
        {delay: 2.5},
        {delay: 4.5}, 
        {delay: 7} 
] 

circleGreenNotes.forEach(obj => {
    setTimeout(function() {
        let newCircleGreen = new CircleGreen(325, 0, 27, "#ceedc7", 0, 5)
        allCircles.push(newCircleGreen);
        console.log(allCircles);
      }, obj.delay * 1000);
})



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

// ====================================================
// FUNCTIONS
// ==================================================== 


// CIRCLE ANIMATING FUNCTION
let updateAnimations = function() {
    requestAnimationFrame(updateAnimations)
    gameC2.clearRect(0, 0, innerWidth, innerHeight)

        // CIRCLE
            allCircles.forEach(circle => {
                circle.update();
            })

        // listening to keydowns 
        window.addEventListener('keydown', function(e){
            const key = e.key.toLowerCase(); 

            allCircles.forEach(circle => {
                if (key === 's' && circle.color === '#ceedc7' && circle.y > 550) {
                    circle.remove()
                }

                if (key === 'd' && circle === circle2Go) {
                    circle.remove()
                }

                if (e.keyCode === 32 && circle === circle3Go) {
                    circle.remove()
                }

                if (key === 'k' && circle === circle4Go) {
                    circle.remove()
                }

                if (key === 'l' && circle === circle5Go) {
                    circle.remove()
                }
            })
            })
}


// ====================================================
// CALLING THE FUNCTIONS
// ==================================================== 


const audio1 = document.getElementById('audio1')
audio1.addEventListener("play", function(){
    audio1.play()
    updateAnimations();
    
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


