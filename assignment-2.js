var dim = 400;

function setup() {
  createCanvas(dim, dim, WEBGL);
  angleMode(DEGREES);
}
function draw() {
  var sec = second();
  var min = minute();
  var hr = hour();
  // Minutes go from seconds color to black
  minColor = round(map(min,0,60,255,0));
  //print(minColor);
  background(40);
  // Torus with # of sides = hr
  fill(0,minColor,0);
  torus(150,10,hr,4);
  // Cone as seconds hand
  rotateZ(sec*6);
  rotateY(millis()/20);
  fill(0,255,0);
  cone(10,100,3, 3);
}
