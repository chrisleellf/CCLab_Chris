let instanceOfTaxi;
let secondTaxi;

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");

    instanceOfTaxi = new Taxi(100, 200, 3);
    secondTaxi = new Taxi(300, 200, 1);
}

function draw() {
  background(90, 120, 250);

  instanceOfTaxi.display();
  instanceOfTaxi.update();
  secondTaxi.display();
  secondTaxi.update();

}

class Taxi {
  constructor(startX, startY, s){ //always have this
    this.x = startX;
    this.y = startY;
    this.scaleFactor = s;
    this.w = 100;
    this.speed = random(-2, 2);
    this.col = [128, 150, 90];
  }
  display(){ //always have this
    push();
    translate(this.x, this.y);
    scale(this.scaleFactor);

    fill(this.col[0], this.col[1], this.col[2]);

    rect(0, 0, this.w, 30)

    pop();
  }
  update(){
    this.x = this.x + this.speed

    this.reappear();

  }

  reappear(){
    if(this.x > width){
      this.x = -this.w*this.scaleFactor;
    }else if(this.x < -this.w*this.scaleFactor){
      this.x = width;
    }
  }
}


