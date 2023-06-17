
// ====================================================
// CONFIGURING CANVAS
// ====================================================
const gameCanvas1 = document.querySelector("#gameplay-layer1")
const gameC1 = gameCanvas1.getContext("2d")

const gamedpr1 = window.devicePixelRatio;
const gamerect1 = gameCanvas1.getBoundingClientRect();

gameCanvas1.width = gamerect1.width * gamedpr1;
gameCanvas1.height = gamerect1.height * gamedpr1;    

gameC1.scale(gamedpr1, gamedpr1);

gameCanvas1.style.width = `${gamerect1.width}px`;
gameCanvas1.style.height = `${gamerect1.height}px`;

// let windowWidth = window.innerWidth
// let windowHeight = window.innerHeight
// --------------------------------------------------


// ====================================================
// CLASSES
// ==================================================== 

class Circle {
    constructor(x, y, radius, color) {
        this.x = x 
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw(gameC1){
        gameC1.beginPath();
        gameC1.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        gameC1.lineWidth = 5
        gameC1.strokeStyle = "white"
        gameC1.stroke();
        gameC1.fillStyle = this.color
        gameC1.fill()
    }

}

class Line {
    constructor(x, y, newx, newy, color) {
        this.x = x 
        this.y = y
        this.newx = newx
        this.newy = newy
        this.color = color
    }

    draw(gameC1){
        gameC1.beginPath()
        gameC1.moveTo(this.x, this.y)
        gameC1.lineTo(this.newx,this.newy)
        gameC1.lineWidth = 2
        gameC1.strokeStyle = this.color
        gameC1.stroke()
    }
}

// class LightUp {
//     constructor(x, y, width, height, color) {
//         this.x = x 
//         this.y = y
//         this.width = width
//         this.height = height
//         this.color = color
//     }

//     draw(gameC1){
//         gameC1.fillStyle = this.color
//         gameC1.fillRect(this.x, this.y, this.width, this.height)
//     }

//     update(){
//         this.draw(gameC1)
//     }
// }


// ====================================================
// NEW VARIABLES
// ==================================================== 

// LINE 
let whiteLine = new Line(325, 600, 1125, 600, "white")
whiteLine.draw(gameC1);

// STATIONARY CIRCLES BUTTONS
let circle1 = new Circle(325, 600, 30, "#C5EEDF");
circle1.draw(gameC1);

let circle2 = new Circle(525, 600, 30, "#B3DEFF");
circle2.draw(gameC1);

let circle3 = new Circle(725, 600, 30, "#F9CEEE");
circle3.draw(gameC1);

let circle4 = new Circle(925, 600, 30, "#FFE1C8");
circle4.draw(gameC1);

let circle5 = new Circle(1125, 600, 30, "#CAA0FF");
circle5.draw(gameC1);

// LIGHTS 

let light1 = document.getElementById("light-1")
light1.style.visibility = "hidden"

let light2 = document.getElementById("light-2")
light2.style.visibility = "hidden"

let light3 = document.getElementById("light-3")
light3.style.visibility = "hidden"

let light4 = document.getElementById("light-4")
light4.style.visibility = "hidden"

let light5 = document.getElementById("light-5")
light5.style.visibility = "hidden"





// ====================================================
// ANIMATIONS
// ==================================================== 


window.addEventListener('keydown', function(e){
        const key = e.key.toLowerCase(); 
        if (key === "s") {
             light1.style.visibility = "visible"
        } 
        else if (key === "d") {
            light2.style.visibility = "visible"
        }
        else if (e.keyCode === 32) {
            light3.style.visibility = "visible"
        }
        else if (key === "k") {
            light4.style.visibility = "visible"
        }
        else if (key === "l") {
            light5.style.visibility = "visible"
        }
})

window.addEventListener('keyup', function(e) {
    const key = e.key.toLowerCase(); 
        if (key === 's') {
             light1.style.visibility = "hidden"
        }
        else if (key === "d") {
            light2.style.visibility = "hidden"
        }
        else if (e.keyCode === 32) {
            light3.style.visibility = "hidden"
        }
        else if (key === "k") {
            light4.style.visibility = "hidden"
        }
        else if (key === "l") {
            light5.style.visibility = "hidden"
        }
})

