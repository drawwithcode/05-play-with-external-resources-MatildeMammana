var mySong;
var amp;
var gramm;
var note;

function preload(){
mySong = loadSound("./assets/bensound-allthat.mp3");
gramm = loadImage ("./assets/gramm.png");
note = loadImage ("./assets/notes.png")

}

function setup() {

  createCanvas (windowWidth, windowHeight);

  mySong.loop();
  amp = new p5.Amplitude();

}

function draw() {

  background(224,209,183);

  var vol= amp.getLevel();
  var dim= map(vol,0,1,width/30,width/15);

  image(gramm, windowWidth/2+20,70,500,500);
  image(note,width/2,height/2-200,15+dim,15+dim);
  image(note,width/2-100,height/2-200,15+dim,15+dim);
  image(note,width/2-180,height/2-170,15+dim,15+dim);
  image(note,width/2-280,height/2-120,15+dim,15+dim);
  image(note,width/2-360,height/2-200,15+dim,15+dim);

}
