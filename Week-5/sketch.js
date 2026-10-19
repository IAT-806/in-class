// An array to hold all the balls.
let balls = [];

// How many balls to create.
// numBalls is camelCase. You could also write num_balls (snake_case).
let numBalls = 5000;

// No color or position variables here: each ball keeps its own, inside the class.
function setup() {
  createCanvas(600, 600);

  // Create numBalls balls and put them in the array.
  for (let i = 0; i < numBalls; i++) {
    let ballX = random(0, 600);
    let ballY = 300;
    let ballC = color(20, 130, 140 + random(-100, 100), 180);
    let ballR = 10;
    let ball = new Ball(ballX, ballY, ballC, ballR);
    balls.push(ball);
  }
}

function draw() {
  background(120);

  // Go through the array and update every ball.
  // These loops all do the same thing:
  //   for (let i = 0; i < numBalls; i++) { balls[i].change(2); }
  //   balls.forEach((ball) => ball.change(2));
  for (let ball of balls) {
    ball.change(2);
  }
}

// A class is a blueprint for creating things.
// It has attributes (x, y, color, r) and methods (change, move, changeSize, show).
// We can create as many balls from it as we want.
class Ball {
  // The constructor runs once, when you write new Ball(...).
  // x, y: position
  // c: color
  // r: size
  constructor(x, y, c, r) {
    // "this" means this particular ball. In Python it would be self.
    this.x = x;
    this.y = y;
    this.color = c;
    // Careful: circle() takes a diameter, not a radius.
    // We named it r anyway. We should have read the documentation.
    this.r = r;
  }

  // Does everything a ball does in one frame.
  change(byHowMuch) {
    this.changeSize(byHowMuch);
    this.move(byHowMuch);
    this.show();
  }

  // Nudges x and y a little bit every time it is called.
  move(byHowMuch) {
    this.x += random(-byHowMuch, byHowMuch);
    this.y += random(-byHowMuch, byHowMuch);
  }

  // Makes the ball a little bigger or smaller.
  // constrain() keeps the size between 2 and 50.
  changeSize(byHowMuch) {
    this.r = constrain(this.r + random(-byHowMuch, byHowMuch), 2, 50);
  }

  // Draws the ball. A ball has to be shown to be seen.
  // fill() sets the color, then circle() draws with it.
  show() {
    fill(this.color);
    circle(this.x, this.y, this.r);
  }
}
