function setup() {
  createCanvas(400, 400);
}

let numBars = 19;

function draw() {
  background(255);
  for(let i = 0; i < 17; i += 1){
    fill(255, 255 - i * 16, i * 16)
    stroke(255)
    rect(i * width/numBars + width/numBars , width/numBars, width/numBars, height - width/numBars * 2)
  }
}