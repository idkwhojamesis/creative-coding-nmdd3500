// Abstract self-portrait.

/*
 * For the glasses bridge it became a pain to adjust the
 * coordinates so I used two variables for X and Y below
 * to offset the whole curve by a set amount. 
 * Variables store data so it can be used and changed
 * repeatedly while staying in memory. 
 */
var off1 = -60;
var offY1 = 40;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Eyes
  // Thinner line with strokeWeight()
  strokeWeight(1);
  fill(100);
  quad(80,160,110,170,140,160,110,140);
  line(110,170,110,140);
  // Example of offsetting without variables. See how hard it was?
  quad(80+200,160,110+200,170,140+200,160,110+200,140);
  line(110+200,170,110+200,140);
  // Nose
  // Thiccening strokeWeight()
  strokeWeight(4);
  fill(200);
  // Custom nose shape
  beginShape();
  vertex(163,139);
  vertex(148,243);
  vertex(128,263);
  vertex(124,282);
  vertex(249,288);
  vertex(239,253);
  vertex(219,233);
  vertex(203,142);
  endShape();
  // Glasses
  line(0,150,150,140);
  // Fill happens at the curve if I dont do this
  noFill();
  curve(0,150,10,250,140,250,150,140);
  line(0,150,10,250);
  line(140,250,150,140);
  
  line(250-20,140,400-20,140);
  curve(250-20,140,260-20,240,390-20,250,400-20,140);
  line(390-20,250,400-20,140);
  line(250-20,140,260-20,240);
  
  // Using the two variables at the beginning to offset.
  curve(140+off1,300+offY1,200+off1,140+offY1,300+off1,140+offY1,380+off1,300+offY1);
  // Mouth
  // Crossing rect points
  strokeWeight(1);
  quad(154,325,229,313,186,364,220, 349);
  // Hair
  line(141,82,76,215);
  line(98,60,14,142);
  line(120,82,3,45);
  line(205,76,274,159);
  line(251,57,351,79);
  line(301,31,395,73);
}
