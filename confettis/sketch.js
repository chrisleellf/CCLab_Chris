let confettis = [];
let numConfetti = 3;

let backgroundHue = 0;

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");

    // for(let i = 0; i < numConfetti; i++){
    //     confettis.push(new Confetti(width/2, height/2)) 
    // }

    colorMode(HSB);
    backgroundHue = random(0, 360);

}

function draw() {
  background(backgroundHue, 10, 190);

  if(mouseIsPressed){
    for(let i = 0; i < numConfetti; i++){
    confettis.push(new Confetti(mouseX, mouseY));
}
}

//   confettis.push(new Confetti(width/2, height/2))
    console.log(confettis.length);

  for(let i = 0; i < confettis.length; i++){
    confettis[i].update();
    confettis[i].display();
  } 
while(confettis.length > 1000){

    let index = 0; // at which index to delete
    let numDelete = 1; // number of confettis to delete
    confettis.splice(index, numDelete);
  }
}

class Confetti{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.size = random(2, 10);
        this.speedX = random(-2, 2);
        this.speedY = random(-1, -3);

        this.hue = random(0, 360);
    }
    update(){
        // apply speeds to position
        this.x+=this.speedX;
        this.y+=this.speedY;

        // slowly change speeds
        // y slowly turns downward (positive)
        this.speedY = this.speedY + 0.1;
        // x slowly turn towards 0
        this.speedX = this.speedX * 0.99;

    } 
    display(){
        push();
        translate(this.x, this.y);
            fill(this.hue, 255, 255);
            noStroke();
            circle(0, 0, this.size);
        pop(); 
    }
}

function mousePressed(){
    for(let i = 0; i < numConfetti; i++){
        confettis.push(new Confetti(mouseX, mouseY)) 
    }
}
