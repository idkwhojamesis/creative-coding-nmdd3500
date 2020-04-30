
/* james park
/  prof. vacca
/  creative coding final project
/  29 apr 2020
*/ 

function preload() {
  font = loadFont('RobotoMono-Medium.ttf');
  sound = loadSound('nvrstop.mp3');
  lyrics = loadJSON('lyrics.json');
  tree = loadModel('tree.obj');
}

let playing;
let lyricLine;
function setup() {
  createCanvas(400, 400, WEBGL);
  textFont(font, 36);
  sound.setVolume(1);
  sound.loop();
  playing = true;
  amplitude = new p5.Amplitude();
  fft = new p5.FFT();
}

function draw() {
  background(0);
  textSize(15);
  textAlign(CENTER);
  // Mapping amplitude, used for both sound and color
  level = amplitude.getLevel();
  level = map(level, 0, 1, 0, 75);
  //progress bar
  var barProgress = map(sound.currentTime(),0,sound.duration(),0,100);
  fill(255);
  //lyrics
  getLyric(barProgress);
  text(lyricLine,0,150);
  // Click to pause, function specified below draw()
  if (playing) 
    text("[["+barProgress+"/100]]",0,170);
  else
    text("PAUSED",0,170);
  // Spheres grow with song progress + bounce to amplitude
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // amplitude can change visualization
  if (level > 18) {  
    // second visualization
    makeWaveform();
    fill(255,77,255,100);
  }
  else
    fill(0,60,0,20);
  sphere(100 + level);
  fill(0,200,13,100);
  model(tree.normalize());
  fill(77,77,255,100);
  sphere((barProgress) + level);
  // Fill back to white
  fill(255);
}

function mouseClicked() {
  if (playing) {
    sound.pause();
    playing = false;
  }
  else {
    sound.loop();
    playing = true;
  }
}

function getLyric(songTime) {
  var times = Object.keys(lyrics.lines);
  // round songtime; less precision but avoids skipping over
  var foo = songTime.toFixed(1);
  for (i = 0 ; i < times.length; i++) {
    var x = parseFloat(times[i]);
    x = x.toFixed(1);
   if (foo == x)
     lyricLine = lyrics.lines[times[i]];
  }
}

function makeWaveform() {
  let waveform = fft.waveform();
  beginShape();
  stroke(10);
  for (let i = 0; i < waveform.length; i++) {
    fill(255)
    let x = map(i, 0, waveform.length, -(width/2), width/2);
    let y = map( waveform[i], -1, 1, -(height/2), height/2);
    vertex(y,x);
  }
  endShape();
}
