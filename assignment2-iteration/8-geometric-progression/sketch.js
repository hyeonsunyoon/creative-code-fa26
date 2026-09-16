function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for(i = 0; i < 10; i ++) {

    let firstR = width * 2;
    circle(width / 2, height, firstR / (1.3 * i));
  }

  text("uh.......", width/2, height/2)
}