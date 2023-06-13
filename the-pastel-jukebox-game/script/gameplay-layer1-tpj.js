
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


// ====================================================
// NEW VARIABLES
// ==================================================== 

// LINE 
let whiteLine = new Line(325, 600, 1125, 600, "white")
whiteLine.draw(gameC1);

// STATIONARY CIRCLES BUTTONS
let circle1 = new Circle(325, 600, 27, "#ceedc7");
circle1.draw(gameC1);

let circle2 = new Circle(525, 600, 27, "#aee2ff");
circle2.draw(gameC1);

let circle3 = new Circle(725, 600, 27, "#fecedf");
circle3.draw(gameC1);

let circle4 = new Circle(925, 600, 27, "#ffdeb4");
circle4.draw(gameC1);

let circle5 = new Circle(1125, 600, 27, "#dfffd8");
circle5.draw(gameC1);


// ====================================================
// ANIMATIONS
// ==================================================== 

