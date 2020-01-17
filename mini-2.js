// 4x4 grid with two circles and two squares.

function setup() {
  // Remember the canvas dimensions for laying out your grid lines.
  createCanvas(400, 400);
}

function draw() {
  // Make the grid by evenly spacing lines across the canvas.
  // Column lines (x1, y1, x2, y2) at half and quarter points of canvas
  // Set line color lol
  stroke(0, 255, 255);
  line(200, 0, 200, 400);
  line(100, 0, 100, 400);
  line(300, 0, 300, 400);
  // Row lines the same way
  line(0, 200, 400, 200);
  line(0, 100, 400, 100);
  line(0, 300, 400, 300);
  
  // Two circles (x, y, w, h)
  // Set fill color
  fill (255, 0, 0);
  ellipse(150, 50, 50, 50);
  ellipse(250, 50, 50, 50);
  
  // Two squares (x, y, w, h)
  // Set origin point to center with rectMode()
  rectMode(CENTER);
  // Set color to something
  fill(0, 255, 0);
  rect(150, 350, 50, 50);
  rect(250, 350, 50, 50);
  
}
