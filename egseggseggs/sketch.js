console.log("js is linked!");

//Eggs        1    2    3
// let xArray = [40, 120, 200];
// let yArray = [140, 200, 90];

// let egg1;
// let egg2;

let eggBasket = [];
let numEggs = 3;

function setup(){   
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");
    
    //approach 1
    // egg1 = new Egg(random(width), random(height), random(0.3, 1));
    // egg2 = new Egg(random(width), random(height), random(0.3, 1));

    //approach 2
    // eggBasket[0] = new Egg(random(width), random(height), random(0.3, 1));
    // eggBasket[1] = new Egg(random(width), random(height), random(0.3, 1));
    // let newEgg = new Egg(random(width), random(height), random(0.3, 1));
    // eggBasket.push(newEgg);

    //approach 3
    for(let i = 0; i < numEggs; i++){
        let newEgg = new Egg(random(width), random(height), random(0.3, 1));
        eggBasket.push(newEgg);
    }
}

function draw() {
    background(120, 90, 230);

    // egg1.display();
    // egg2.display();

    for(let i = 0; i < eggBasket.length; i++){
        eggBasket[i].display();
    }

    }

class Egg{
    constructor(startX, startY, scaleFactor){
        this.x = startX;
        this.y = startY;
        this.s = scaleFactor;
    }

    display(){
        push();
        translate(this.x, this.y);
        scale(this.s);

        noStroke();
        fill(255, 200);
        arc(0, 0, 80, 80,  0,  PI);
        arc(0, 0, 80, 130, PI, 2*PI);


        pop();
    }
}

function mousePressed(){
    let newEgg = new Egg(mouseX, mouseY, random(0.3, 1));
    eggBasket.push(newEgg);
}