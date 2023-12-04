let sinInput1 = 0;
let sinInput2 = 0;

let buddy1;
let currentMode = 0;
let x = 0;
let y = 0;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvasContainer");

  buddy1 = new Buddy(width / 2 - 90, height / 2);
}
function draw() {
  background(255);

  if (currentMode == 0) {
    //Feature box
    push();
    fill(255, 219, 117);
    rect(400, 0, 100, 100);
    rect(400, 100, 100, 100);
    rect(400, 200, 100, 100);
    rect(400, 300, 100, 100);
    rect(400, 400, 100, 100);
    pop();
    //Next button
    push();
    fill(255, 219, 117);
    rect(330, 460, 70, 40);
    fill("black");
    textSize(20);
    text("Next", 345, 488);
    pop();
    //Body button
    push();
    fill(255, 219, 117);
    rect(330, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Body", 345, 28);
    pop();
    //body shape
    circle(450, 50, 50);
    rect(425, 125, 50, 50);
    triangle(450, 220, 420, 280, 480, 280);
    quad(420, 325, 480, 325, 465, 370, 435, 370);
    ellipse(450, 450, 40, 60);
  }
  if (currentMode == 1) {
    //Feature box
    push();
    fill(255, 219, 117);
    rect(400, 0, 100, 166);
    rect(400, 166, 100, 332);
    rect(400, 332, 100, 500);
    pop();
    //Next button
    push();
    fill(255, 219, 117);
    rect(330, 460, 70, 40);
    fill("black");
    textSize(20);
    text("Next", 345, 488);
    pop();
    //Back button
    push();
    fill(255, 219, 117);
    rect(0, 460, 70, 40);
    fill("black");
    textSize(20);
    text("Back", 10, 488);
    pop();
    //Body button
    push();
    fill(255, 219, 117);
    rect(330, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Arm", 345, 28);
    pop();
    //Arm shape
    ellipse(450, 80, 40, 70);
    rect(430, 210, 40, 70);
    circle(450, 420, 60);
  }
  if (currentMode == 2) {
    //Feature box
    push();
    fill(255, 219, 117);
    rect(400, 0, 100, 166);
    rect(400, 166, 100, 332);
    rect(400, 332, 100, 500);
    pop();
    //Next button
    push();
    fill(255, 219, 117);
    rect(330, 460, 70, 40);
    fill("black");
    textSize(20);
    text("Next", 345, 488);
    pop();
    //Back button
    push();
    fill(255, 219, 117);
    rect(0, 460, 70, 40);
    fill("black");
    textSize(20);
    text("Back", 10, 488);
    pop();
    //Body button
    push();
    fill(255, 219, 117);
    rect(330, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Leg", 345, 28);
    pop();
    //Leg shape
    ellipse(450, 80, 40, 70);
    rect(430, 210, 40, 70);
    circle(450, 420, 60);
  }
  if (currentMode == 3) {
    //Feature box
    push();
    fill(255, 219, 117);
    rect(400, 0, 100, 166);
    rect(400, 166, 100, 332);
    rect(400, 332, 100, 500);
    pop();
    //Save button
    push();
    fill(255, 219, 117);
    rect(330, 460, 70, 40);
    fill("black");
    textSize(20);
    text("Save", 342, 488);
    pop();
    //Back button
    push();
    fill(255, 219, 117);
    rect(0, 460, 70, 40);
    fill("black");
    textSize(20);
    text("Back", 10, 488);
    pop();
    //Body button
    push();
    fill(255, 219, 117);
    rect(330, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Head", 345, 28);
    pop(); 
    //Head shape
    ellipse(450, 80, 40, 70);
    rect(430, 210, 40, 70);
    triangle(450, 380, 420, 440, 480, 440);
  }

  buddy1.display();
  buddy1.update();
}

class Buddy {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = 130;

    this.bodyindex = 0;
    this.armindex = 0;
    this.legindex = 0;
    this.headindex = 0;

    this.upperarmangle = 226.4;
    this.lowerarmangle = 226;

    this.upperlegangle = 0;
    this.lowerlegangle = 0;
    this.footangle = 1.5;

    this.currentMode = 0;
  }
  update() {
    
    if (this.armindex == 1) {
      
    let sinValue1 = sin(sinInput1);
    let sinValue2 = sin(sinInput2);
    sinInput1 = sinInput1 + 0.04;
    sinInput2 = sinInput2 + 0.04;
    
    this.upperarmangle = map(sinValue1, -1, 1, 15, 13);
    this.lowerarmangle = map(sinValue2, -1, 1, 20, 18);
      
  } else if (this.armindex == 2) {
    
    let cosValue1 = cos(sinInput1);
    let cosValue2 = cos(sinInput2);
    sinInput1 = sinInput1 + 0.004;
    sinInput2 = sinInput2 + 0.08;
    
    this.upperarmangle = map(cosValue1, -1, 1, 8, 6);
    this.lowerarmangle = map(cosValue2, -1, 1, 10, 15);
    
  }else if (this.armindex == 3) {
    
    let cosValue1 = cos(sinInput1);
    let sinValue2 = sin(sinInput2);
    sinInput1 = sinInput1 + 0.02;
    sinInput2 = sinInput2 + 0.07;
    
    this.upperarmangle = map(cosValue1, -1, 1, 13, 15);
    this.lowerarmangle = map(sinValue2, -1, 1, 5, 10);
    
  }
  
  if (this.legindex == 1) {
      
    let sinValue1 = sin(sinInput1);
    let sinValue2 = sin(sinInput2);
    sinInput1 = sinInput1 + 0.04;
    sinInput2 = sinInput2 + 0.08;
    
    this.upperlegangle = map(sinValue1, -1, 1, 0, 1);
    this.lowerlegangle = map(sinValue2, -1, 1, -2, -1);
      
  } else if (this.legindex == 2) {
    
    let cosValue1 = cos(sinInput1);
    let cosValue2 = cos(sinInput2);
    sinInput1 = sinInput1 + 0.004;
    sinInput2 = sinInput2 + 0.000000000005;
    
    this.upperlegangle = map(cosValue1, -1, 1, -0.4, 0);
    this.lowerlegangle = map(cosValue2, -1, 1, 1.5, 0.4);
    
  }else if (this.legindex == 3) {
    
    let cosValue1 = cos(sinInput1);
    let sinValue2 = sin(sinInput2);
    sinInput1 = sinInput1 + 0.08;
    sinInput2 = sinInput2 + 0.04;
    
    this.upperlegangle = map(cosValue1, -1, 1, 0, 1);
    this.lowerlegangle = map(sinValue2, -1, 1, -1, 0);
    this.footangle = map(cosValue1, -1, 1, 0, 1);
    
  }
}
  display() {
    //body
    push();
    translate(this.x, this.y);
    if (this.bodyindex == 1) {
      let r1 = (180, 200);
      fill(120, 46, r1);
      this.body1();

      if (currentMode > 0) {
        this.drawArms(-60, -30, 60, -30);
      }

      if (currentMode > 1) {
        this.drawLegs(-30, 50, 30, 50);
      }
      if (currentMode > 2) {
        this.drawHeads(0, -70);
      }
    } else if (this.bodyindex == 2) {
      let r2 = (180, 255);
      fill(30, r2, 45);
      this.body2();
      this.lowerarmangle = 1;
      this.drawArms(-65, -40, 65, -40);
      this.drawLegs(-30, 55, 30, 55);
      this.drawHeads(0, -70);
    } else if (this.bodyindex == 3) {
      let r3 = (180, 255);
      fill(r3, 34, 45);
      this.body3();
      this.upperarmangle = 1;
      this.drawArms(-30, -10, 30, -10);
      this.drawLegs(-30, 60, 30, 60);
      this.drawHeads(0, -70);
    } else if (this.bodyindex == 4) {
      let r4 = (180, 255);
      fill(r4, 57, 132);
      this.body4();
      this.drawArms(-65, -10, 65, -10);
      this.drawLegs(-30, 55, 30, 55);
      this.drawHeads(0, -55);
    } else if (this.bodyindex == 5) {
      let r5 = (180, 255);
      fill(134, 231, r5);
      this.body5();
      this.upperarmangle = 0.4;
      this.drawArms(-40, -40, 40, -40);
      this.drawLegs(-25, 55, 25, 55);
      this.drawHeads(0, -80);
    }
    
    pop();
  }

  body1() {
    circle(0, 0, this.size);
  }
  body2() {
    rect(-this.size / 2, -this.size / 2, this.size, this.size);
  }
  body3() {
    triangle(-70, 70, 70, 70, 0, -70);
  }
  body4() {
    quad(-80, -50, 80, -50, 40, 60, -40, 60);
  }
  body5() {
    ellipse(0, 0, 100, 150);
  }

  drawArms(x1, y1, x2, y2) {
    if (this.armindex == 1) {
      this.arm1(x1, y1, x2, y2);
    } else if (this.armindex == 2) {
      this.arm2(x1, y1, x2, y2);
    } else if (this.armindex == 3) {
      this.arm3(x1, y1, x2, y2);
    }
  }

  drawLegs(x1, y1, x2, y2) {
    if (this.legindex == 1) {
      this.leg1(x1, y1, x2, y2);
    } else if (this.legindex == 2) {
      this.leg2(x1, y1, x2, y2);
    } else if (this.legindex == 3) {
      this.leg3(x1, y1, x2, y2);
    }
  }

  drawHeads(x1, y1, x2, y2) {
    if (this.headindex == 1) {
      this.head1(x1, y1, x2, y2);
    } else if (this.headindex == 2) {
      this.head2(x1, y1, x2, y2);
    } else if (this.headindex == 3) {
      this.head3(x1, y1, x2, y2);
    }
  }

  // drawLegs()

  arm1(x1, y1, x2, y2) {
    //upperarm LEFT
    push();
    // translate(-60, -30);
    translate(x1, y1);
    rotate(this.upperarmangle);
    ellipse(-5, 20, 30, 70);

    //lowerarm LEFT
    push();
    translate(-5, 40);
    rotate(this.lowerarmangle);
    ellipse(0, 15, 30, 60);
    pop();

    pop();

    //upperarm RIGHT
    push();
    translate(x2, y2);
    rotate(-this.upperarmangle);
    ellipse(5, 20, 30, 70);

    //lowerarm RIGHT
    push();
    translate(5, 40);
    rotate(-this.lowerarmangle);
    ellipse(0, 15, 30, 60);
    pop();

    pop();
  }

  arm2(x1, y1, x2, y2) {
    //upperarm LEFT
    push();
    translate(x1, y1);
    rotate(this.upperarmangle);
    rect(-15, 0, 30, 40);

    //lowerarm LEFT
    push();
    translate(0, 40);
    rotate(this.lowerarmangle);
    rect(-10, 0, 20, 40);
    pop();

    pop();

    //upperarm RIGHT
    push();
    translate(x2, y2);
    rotate(-this.upperarmangle);
    rect(-15, 0, 30, 40);

    //lowerarm RIGHT
    push();
    translate(0, 40);
    rotate(-this.lowerarmangle);
    rect(-10, 0, 20, 40);
    pop();

    pop();
  }

  arm3(x1, y1, x2, y2) {
    //upperarm LEFT
    push();
    translate(x1, y1);
    rotate(this.upperarmangle);
    circle(-10, 10, 60);
    //lowerarm LEFT
    push();
    translate(-10, 40);
    rotate(this.lowerarmangle);
    circle(-5, 10, 60);
    pop();

    pop();

    //upperarm Right
    push();
    translate(x2, y2);
    rotate(-this.upperarmangle);
    circle(10, 10, 60);

    //lowerarm Right
    push();
    translate(10, 40);
    rotate(-this.lowerarmangle);
    circle(-5, 10, 60);
    pop();

    pop();
  }

  leg1(x1, y1, x2, y2) {
    //Upperleg Left
    push();
    translate(x1, y1);
    rotate(this.upperlegangle);
    ellipse(0, 20, 30, 50);

    //Lowerleg Left
    push();
    translate(0, 40);
    rotate(this.lowerlegangle);
    ellipse(0, 10, 28, 40);

    //Foot left
    push();
    translate(0, 30);
    rotate(this.footangle);
    ellipse(0, 7, 20, 30);
    pop();

    pop();

    pop();

    //Upperleg Right
    push();
    translate(x2, y2);
    rotate(-this.upperlegangle);
    ellipse(0, 20, 30, 50);

    //Lowerleg Right
    push();
    translate(0, 40);
    rotate(-this.lowerlegangle);
    ellipse(0, 10, 28, 40);
    //Foot Right
    push();
    translate(0, 30);
    rotate(-this.footangle);
    ellipse(0, 7, 20, 30);
    pop();

    pop();

    pop();
  }

  leg2(x1, y1, x2, y2) {
    //Upperleg Left
    push();
    translate(x1, y1);
    rotate(this.upperlegangle);
    rect(-15, 0, 30, 40);

    //Lowerleg Left
    push();
    translate(0, 40);
    rotate(this.lowerlegangle);
    rect(-10, 0, 20, 30);

    //Foot left
    push();
    translate(0, 30);
    rotate(this.footangle);
    rect(-10, -8, 15, 25);
    pop();

    pop();

    pop();

    //Upperleg Right
    push();
    translate(x2, y2);
    rotate(-this.upperlegangle);
    rect(-15, 0, 30, 40);

    //Lowerleg Right
    push();
    translate(0, 40);
    rotate(-this.lowerlegangle);
    rect(-10, 0, 20, 30);

    //Foot Right
    push();
    translate(0, 30);
    rotate(-this.footangle);
    rect(-5, -8, 15, 25);
    pop();

    pop();

    pop();
  }

  leg3(x1, y1, x2, y2) {
    //Upperleg Left
    push();
    translate(x1, y1);
    rotate(this.upperlegangle);
    circle(-5, 10, 50);

    //Lowerleg Left
    push();
    translate(-10, 30);
    rotate(this.lowerlegangle);
    circle(0, 10, 40);

    //Foot left
    push();
    translate(0, 30);
    rotate(this.footangle);
    circle(5, 5, 20);
    pop();

    pop();

    pop();

    //Upperleg Right
    push();
    translate(x2, y2);
    rotate(-this.upperlegangle);
    circle(5, 10, 50);

    //Lowerleg Right
    push();
    translate(10, 30);
    rotate(-this.lowerlegangle);
    circle(0, 10, 40);

    //Foot Right
    push();
    translate(0, 30);
    rotate(this.footangle);
    circle(5, 5, 20);
    pop();

    pop();

    pop();
  }

  head1(x1, y1, x2, y2) {
    push();
    translate(x1, y1);
    circle(0, 0, 70);
    circle(-15, -10, 10);
    circle(15, -10, 10);
    line(-25, -20, -5, -15);
    line(5, -15, 25, -20);
    arc(0, 15, 25, 10, PI, PI * 2);
    pop();
  }

  head2(x1, y1, x2, y2) {
    push();
    translate(x1, y1);
    rect(-25, -25, 50, 50);
    circle(-10, -10, 10);
    circle(10, -10, 10);
    arc(0, 5, 20, 10, 0.2, PI - 0.2);
    pop();
  }

  head3(x1, y1, x2, y2) {
    push();
    translate(x1, y1);
    triangle(0, -50, -40, 20, 40, 20);
    circle(-10, -10, 10);
    circle(10, -10, 10);
    line(-25, -20, -5, -15);
    line(5, -15, 25, -20);
    arc(0, 5, 20, 10, 0.2, PI - 0.2);
    pop();
  }

  changebodyindex(idx) {
    this.bodyindex = idx;
  }
  changearmindex(idx) {
    this.armindex = idx;
  }
  changelegindex(idx) {
    this.legindex = idx;
  }
  changeheadindex(idx) {
    this.headindex = idx;
  }
}

function mousePressed() {
  if (mouseX < 400 && mouseX > 330 && mouseY < 500 && mouseY > 460) {
    if (currentMode < 3) {
      currentMode += 1;
    }
  }else if(mouseX < 70 && mouseX > 0 && mouseY < 500 && mouseY > 460){
    if (currentMode > 0) {
      currentMode -= 1;
    }
  }
  
  //body
  if (currentMode == 0) {
    if (mouseX < 500 && mouseX > 400 && mouseY < 100 && mouseY > 0) {
      buddy1.changebodyindex(1);
    } else if (mouseX < 500 && mouseX > 400 && mouseY < 200 && mouseY > 100) {
      buddy1.changebodyindex(2);
    } else if (mouseX < 500 && mouseX > 400 && mouseY < 300 && mouseY > 200) {
      buddy1.changebodyindex(3);
    } else if (mouseX < 500 && mouseX > 400 && mouseY < 400 && mouseY > 300) {
      buddy1.changebodyindex(4);
    } else if (mouseX < 500 && mouseX > 400 && mouseY < 500 && mouseY > 400) {
      buddy1.changebodyindex(5);
    }
  }

  //arm
  if (currentMode == 1) {
    if (mouseX < 500 && mouseX > 400 && mouseY < 166 && mouseY > 0) {
      buddy1.changearmindex(1);
    } else if (mouseX < 500 && mouseX > 400 && mouseY < 332 && mouseY > 166) {
      buddy1.changearmindex(2);
    } else if (mouseX < 500 && mouseX > 400 && mouseY < 500 && mouseY > 322) {
      buddy1.changearmindex(3);
    }
  }

  //leg
  if (currentMode == 2) {
    if (mouseX < 500 && mouseX > 400 && mouseY < 166 && mouseY > 0) {
      buddy1.changelegindex(1);
    } else if (mouseX < 500 && mouseX > 400 && mouseY < 332 && mouseY > 166) {
      buddy1.changelegindex(2);
    } else if (mouseX < 500 && mouseX > 400 && mouseY < 500 && mouseY > 322) {
      buddy1.changelegindex(3);
    }
  }

  //head
  if (currentMode == 3) {
    if (mouseX < 500 && mouseX > 400 && mouseY < 166 && mouseY > 0) {
      buddy1.changeheadindex(1);
    } else if (mouseX < 500 && mouseX > 400 && mouseY < 332 && mouseY > 166) {
      buddy1.changeheadindex(2);
    } else if (mouseX < 500 && mouseX > 400 && mouseY < 500 && mouseY > 332) {
      buddy1.changeheadindex(3);
    }
    //save
    if (mouseX < 400 && mouseX > 330 && mouseY < 500 && mouseY > 460) {
    saveCanvas(canvas, 'buddy', 'png');
  }
  }
}