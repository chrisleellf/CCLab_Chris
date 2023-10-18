//Location
let x = 300;
let y = 600;

//Day and Night
let b = 0;
let Day = true;

//Sun and moon
let moonx = 0;
let suny = 0;
let speed = 0.5;

//SSP Movement
let sinInput = 0;
let shrink = 25;
let ySpeed = -0.5;

//Food
let xArray = [];
let yArray = [];
let radius = [];
let redValues = [];
let greenValues = [];
let blueValues = [];

//Spikes movement
let xmovement = [];
let ymovement = [];

//Stem
let yextend = 0;

let spikescolor = "blue";
let bodycolor = "red";

function setup() {
    let cnv = createCanvas(600, 600);
    cnv.parent("canvasWrapper");
}

function draw() {
  push();
  fill("brown");
  rect(0, 600, 70, 80);
  pop();
//Day and Night
  if (Day) {
    b += 0.21;
  } else {
    b -= 0.21;
  }
  background(b);

//Sun & Moon

  moonx = moonx + speed;
  if (moonx > width || moonx < 0) {
    speed = -speed;
  }
  if (moonx > width) {
    fill("orange");
    Day = false;
  }
  if (moonx < 0) {
    fill("white");
    Day = true;
    deletefood();
  }
  strokeWeight(5);
  circle(moonx, suny, 50);

//Energizer up and down motion
  y += ySpeed;
  if (y < 300) {
    y = 300;
    if ( y == 300){
    push();
    fill("red");
    textSize(15);
    text("Click anywhere to create food!", 350, 50);
        drawfood(xArray, yArray);
    pop();

    }
  }
  if (y > 600) {
    y = 600;
  }

  drawSSP(x, y);
  
  
//Ground
  push();
  strokeWeight(2);
  fill("brown");
  rect(0, 540, 600, 60);
  pop();
}
//This function is for the creature (Energizer)
function drawSSP(xpos, ypos) {
  push();
  noStroke();

  if(y == 300){
  // Spikes Stretch
  if (mouseIsPressed) {
    fill(spikescolor);
    triangle(mouseX, mouseY, xpos - 10, ypos, xpos + 10, ypos);
  }
  }

  // body
  translate(xpos, ypos);

  fill("blue");
  circle(0, 0, 30);

  sinInput = sinInput + 0.2;
  
  fill("green");
  strokeWeight(2);
  rect(-5, 15, 8, y);

  for (let i = 0; i < 12; i += 1) {
    let sinValue = sin(sinInput);
    let ypos = map(sinValue, -1, 1, shrink / 5, shrink);

    let r = random(0, 120)
    rotate(r);

    fill(spikescolor);
    triangle(0, ypos + 30, -10, ypos, 10, ypos);

    fill(bodycolor);
    circle(0, ypos, 30);

    if (moonx > width) {
      shrink = 10;
      spikescolor = "green";
      bodycolor = "purple";
      ySpeed = 0.5; // go down
    }
    
    if (moonx < 0) {
      shrink = 25;
      spikescolor = "blue";
      bodycolor = "red";
      ySpeed = -0.5; // go up
    }
  }
  pop();
}
//This funtion is for the food
function drawfood(xArray, yArray) {
  push();
  noStroke();
  for (let i = 0; i < xArray.length; i++) {
    let x = xArray[i];
    let y = yArray[i];

    fill(redValues[i], greenValues[i], blueValues[i]);
    circle(x, y, radius[i]);
  }
  pop();
}

function mousePressed() {
  if ( y == 300){
  xArray.push(mouseX);
  yArray.push(mouseY);
  xmovement.push(mouseX);
  xmovement.push(mouseY);

  radius.push(random(10, 40));
  redValues.push(random(255));
  greenValues.push(random(255));
  blueValues.push(random(255));
  }
}
//This function is for deleating food
function deletefood(){
    xArray = [];
    yArray = [];
    radius = [];
    redValues = [];
    greenValues = [];
    blueValues = [];
}