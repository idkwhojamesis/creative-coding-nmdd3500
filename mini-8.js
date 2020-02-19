// Initial template by Ralph Vacca
function setup() {
  createCanvas(400, 400);
  
  //set angles to degrees
  angleMode(DEGREES);
  
  //plot shapes at center point instead of corner
  rectMode(CENTER);
  ellipseMode(CENTER);
}
var x = 0;
function draw() {
  // Setting rotation origin to the center of canvas. Honestly kind of confusing
  translate(width/2, height/2);
  
  // Spiral by rotating by an increasing number and moving (translating) the rotation point a little bit every loop
  rotate(x);
  translate(0,x/5);
  x = x+1;
  rect(0,0,100,100);
}
