const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
const ctx = canvas.getContext('2d');
let smiley = document.getElementById("smiley")

//Initial position of the second circle
let circle2x = 200;

//Redraw the canvas when the window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight - 10;
    draw();
});

//Animate the canvas by calling the draw function every 30 milliseconds
draw();

// function to draw on the canvas
function draw() {
    circle2x += 1;

    //Drawing a rectangle with canvas
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 90, 90);

    //Drawing a circle with canvas
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(320, 60, 40, 0, 2 * Math.PI);
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();

    //Drawing a line with canvas
    ctx.beginPath();
    ctx.moveTo(400, 20);
    ctx.lineTo(400, 100);
    ctx.lineTo(500, 100);
    ctx.lineTo(500, 50);
    ctx.stroke();
    ctx.closePath();

    //Drawing an image with canvas
    ctx.drawImage(smiley, 150, 10, 100, 100);


    //Drawing two circles and a line between them
    //circle 1: center (60, 200), radius 50
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(60, 200, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    //circle 2: center (200, 200), radius 50
    ctx.beginPath();
    ctx.arc(circle2x, 200, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    //line between the two circles
    ctx.lineCap = "round";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(60, 200);
    ctx.lineTo(circle2x, 200);
    ctx.stroke();
    ctx.closePath();

    //display the distance between the two circles
    ctx.fillStyle = "black";
    ctx.font = "20px Arial"
    ctx.fillText("Distance: " + calculateDistance(60, 200, circle2x, 200), circle2x / 2, 180);
}

//function to calculate the distance between two points (x1, y1) and (x2, y2)
function calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

