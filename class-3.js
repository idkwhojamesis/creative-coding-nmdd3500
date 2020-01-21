// Rough recreation of Session 3 portrait example.
// If you need to see the arguments for shape functions (eg. circle(x, y, diameter)), read the p5 reference. 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200,255,200);
  // Eyeballs
  fill(0);
  circle(150,100,100);
  // Right eyeball: 270-degree pie using arc() (read the reference)
  angleMode(DEGREES);
  arc(250,100,100,100,0,270,PIE);
  // Eye pupils
  fill(255);
  circle(150,100,50);
  circle(250,100,50);
  // Mouth
  // quad(x1, y1, x2, y2, x3, y3, x4, y4)
  fill(255, 220, 255);
  quad(120,200,280,200,300,300,100,300);
  // Nose
  fill(255,255,0);
  //rectMode(CENTER) draws my rect using the x,y arguments in rect as the center
  rectMode(CENTER);
  rect(200,180,100,100);
}
