function setup() {
  let canvas = createCanvas(900, 1000);
  canvas.parent("canvasContainer");
  background(220);

  for (let x = 0; x < height; x += 200) {
    for (let y = 0; y < width; y += 200) {
      noStroke();
      let r1 = random(0, 200);
      let r2 = random(0, 200);
      let r3 = random(0, 200);
      let r4 = random(0, 400);
      let r5 = random(0, 400);
      let r6 = random(0, 400);
      let r7 = random(390, 400);

      fill(r1, r2, r3);
      rect(x, y, 200, 200);

      push();
      translate(x + 100, y + 100);
      fill(r4, r5, r6);
      let innerW = random(1, 150);
      let margin = (0 - innerW) / 2;

      rect(margin, margin, innerW, innerW);
      fill(r7, 100, 80);
      circle(0, 0, 50);
      fill(r7, 150, 150);
      ellipse(-10, 15, 35, 28);

      fill(250);

      for (let dia = 80; dia > 2; dia -= 20) {
        let r = random(-60, 60);
        ellipse(r, r, dia, 20);
      }

      pop();
    }
  }
}


