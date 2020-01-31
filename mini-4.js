var dim = 400;

function setup() {
  createCanvas(dim, dim, WEBGL);
  angleMode(DEGREES);
}
function draw() {
  // Time variables are assigned in draw() to update them every frame.
  var sec = second();
  var min = minute();
  var hr = hour();
  // Minutes go from seconds color to black
  minColor = round(map(min,0,60,255,0));
  //print(minColor);
  background(100);
  // Torus with # of sides = hr
  fill(0,minColor,0);
  torus(150,10,hr+1,4);
  // Cone as seconds hand
  rotateZ(sec*6);
  rotateY(millis()/50);
  fill(0,255,0);
  cone(10,100,3, 3);
}
