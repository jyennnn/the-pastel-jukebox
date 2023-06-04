/* Sketchpad 

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    const c = canvas.getContext("2d")
    
    c.strokeStyle = "green"
    c.lineWidth = "5"
    c.strokeRect(100, 100, 100, 100)

    // variables 
    let painting = false; 

    function startPosition() {
        painting = true; 
    }

    function finishedPosition() {
        painting = false
        c.beginPath()
    }

    function draw(e) {
        if(!painting) return
        c.lineWidth = 10 
        c.lineCap = "round"

        c.lineTo(e.clientX, e.clientY)
        c.stroke()

    }

    // Event Listeners 
    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finishedPosition)
    canvas.addEventListener("mousemove", draw)
}); 

window.addEventListener("resize", () => {
    // Resizing 
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
})
*/ 


/* circle animations

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    const c = canvas.getContext("2d")

    // arc / circle 

    function Circle(x, y, dx , dy, radius) {
        this.x = x
        this.y = y
        this.dx = dx 
        this.dy = dy
        this.radius = radius

        this.draw = function () {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.fillStyle = "#67A1A1"
            c.fill()
        }

        this.update = function () {
            if (this.x + this.radius > innerWidth || 
                this.x - this.radius < 0) {
                this.dx = -this.dx
            }
    
            if (this.y + this.radius > innerHeight || 
                this.y - this.radius < 0) {
                this.dy = -this.dy
            }
    
            this.x += this.dx 
            this.y += this.dy

            this.draw();
        }
    }

    let circleArray = []; 

    for (let i = 0; i < 100; i++ ){
        let radius = 5;
        let x = Math.random() * innerWidth; 
        let y = Math.random() * innerHeight;
        let dx = (Math.random() - 0.5) * 20; 
        let dy = (Math.random() - 0.5) * 20;
    
        circleArray.push(new Circle(x, y, dx, dy, radius))
    }
    

    function animate() {
        requestAnimationFrame(animate); 
        c.clearRect(0, 0, innerWidth, innerHeight)

        for (let i = 0; i < circleArray.length; i++ ){
            circleArray[i].update()
        }
    }; 

    animate()

});


window.addEventListener("resize", () => {
    // Resizing 
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
});

*/ 

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    const c = canvas.getContext("2d")

    let colorArray = [
        "#7F669D",
        "#829460",
        "#7895B2",
        "#554994",
        "#6E85B7",
        "#D885A3",
        "#6867AC"
    ]

    
    // arc / circle 

    function Circle(x, y, dx , dy, radius, color) {
        this.x = x
        this.y = y
        this.dx = dx 
        this.dy = dy
        this.radius = radius

        //circle 
        this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = color
        c.fill()
        }

        this.update = function () {
    
            if (this.y + this.radius > 600) {
                this.radius = 0
            }
            
            this.y += this.dy
            this.draw()
        }

        this.remove = function() {
            c.clearRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
            canvas.style.background = colorArray[Math.floor(Math.random() * colorArray.length)]
            console.log(Math.floor(Math.random() * colorArray.length))
        };
    }

    let circleOne = new Circle(300, 0, 0, 5, 20, "#ceedc7")
    let circleTwo = new Circle(470, 0, 0, 6, 20, "#aee2ff")
    let circleThree = new Circle(640, 0, 0, 7, 20, "#fecedf")
    let circleFour = new Circle(810, 0, 0, 8, 20, "#ffdeb4")
    let circleFive = new Circle(980, 0, 0, 9, 20, "#ffc2fe")
    let circleSix = new Circle(1150, 0, 0, 10, 20, "#dfffd8")

    let stopCircleOneUpdate = true;
    let stopCircleTwoUpdate = true;
    let stopCircleThreeUpdate = true;
    let stopCircleFourUpdate = true;
    let stopCircleFiveUpdate = true;
    let stopCircleSixUpdate = true;



    // circle function 
    function animate() {
        requestAnimationFrame(animate); 
        c.clearRect(0, 0, innerWidth, innerHeight)

        //line 
        c.beginPath()
        c.moveTo(0,600)
        c.lineTo(innerWidth,600)
        c.strokeStyle = "white"
        c.stroke()

        //circle1
        c.beginPath()
        c.arc(300, 600, 20, 0, Math.PI * 2, false)
        c.fillStyle = "#ceedc7"
        c.fill()
        c.strokeStyle = "white"
        c.stroke()

        //circle2
        c.beginPath()
        c.arc(470, 600, 20, 0, Math.PI * 2, false)
        c.fillStyle = "#aee2ff"
        c.fill()
        c.strokeStyle = "white"
        c.stroke()

        //circle3
        c.beginPath()
        c.arc(640, 600, 20, 0, Math.PI * 2, false)
        c.fillStyle = "#fecedf"
        c.fill()
        c.strokeStyle = "white"
        c.stroke()

        //circle 4
        c.beginPath()
        c.arc(810, 600, 20, 0, Math.PI * 2, false)
        c.fillStyle = "#ffdeb4"
        c.fill()
        c.strokeStyle = "white"
        c.stroke()

        //circle 5
        c.beginPath()
        c.arc(980, 600, 20, 0, Math.PI * 2, false)
        c.fillStyle = "#ffc2fe"
        c.fill()
        c.strokeStyle = "white"
        c.stroke()

        //circle 6
        c.beginPath()
        c.arc(1150, 600, 20, 0, Math.PI * 2, false)
        c.fillStyle = "#dfffd8"
        c.fill()
        c.strokeStyle = "white"
        c.stroke()

        if (stopCircleOneUpdate) {
            circleOne.update();
          }

        if (stopCircleTwoUpdate) {
            circleTwo.update();
          }

        if (stopCircleThreeUpdate) {
            circleThree.update();
        }

        if (stopCircleFourUpdate) {
            circleFour.update();
          }

        if (stopCircleFiveUpdate) {
            circleFive.update();
          }

        if (stopCircleSixUpdate) {
            circleSix.update();
        }
        
        

        // listening to keydowns 
        window.addEventListener('keydown', function(e){
            const key = e.key.toLowerCase(); 
            console.log(key)
        
            if (key === 'a') {
                stopCircleOneUpdate = false
                circleOne.remove()
            }

            if (key === 's') {
                stopCircleTwoUpdate = false
                circleTwo.remove()
            }

            if (key === 'd') {
                stopCircleThreeUpdate = false
                circleThree.remove()
            }

            if (key === 'j') {
                stopCircleFourUpdate = false
                circleFour.remove()
            }

            if (key === 'k') {
                stopCircleFiveUpdate = false
                circleFive.remove()
            }

            if (key === 'l') {
                stopCircleSixUpdate = false
                circleSix.remove()
            }
        })

    }; 

    animate()

   
    
    
});



window.addEventListener("resize", () => {
    // Resizing 
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
});


