function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let gap = 5;

  for(let i = 0; i < width; i ++) {
    line(i * gap, 0, i * gap * 4, height)
  }

  textAlign(CENTER)
  text("sorry I failed", width/2, height/2)
}