// CCLab Mini Project - 9.R Particles Template

let numShootingStars = 10; // Decide the initial number of particles.

let shootingStars = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasWrapper");

  // generate particles
  for (let i = 0; i < numShootingStars; i++) {
    shootingStars[i] = new ShootingStar(random(width), random(height));
  }
}

function draw() {
  background(250);

  // update and display
  // for (let i = 0; i < shootingStars.length; i++) {
  //   let s = shootingStars[i];
  //   s.update();
  //   s.display();
  // }

  for(let i = shootingStars.length - 1; i >=0; i--){
    let s = shootingStars[i];
    s.update();
    s.display();
  

  if(s.x > width || s.y > height){
    shootingStars.splice(i, 1);
  }
}
  
  if(shootingStars.length < 10){
    shootingStars.push(new ShootingStar(random(width), random(height)));
    }
  
  console.log(shootingStars.length);

}


class ShootingStar {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    // this.circlexpos = 0;
    // this.circleypos = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.dia = random(10, 15);
    this.colorred = random(36, 92);
    this.colorblue = random(47, 101);
    this.transparency = random(10, 250);
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
 
    this.x += this.xspeed;
    this.y += this.yspeed;

    this.xspeed = this.xspeed + 0.02
    this.yspeed = this.yspeed + 0.01
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    strokeWeight(2);
    line(0, 0, -10, -18);
    //arm
    line(-10, -18, -26, -22);
    line(-10, -18, 10, -18);
    //leg
    line(0, 0, 14, 28);
    line(0, 0, 15, 4);
    line(15, 4, 22, 15);
    //Parachute
    line(-10, -20, -30, -90);
    line(-10, -20, -5, -90);
    line(-10, -20, 20, -100);
    let r = random(100, 180);
    fill(35, r, 35);
    quad(40, -95, -60, -80, -50, -100, 20, -110);

    fill(this.colorred, this.colorblue, 204);
    circle(-10, -25, this.dia, this.transparency);
    pop();
  }
}
