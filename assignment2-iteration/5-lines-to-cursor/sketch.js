function setup() {
  createCanvas(400, 400);
}

let lineNum = 10;
let margin = 50;

function draw() {
  background(220);

  for (let i = 0; i < lineNum; i += 1) {
    line (i * (width - margin * 2) / (lineNum - 1) + margin, margin, mouseX, mouseY)
  }
}