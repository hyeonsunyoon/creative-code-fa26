function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  let size = 30;
  let circleNum = 7;

  fill (220);
  
  for(i = 0; i < circleNum; i ++){
    circle(i * (size + size/2) + size/2 + (width - (circleNum * size + (size/2) * 6)) / 2, height/2, size)
  }
}