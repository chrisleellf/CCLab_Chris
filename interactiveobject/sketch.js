let faces = [];
let numFaces = 4;

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");

    for (let i = 0; i < numFaces; i++) {
        faces.push(new Face(random(width), random(height)));
    }

}

function draw() {
    background(180);

    for (let i = 0; i < faces.length; i++) {
        faces[i].update();
        faces[i].display();
    }

    // if(frameCount > 200){
    //     for (let i = 0; i < faces.length; i++) {
    //         faces[i].turnAngry();
    //     }
    // }
}

class Face {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.offsetX = 0;
        this.speed = random(0.01, 0.1);

        this.angleForSineRadians = random(0, 2*PI);

        this.normalcolor = color(220, 250, 90);
        this.angrycolor = color(255, 90, 29);

        this.c = this.normalcolor;
        this.r = 25;
        this.age = 0;
        this.ageToTurnAngry = random(15, 50);
        


    }
    update() {
        this.offsetX = map(sin(this.angleForSineRadians), -1, 1, -20, 20);

        this.angleForSineRadians += this.speed;

        this.age += 0.2;
        
        if(this.age > this.ageToTurnAngry){
            this.turnAngry();
        }
    }
    display() {
        push();
        translate(this.x + this.offsetX, this.y);

        noStroke();
        fill(this.c);
        circle(0, 0, 50);
        fill(0);
        circle(-10, -10, 5)
        circle(10, -10, 5)
        ellipse(0, 10, 8, 9)

        // text(floor(this.age), 0, 0);

        pop();
    }
    turnAngry(){
        this.c = this.angrycolor;
    }
    turnNormal(){
        this.c = this.normalcolor;
    }
    checkCilcked(){
        let distanceMouseFace = dist( mouseX, moseY, this.x, this.y);

        if(distanceMouseFace < this.r){

        }
    }

}

function mousePressed(){
    faces.push(new Face(mouseX, mouseY));

}