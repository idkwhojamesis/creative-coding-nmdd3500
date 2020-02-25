let slider; // # of rects
let slider1; // Rotation speed
let slider2; // Degrees of separation
let x = 0;
let minWidth = 20;
let maxWidth = 150;
function setup() {
  createCanvas(400, 400);
  // Setup sliders 
  slider = createSlider(0,10,8);
  slider.position(10, 10);
  slider.style('width', '80px');
  slider1 = createSlider(0,10,0);
  slider1.position(10, 40);
  slider1.style('width', '80px');
  slider2 = createSlider(0,90,45);
  slider2.position(10, 70);
  slider2.style('width', '80px');
  //rectMode(CENTER);
  angleMode(DEGREES);
}
function draw() {
  background(220);
  circle (200,200,5);
  translate(width/2, height/2);
  // Replace random val w actual amplitude
  var amplitude = (random(0,100));
  var barWidth = map(amplitude,0,100,20,150);
  var barColor = map(amplitude,0,100,100,255);
  rotate(x);
  noStroke();
  fill(barColor,0,0);
  for (let i = 0; i < slider.value(); i++)
  {
    //translate(10,0);
    rect (0,0,10,barWidth);
    rotate(slider2.value());
  }
  x += slider1.value();
}
