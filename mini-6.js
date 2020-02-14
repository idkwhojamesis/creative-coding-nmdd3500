function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // This 'for' loop will run its code 4 times. Every loop, it adds 1 to a counter (from 0) and checks if the counter is still less than 4. 
  var tall = 20;
  var wide = 200;
  for (i=0;i<4;i++)
  {
    // We can use the counter (i) as a multiple to nudge the Y coordinate of each following rectangle down. tall + 10 moves it down one height's worth plus 10 pixels for spacing.
      rectY = ((tall+10) * i);
      rect(0,rectY,wide,tall);
  }
}
