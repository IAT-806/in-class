let frames = [];
let myAge = 10;
let myName = "Alireza";
let myStudentsAges = [];
let numFrames = 8;
let nCols = 20;
let nRows = 20;
let speeds = [];

for (let i = 0; i < nCols; i++) {
  speeds[i] = [];
}

let maxDist;
async function setup() {
  createCanvas(800, 600);
  maxDist = dist(0, 0, width, height);
  for (let i = 0; i < nCols; i++) {
    for (let j = 0; j < nRows; j++) {
      speeds[i][j] = random(1, 10);
    }
  }
  for (let i = 0; i < numFrames; i++) {
    // let fileName = `dance_frames/dance${i}.png`;
    let fileName = "dance_frames/dance" + i + ".png";

    frames.push(await loadImage(fileName));
  }
}

function draw() {
  background(120);
  fill("black");

  let colWidth = width / nCols;
  let rowHeight = height / nRows;
  for (let i = 0; i < nCols; i++) {
    for (let j = 0; j < nRows; j++) {
      let xPosition = i * colWidth;
      let yPosition = j * rowHeight;
      let speed = speeds[i][j];
      let distance = dist(
        xPosition + colWidth / 2,
        yPosition + rowHeight / 2,
        mouseX,
        mouseY,
      );
      let w = colWidth;
      if (distance) {
        speed = speeds[i][j] * map(distance, 0, maxDist, 1, 2);
        let wScale = map(distance, 0, maxDist, 1.4, 0.1);
        w = w * wScale;
      }

      animate(frames, speed, xPosition, yPosition, w);
    }
  }
}

function animate(frames, speed, x, y, width, height) {
  let f = floor(frameCount / speed);
  let index = f % frames.length;
  let frame = frames[index];
  if (width && !height) {
    height = (width / frame.width) * frame.height;
  }
  if (height && !width) {
    width = (height / frame.height) * frame.width;
  }
  if (!width) {
    width = frame.width;
  }
  if (!height) {
    height = frame.height;
  }

  image(frame, x, y, width, height);
}

function calculateDistance(imgX, imgY, mouseX, mouseY) {
  let imgPos = createVector(imgX, imgY);
  let mousePos = createVector(mouseX, mouseY);
  let distance = imgPos.dist(mousePos);
  return distance;
}
