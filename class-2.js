// Shape-person with colors.

function setup() {
  createCanvas(400, 400);
}

/* 
 * Plan out your script by first writing down what you need (eg. what shapes you want)
 * Then ***CHECK THE REFERENCE*** to see which functions will help you (eg. ellipse(), rect())
 * Write down the argument order for each function somewhere (eg. ellipse(x, y, w, h) then try using these functions.
 */
 
function draw() {
  // Setting different fill colors before each shape to color them all differently
  
  // Draw a "body" (rect(x, y, w, h))
  fill(50, 200, 50);
  rect(160, 50, 70, 150);
  
  // Draw a "face" (ellipse(x, y, w, h))
  // Face is drawn after body to place it in front of the body
  fill(200, 100, 200);
  ellipse(200, 50 ,100, 100);
  
  // Draw "legs" (line(x1, y1, x2, y2))
  // Setting line color with stroke()
  stroke(200, 200, 200);
  line(220, 200, 220, 300);
  stroke(220, 220, 220);
  line(160, 200, 160, 300);

}
