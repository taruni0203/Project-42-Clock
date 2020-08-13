var hr,mn,sc;

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(0); 
  
  angleMode(DEGREES);
  translate(400,300);
  rotate(270);

  hr = hour();
  mn = minute();
  sc = second();

  push();
  translate(200,-350)
  rotate(90);
  textSize(20);
  stroke("white");
  fill("white");
  if(sc<10){
    text(hr + " : " + mn + " : 0" + sc,0,0);
  }
  else{
    text(hr + " : " + mn + " : " + sc,0,0);
  }
  pop();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr %12,0,12,0,360);

  noFill();
  strokeWeight(8);
  stroke("#ff6699")
  arc(0,0,420,420,0,scAngle);
  stroke("#66FF66")
  arc(0,0,390,390,0,mnAngle);
  stroke("#29e0ff")
  arc(0,0,360,360,0,hrAngle);

  push();
  rotate(scAngle);
  stroke("#ff6699");
  strokeWeight(2);
  line(0,0,150,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("#66FF66");
  strokeWeight(5);
  line(0,0,125,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("#29e0ff");
  strokeWeight(5);
  line(0,0,75,0);
  pop();

  drawSprites();
}