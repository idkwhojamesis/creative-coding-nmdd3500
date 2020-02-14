// Making a grid but with skinny rects instead of lines

function setup() {
  createCanvas(500,500);
  // Slider
  slider = createSlider(4,20,10);
  slider.position(10,10);
  slider.style('width', '80px');
  // drawing rects from center to make grid placement a bit easier
  rectMode(CENTER);
}

function draw() {
  background(220);
  // rect width; sorry for weird name
  var tall = 5;
  // Separated grid width and height for non-square canvases, but making this work with non-square dimensions requires extra work
  var gridHeight = height/2;
  var gridWidth = width/2;
  var paddingWidth = (width - gridWidth)/2
  var paddingHeight = (height - gridHeight)/2
  // Setting my count to the slider value.
  var count = slider.value();
  // It actually looks pretty cool with Stroke on, like its weaving or knitting, its just less clean but try it out
  noStroke();
  for (i=0;i<=count;i++)
  {
      // Everytime we loop, this increases times i (the counter).
      rectY = (gridHeight/count) * i;
      rectX = (gridWidth/count) * i;
      // Now we use the above to move our new rects to their proper grid place. I first draw the rect for row, then one for column.
      rect(gridWidth,paddingHeight + rectY,gridWidth,tall);
      rect(paddingWidth + rectX,gridHeight,tall,gridHeight);
  }
}
