function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let size = 50;

  for(i = 0; i < width; i += size) {
    strokeWeight(2)
    line(size / 2, i + size / 2, i + size/ 2, width - size / 2)
  }

}