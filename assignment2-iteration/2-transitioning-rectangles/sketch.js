function setup() {
  createCanvas(400, 400);
}

let barNum = 14;

function draw() {
  background(220);
  for (let i = 0; i < barNum; i ++) {
    fill(i * (255 / (barNum - 1)))
    rect(i * width / (barNum + 2) + width / (barNum + 2), height - (height / (barNum + 2)) * i - (height / (barNum + 2)) - height / (barNum + 2), width / (barNum + 2), (i + 1) * (height / (barNum + 2)))
  }
}