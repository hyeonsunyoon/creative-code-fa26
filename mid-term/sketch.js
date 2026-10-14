let mushrooms = [];
let arrayMaxCount = 30
let mCount = 3;
let stemWidth = 10;
let stemHeight = 10;
let stemMaxHeight = 70;
let headWidth = 50;
let headHeight = 25;
let colors = [];

let plantSound
let bopSound
let crinkleSound

async function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  plantSound = await loadSound('plant.m4a')
  bopSound = await loadSound('bop.mp3')
  crinkleSound = await loadSound('crinkle.m4a')
  
  colors = [color(255, 255, 255), color(255, 255, 0), color(0, 255, 0)];

  while (mushrooms.length < mCount) {
    let pos = createVector(random(width), random(height));

    let overlapping = false
    
    for (let j = 0; j < mushrooms.length; j++) {
      let other = mushrooms[j]

      if (pos.x < headWidth / 2) {
        pos.x = headWidth / 2;
      } else if (pos.x > width - headWidth / 2) {
          pos.x = width - headWidth / 2
        }
      if (pos.y < stemMaxHeight + headHeight / 2) {
        pos.y = stemMaxHeight + headHeight / 2;
      }

      if(
        abs(pos.x - other.pos.x) < headWidth &&
        abs(pos.y - other.pos.y) < stemMaxHeight + headHeight
      ) {
        overlapping = true
        break;
      }
    }

    if (!overlapping) {
      mushrooms.push(new Mushroom(pos.x, pos.y, random(colors), random(colors)));
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < mushrooms.length; i++) {
    mushrooms[i].show();
    mushrooms[i].update();
  }

  if (mushrooms.length == 0) {
    plantRandom()
  }
}

function soundPlay(index) {
  if (mushrooms[index].time < 30) {
    bopSound.play()
  } else {
    crinkleSound.play()
  }
}

function plantRandom() {
  let ranVal = random(1);
  let mushVal = random(1,3);

  let originLength = mushrooms.length

  if (ranVal > 0.5) {
    while (mushrooms.length < originLength + floor(mushVal)) {
      let pos = createVector(random(width), random(height));

      let overlapping = false
    
      for (let j = 0; j < mushrooms.length; j++) {
        let other = mushrooms[j]
  
        if (pos.x < headWidth / 2) {
          pos.x = headWidth / 2;
        } else if (pos.x > width - headWidth / 2) {
            pos.x = width - headWidth / 2
          }
        if (pos.y < stemMaxHeight + headHeight / 2) {
          pos.y = stemMaxHeight + headHeight / 2;
        }

        if(
          abs(pos.x - other.pos.x) < headWidth &&
          abs(pos.y - other.pos.y) < stemMaxHeight + headHeight
        ) {
          overlapping = true
          break;
        }
      }
  
      if (!overlapping) {
        mushrooms.push(new Mushroom(pos.x, pos.y, random(colors), random(colors)));
      }
    }
  }
}

function mousePressed() {
  let hitIndex = -1;

  for (let i = 0; i < mushrooms.length; i++) {
    if (mushrooms[i].click(mouseX, mouseY)) {
      hitIndex = i;
      break;
    }
  }

  if (hitIndex == -1) {
    let pos = createVector(mouseX, mouseY)

    let overlapping = false
    
    for (let j = 0; j < mushrooms.length; j++) {
      let other = mushrooms[j]

      if (pos.x < headWidth / 2) {
        pos.x = headWidth / 2;
      } else if (pos.x > width - headWidth / 2) {
          pos.x = width - headWidth / 2
        }
      if (pos.y < stemMaxHeight + headHeight / 2) {
        pos.y = stemMaxHeight + headHeight / 2;
      }

      if(
        abs(pos.x - other.pos.x) < headWidth &&
        abs(pos.y - other.pos.y) < stemMaxHeight + headHeight
      ) {
        overlapping = true
        break;
      }
    }

    if (!overlapping) {
      plantSound.play()
      mushrooms.push(new Mushroom(pos.x, pos.y, random(colors), random(colors)));
    }
  } else {
    soundPlay(hitIndex)
    mushrooms.splice(hitIndex, 1);
    plantRandom();
  }
}

class Mushroom {
  constructor(posX, posY, headColor, stemColor) {
    this.pos = createVector(posX, posY);
    this.stemHeight = random(stemHeight);
    this.stemWidth = stemWidth;
    this.stemGrow = random(.05, .1)

    this.headColor = headColor;
    this.stemColor = stemColor;

    this.time = 0;
  }

  show() {
    strokeWeight(0)
    fill(this.stemColor);
    rect(
      this.pos.x - this.stemWidth / 2,
      this.pos.y,
      this.stemWidth,
      this.stemHeight
    );
    fill(this.headColor);
    arc(this.pos.x, this.pos.y, headWidth, headHeight, 170, 10, CHORD);
  }

  update() {
    if (this.stemHeight < stemMaxHeight) {
      this.pos.y -= this.stemGrow;
      this.stemHeight += this.stemGrow;
    } else {
      if (this.time < 50) {
        this.time += 0.1;
        if (this.time > 30) {
          this.headColor = color(0, 0, 0);
          this.stemColor = color(0, 0, 0);
        }
      } else {
        for (let i = 0; i < mushrooms.length; i ++) {
          if(mushrooms[i].time >= 50) {
            soundPlay(i)
            mushrooms.splice(i, 1);
            plantRandom();
          }
        }
      }
    }
  }

  click(x, y) {
    if (this.stemHeight >= stemMaxHeight) {
      if (
        x > this.pos.x - this.stemWidth / 2 &&
        x < this.pos.x + this.stemWidth / 2 &&
        y > this.pos.y &&
        y < this.pos.y + this.stemHeight
      ) {
        return true;
      }
    } else {
      return false;
    }
  }
}