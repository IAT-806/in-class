// IAT 806 — W2: variables, the draw loop, conditionals, random

let circleX = 300;
let circleY = 200;
let circleSize = 100;

let speedX = 3;
let speedY = 3;
let paused = false;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);

  let r = circleSize / 2;

  if (!paused) {
    circleX = circleX + speedX;
    circleY = circleY + speedY;

    if (circleX > width - r || circleX < r) {
      speedX = speedX * -1;
    }
    if (circleY > height - r || circleY < r) {
      speedY = speedY * -1;
    }
  }

  noStroke();
  if (circleY < height / 2) {
    fill(255, 120, 60);
  } else {
    fill(60, 160, 255);
  }
  circle(circleX, circleY, circleSize);
}

function mousePressed() {
  let flipX = random();
  let flipY = random();
  console.log(flipX, flipY);

  speedX = random(2, 6);
  speedY = random(2, 6);

  if (flipX > 0.5) {
    speedX = speedX * -1;
  }
  if (flipY > 0.5) {
    speedY = speedY * -1;
  }
}

function keyPressed() {
  if (key == " ") {
    if (paused == false) {
      paused = true;
    } else {
      paused = false;
    }
    // shorthand for those five lines: paused = !paused;
  }
}
