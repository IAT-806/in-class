let frames = [];
let frames2 = [];
let myAge = 10;
let numFrames = 8;

let numCols = 20;
let numRows = 10;
let colWidth;
let rowHeight;

let colors = [];
let speeds = [];

async function setup() {
  createCanvas(800, 420);

  for (let i = 0; i < numCols; i++) {
    colors[i] = [];
    speeds[i] = [];
    for (let j = 0; j < numRows; j++) {
      colors[i][j] = [random(1, 255), random(1, 255), random(1, 255)];
      speeds[i][j] = random(1, 10);
    }
  }
  console.log(colors);

  rowHeight = height / numRows;

  for (let i = 0; i < numFrames; i++) {
    // let fileName = `dance_frames/dance${i}.png`;
    let fileName = "dance_frames/dance" + i + ".png";

    frames.push(await loadImage(fileName));
  }
}

function draw() {
  background(120);
  if (mouseX < width) {
    numCols = Math.floor(map(mouseX, 0, width, 2, 20));
    // dist the mouse position and the position of the dancing profs
    // in the grid, and then use that number to map to the speed.
    colWidth = width / numCols;
  }

  console.log(numCols);
  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      fill(colors[i][j][0], colors[i][j][1], colors[i][j][2], 120);
      rect(i * colWidth, j * rowHeight, colWidth, rowHeight);
      animate(frames, speeds[i][j], i * colWidth, j * rowHeight, colWidth);
    }
  }

  // animate(frames, 3, 200, 100, 200);
  // animate(frames, 4, 300, 100, 300);
}

function animate(frames, speed, xPosition, yPosition, imageWidth, imageHeight) {
  let index = getFrameIndex(speed);
  let currentFrame = frames[index];
  let origWidth = currentFrame.width;
  let origHeight = currentFrame.height;
  if (imageWidth && !imageHeight) {
    let scale = imageWidth / origWidth;
    imageHeight = scale * origHeight;
  }
  // TODO, complete the keeping scale correct logic.
  image(currentFrame, xPosition, yPosition, imageWidth, imageHeight);
}

function getFrameIndex(speed) {
  let slowFrame = Math.floor(frameCount / speed);
  let index = slowFrame % frames.length;

  return index;
}
