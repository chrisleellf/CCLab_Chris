let sinInput = 0;
let monster1;
let currentMode = 0;
let x = 0;
let y = 0;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvasContainer");

  monster1 = new Monster(width / 2, height / 2);
}

  function draw() {
    background(255);
  
    if( currentMode == 0){
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
    //Color & Color button
    push();
    fill(255, 219, 117);
    rect(0, 0, 100, 500);
    rect(100, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Color", 110, 25);
  
    strokeWeight(2);
    fill("red");
    circle(48, 45, 50);
    fill("blue");
    circle(48, 115, 50);
    fill("green");
    circle(48, 185, 50);
    fill("yellow");
    circle(48, 255, 50);
    fill("purple");
    circle(48, 325, 50);
    fill("orange");
    circle(48, 395, 50);
    fill("grey");
    circle(48, 465, 50);
    pop();
    //body shape
    circle(450, 50, 50);
    rect(425, 125, 50, 50);
    triangle(450, 220, 420, 280, 480, 280);
    quad(420, 325, 480, 325, 465, 370, 435, 370);
    ellipse(450, 450, 40, 60);
  
    monster1.display();
    monster1.update();
  }
    if( currentMode == 1){
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
    //Body button
    push();
    fill(255, 219, 117);
    rect(330, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Arm", 345, 28);
    pop();
    //Color & Color button
    push();
    fill(255, 219, 117);
    rect(0, 0, 100, 500);
    rect(100, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Color", 110, 25);
  
    strokeWeight(2);
    fill("red");
    circle(48, 45, 50);
    fill("blue");
    circle(48, 115, 50);
    fill("green");
    circle(48, 185, 50);
    fill("yellow");
    circle(48, 255, 50);
    fill("purple");
    circle(48, 325, 50);
    fill("orange");
    circle(48, 395, 50);
    fill("grey");
    circle(48, 465, 50);
    pop();
    //Arm shape
    ellipse(450, 80, 40, 70);
    rect(430, 210, 40, 70);
    circle(450, 420, 60);
    }
    if ( currentMode == 2){
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
    //Body button
    push();
    fill(255, 219, 117);
    rect(330, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Leg", 345, 28);
    pop();
    //Color & Color button
    push();
    fill(255, 219, 117);
    rect(0, 0, 100, 500);
    rect(100, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Color", 110, 25);
  
    strokeWeight(2);
    fill("red");
    circle(48, 45, 50);
    fill("blue");
    circle(48, 115, 50);
    fill("green");
    circle(48, 185, 50);
    fill("yellow");
    circle(48, 255, 50);
    fill("purple");
    circle(48, 325, 50);
    fill("orange");
    circle(48, 395, 50);
    fill("grey");
    circle(48, 465, 50);
    pop();
    //Leg shape
    ellipse(450, 80, 40, 70);
    rect(430, 210, 40, 70);
    circle(450, 420, 60);
    }
    if ( currentMode == 3){
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
    text("Stop", 345, 488);
    pop();
    //Body button
    push();
    fill(255, 219, 117);
    rect(330, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Head", 345, 28);
    pop();
    //Color & Color button
    push();
    fill(255, 219, 117);
    rect(0, 0, 100, 500);
    rect(100, 0, 70, 40);
    fill("black");
    textSize(20);
    text("Color", 110, 25);
  
    strokeWeight(2);
    fill("red");
    circle(48, 45, 50);
    fill("blue");
    circle(48, 115, 50);
    fill("green");
    circle(48, 185, 50);
    fill("yellow");
    circle(48, 255, 50);
    fill("purple");
    circle(48, 325, 50);
    fill("orange");
    circle(48, 395, 50);
    fill("grey");
    circle(48, 465, 50);
    pop();
    //Head shape
    ellipse(450, 80, 40, 70);
    rect(430, 210, 40, 70);
    triangle(450, 380, 420, 440, 480, 440);
    }
    
    }
  
    
  
  class Monster {
    constructor(startX, startY) {
      this.x = startX;
      this.y = startY;
      this.size = 130;
      
      this.bodyindex = 5;
      this.armindex = 1;
      this.legindex = 1;
      this.headindex = 1;
      
      this.upperarmangle = 226.4;
      this.lowerarmangle = 226;
      
      this.upperlegangle = 0;
      this.lowerlegangle = 0;
      this.footangle = 1.5;
      
      this.currentMode = 0;
    }
    update() {
      
  //     //x-movements
  //     if(this.armindex == 1){
  //       let sinValue = sin(sinInput);
  //       sinInput = sinInput + 0.02;
        
  //       this.x = map(sinValue, -1, 1, 200, 300);
  //     }
  //      if(this.armindex == 2){
  //       let cosValue = cos(sinInput);
  //       sinInput = sinInput + 0.04;
         
  //       this.x = map(cosValue, -1, 1, 200, 300);
  //     }
  //     //y-movements
  //     if(this.legindex == 1){
  //       let sinValue = sin(sinInput);
  //       sinInput = sinInput + 0.02;
        
  //       this.y = map(sinValue, -1, 1, 250, 280);
  //     }
  //     if(this.legindex == 2){
  //       let cosValue = cos(sinInput);
  //       sinInput = sinInput + 0.04;
         
  //       this.y = map(cosValue, -1, 1, 230, 300);
  //     }
      
      
    }
    display() {
      //body
      push();
      translate(this.x, this.y);
      if (this.bodyindex == 1) {
        this.body1();
        this.drawArms(-60, -30, 60, -30);
        this.drawLegs(-30, 50, 30, 50);
        this.drawHeads(0, -70);
        
      } else if (this.bodyindex == 2) {
        this.body2();
        this.lowerarmangle = 1;
        this.drawArms(-65, -40, 65, -40);
        this.drawLegs(-30, 55, 30, 55);
        this.drawHeads(0, -70);
        
      } else if (this.bodyindex == 3) {
        this.body3();
        this.upperarmangle = 1;
        this.drawArms(-30, -10, 30, -10);
        this.drawLegs(-30, 60, 30, 60);
        this.drawHeads(0, -70);
        
      } else if (this.bodyindex == 4) {
        this.body4();
        this.drawArms(-65, -10, 65, -10);
        this.drawLegs(-30, 55, 30, 55);
        this.drawHeads(0, -55);
        
      } else if (this.bodyindex == 5) {
        this.body5();
        this.upperarmangle = 0.4;
        this.drawArms(-40, -40, 40, -40);
        this.drawLegs(-25, 55, 25, 55);
        this.drawHeads(0, -80);
      }
  
      fill("green");
      circle(0, 0, 20);
      pop();
    }
  
    body1() {
      circle(0, 0, this.size);
    }
    body2(){
      rect(-this.size/2, -this.size/2 , this.size, this.size);
  
    }
    body3(){
      triangle(-70, 70, 70, 70, 0, -70)
      
    }
    body4(){
      quad(-80, -50, 80, -50, 40, 60, -40, 60);
    }
    body5(){
      ellipse(0, 0, 100, 150);
    }
  
    drawArms(x1, y1, x2, y2){
      if( this.armindex == 1){
        this.arm1(x1, y1, x2, y2);
      }else  if( this.armindex == 2){
        this.arm2(x1, y1, x2, y2);
      }else  if( this.armindex == 3){
        this.arm3(x1, y1, x2, y2);
      }
    }
    
    drawLegs(x1, y1, x2, y2){
      if( this.legindex == 1){
        this.leg1(x1, y1, x2, y2);
      }else if( this.legindex == 2){
        this.leg2(x1, y1, x2, y2);
      }else if( this.legindex == 3){
        this.leg3(x1, y1, x2, y2);
      } 
    }
    
    drawHeads(x1, y1, x2, y2){
      if( this.headindex == 1){
        this.head1(x1, y1, x2, y2);
      }else if( this.headindex == 2){
        this.head2(x1, y1, x2, y2);
      }else if( this.headindex == 3){
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
      fill("red");
      circle(0, 0, 5);
  
      //lowerarm LEFT
      push();
      translate(-5, 50);
      rotate(this.lowerarmangle);
      fill("white");
      ellipse(0, 10, 30, 60);
      fill("red");
      circle(0, 0, 5);
      pop();
  
      pop();
  
      //upperarm RIGHT
      push();
      translate(x2, y2);
      rotate(-this.upperarmangle);
      ellipse(5, 20, 30, 70);
      fill("red");
      circle(0, 0, 5);
  
      //lowerarm RIGHT
      push();
      translate(5, 50);
      rotate(-this.lowerarmangle);
      fill("white");
      ellipse(0, 10, 30, 60);
      fill("red");
      circle(0, 0, 5);
      pop();
  
      pop();
    }
  
    arm2(x1, y1, x2, y2) {
      //upperarm LEFT
      push();
      translate(x1, y1);
      rotate(this.upperarmangle);
      rect(-15, 0, 30, 40);
      fill("red");
      circle(0, 0, 5);
  
      //lowerarm LEFT
      push();
      translate(0, 40);
      rotate(this.lowerarmangle);
      fill("white");
      rect(-10, 0, 20, 40);
      fill("red");
      circle(0, 0, 5);
      pop();
  
      pop();
  
      //upperarm RIGHT
      push();
      translate(x2, y2);
      rotate(-this.upperarmangle);
      rect(-15, 0, 30, 40);
      fill("red");
      circle(0, 0, 5);
  
      //lowerarm RIGHT
      push();
      translate(0, 40);
      rotate(-this.lowerarmangle);
      fill("white");
      rect(-10, 0, 20, 40);
      fill("red");
      circle(0, 0, 5);
      pop();
  
      pop();
    }
    
    arm3(x1, y1, x2, y2) {
      //upperarm LEFT
      push();
      translate(x1, y1);
      rotate(this.upperarmangle);
      circle(-10, 10, 60);
      fill("red");
      circle(0, 0, 5);
  
      //lowerarm LEFT
      push();
      translate(-10, 40);
      rotate(this.lowerarmangle);
      fill("white");
      circle(-5, 10, 60);
      fill("red");
      circle(0, 0, 5);
      pop();
  
      pop();
  
      //upperarm Right
      push();
      translate(x2, y2);
      rotate(-this.upperarmangle);
      circle(10, 10, 60);
      fill("red");
      circle(0, 0, 5);
  
      //lowerarm Right
      push();
      translate(10, 40);
      rotate(-this.lowerarmangle);
      fill("white");
      circle(-5, 10, 60);
      fill("red");
      circle(0, 0, 5);
      pop();
  
      pop();
    }
    
    leg1(x1, y1, x2, y2){
      //Upperleg Left
      push();
      translate(x1, y1);
      rotate(this.upperlegangle);
      ellipse(0, 20, 30, 50);
      fill("red");
      circle(0, 0, 5);
  
      //Lowerleg Left
      push();
      translate(0, 40);
      rotate(this.lowerlegangle);
      fill("white");
      ellipse(0, 10, 28, 40);
      fill("red");
      circle(0, 0, 5);
  
      //Foot left
      push();
      translate(0, 30);
      rotate(this.footangle);
      fill("white");
      ellipse(0, 7, 20, 30);
      fill("red");
      circle(0, 0, 5);
      pop();
  
      pop();
  
      pop();
  
      //Upperleg Right
      push();
      translate(x2, y2);
      rotate(-this.upperlegangle);
      ellipse(0, 20, 30, 50);
      fill("red");
      circle(0, 0, 5);
  
      //Lowerleg Right
      push();
      translate(0, 40);
      rotate(-this.lowerlegangle);
      fill("white");
      ellipse(0, 10, 28, 40);
      fill("red");
      circle(0, 0, 5);
  
      //Foot Right
      push();
      translate(0, 30);
      rotate(-this.footangle);
      fill("white");
      ellipse(0, 7, 20, 30);
      fill("red");
      circle(0, 0, 5);
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
      fill("red");
      circle(0, 0, 5);
  
      //Lowerleg Left
      push();
      translate(0, 40);
      rotate(this.lowerlegangle);
      fill("white");
      rect(-10, 0, 20, 30)
      fill("red");
      circle(0, 0, 5);
  
      //Foot left
      push();
      translate(0, 30);
      rotate(this.footangle);
      fill("white");
      rect(-10, -8, 15, 25);
      fill("red");
      circle(0, 0, 5);
      pop();
  
      pop();
  
      pop();
  
      //Upperleg Right
      push();
      translate(x2, y2);
      rotate(-this.upperlegangle);
      rect(-15, 0, 30, 40);
      fill("red");
      circle(0, 0, 5);
  
      //Lowerleg Right
      push();
      translate(0, 40);
      rotate(-this.lowerlegangle);
      fill("white");
      rect(-10, 0, 20, 30)
      fill("red");
      circle(0, 0, 5);
  
      //Foot Right
      push();
      translate(0, 30);
      rotate(-this.footangle);
      fill("white");
      rect(-5, -8, 15, 25);
      fill("red");
      circle(0, 0, 5);
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
      fill("red");
      circle(0, 0, 5);
  
      //Lowerleg Left
      push();
      translate(-10, 30);
      rotate(this.lowerlegangle);
      fill("white");
      circle(0, 10, 40);
      fill("red");
      circle(0, 0, 5);
  
      //Foot left
      push();
      translate(0, 30);
      rotate(this.footangle);
      fill("white");
      circle(5, 5, 20);
      fill("red");
      circle(0, 0, 5);
      pop();
  
      pop();
  
      pop();
  
      //Upperleg Right
      push();
      translate(x2, y2);
      rotate(-this.upperlegangle);
      circle(5, 10, 50);
      fill("red");
      circle(0, 0, 5);
  
      //Lowerleg Right
      push();
      translate(10, 30);
      rotate(-this.lowerlegangle);
      fill("white");
      circle(0, 10, 40);
      fill("red");
      circle(0, 0, 5);
  
      //Foot Right
      push();
      translate(0, 30);
      rotate(this.footangle);
      fill("white");
      circle(5, 5, 20);
      fill("red");
      circle(0, 0, 5);
      pop();
  
      pop();
  
      pop();
    }
    
    head1(x1, y1, x2, y2){
      push();
      translate(x1, y1);
      circle(0, 0, 70);
      circle(-15, -10, 10);
      circle(15, -10, 10);
      line(-25, -20, -5, -15);
      line(5, -15, 25, -20);
      arc(0, 15, 25, 10,  PI, PI*2);
      pop();
    }
    
    head2(x1, y1, x2, y2){
      push();
      translate(x1, y1);
      rect(-25, -25, 50, 50);
      circle(-10, -10, 10);
      circle(10, -10, 10);
      arc(0, 5, 20, 10, 0.2, PI - 0.2);
      pop();
    }
    
    head3(x1, y1, x2, y2){
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
    if( mouseX < 400 && mouseX > 330 && mouseY < 500 && mouseY > 460){
      currentMode += 1;
    }
    //body
    if( mouseX < 500 && mouseX > 400 && mouseY < 100 && mouseY > 0){
      monster1.changebodyindex(1);
    }else if( mouseX < 500 && mouseX > 400 && mouseY < 200 && mouseY > 100){
      monster1.changebodyindex(2);
    }else if( mouseX < 500 && mouseX > 400 && mouseY < 300 && mouseY > 200){
      monster1.changebodyindex(3);
    }else if( mouseX < 500 && mouseX > 400 && mouseY < 400 && mouseY > 300){
      monster1.changebodyindex(4);
    }else if( mouseX < 500 && mouseX > 400 && mouseY < 500 && mouseY > 400){
      monster1.changebodyindex(5);
    } 
    
    monster1.changearmindex(3);
    monster1.changelegindex(3);
    monster1.changeheadindex(3);
  }