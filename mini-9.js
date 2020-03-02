// Refer to p5.sound. I used currentTime() and duration() to make the visuals respond to sound length.

function preload() {
  font = loadFont('RobotoMono-Medium.ttf');
  sound = loadSound('nvrstop.mp3');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  textFont(font, 36);
  sound.setVolume(1);
  sound.play()
}

function draw() {
  background(180);
  textSize(15);
  print(sound.currentTime());
  print(sound.duration());
  textAlign(CENTER);
  var barProgress = map(sound.currentTime(),0,sound.duration(),0,100);
  text("...checking your vibes...",0,-10);
  text("[["+barProgress+"/100]]",0,10);
  noStroke();
  // Boxes
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(0,0,0,10);
  box(200);
  fill(0,200,0,100);
  box(barProgress * 2);
  // Fill back to white
  fill(255);
}
