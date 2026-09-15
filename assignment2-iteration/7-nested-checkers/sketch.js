function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let numRect = 8;

  for(y = 0; y < numRect; y ++) {
    for(x = 0; x < numRect; x ++) {
      if(y % 2 == 0) {
        fill(255)
      } else {fill(0)}
  
      rect(y * width / numRect, x * 2 * (height / numRect), width / numRect, height / numRect);
  
      if(y % 2 == 0) {
        fill(0)
      } else {fill(255)}
      
      rect(y * width / numRect, height / numRect + x * 2 * (height / numRect), width / numRect, height / numRect);
    }
  }
}