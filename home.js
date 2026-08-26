console.log("hello world!")

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // background(220);

    // ellipse(mouseX, mouseY, 50, 80);
    rectMode(CENTER);
    rect(mouseX, mouseY, 50, 30);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}