let walker

function setup() {
  createCanvas(width, height);
  background(220);
  walker = new Walker();
}

function draw() {
  walker.show()
  walker.step()
}

class Walker {
  constructor() {
    this.x = width / 2
    this.y = height / 2
  }

  show() {
    circle(this.x, this.y, random(10))
  }

  step() {
    const r = random(1);

    if(r < 0.25) {
      this.x ++
    } else if(r < 0.5) {
      this.x --
    } else if(r < 0.75) {
      this.y ++
    } else {
      this.y --
    }
  }
}