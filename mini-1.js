// Print message and color it.
/*
 * Code is almost always read from top to bottom, like a script for a movie.
 * A single text file of code, like this, is called a script. Each line is  
 * read in order, so if you specify something later that contradicts an earlier  
 * statement, you override your earlier statement (e.g. if you write that 
 * LightIsOn = True, and at the next line you write that LightIsOn = False,
 * LightIsOn is now False after reading both lines in order).
 */

/* 
 * p5 scripts start with a setup() function that runs once 
 * through, to setup the canvas to be drawn on and 
 * to run any setting-up code you write inside it.
 * Other examples will have code before setup(), this
 * stuff is mostly specifying variables for use later
 * inside your 'actual' code.
 */
function setup() {
  // Create canvas of (x, y) pixels
  createCanvas(400, 400);
}

/* 
 * p5 draws on your canvas using the draw() function.
 * This runs in a loop, top to bottom (after which it re-starts
 * from the top) until you stop the program. When a video game
 * runs at 60 frames per second, it is running through draw() (or an
 * equivalent in other languages) 60 times ('frames') per second.
 * Your computer is actually doing this right now to 'draw' whatever you're
 * looking at, and this is how things animate/change/react over time.
 */
function draw() {
  // Background color on canvas (r, g, b)
  background(0, 100, 100);
  // Set fill color for text (r, g, b)
  fill(0, 200, 100);
  // Display text at coordinate location on canvas ("message", x, y)
  text("My name is James", 10, 30);
}
