function setup() {
  var deathgame = createCanvas(780, 700);
  deathgame.parent("DeathGame");
  frameRate(30);
}
new p5();
let guessedState = 0;
let resultState = 0;
let color = "#705a92";

function death(DeathPosX, DeathPosY, DeathScale) {
  var xDeath = DeathPosX; //400
  var yDeath = DeathPosY; //380
  var scaleDeath = DeathScale; //0.8

  //BODY
  noStroke();
  fill(color);
  beginShape();
  curveVertex(xDeath - 30 * scaleDeath, yDeath - 145 * scaleDeath);
  curveVertex(xDeath - 10 * scaleDeath, yDeath - 130 * scaleDeath);
  curveVertex(xDeath + 10 * scaleDeath, yDeath - 125 * scaleDeath);
  curveVertex(xDeath + 30 * scaleDeath, yDeath - 115 * scaleDeath);
  curveVertex(xDeath + 50 * scaleDeath, yDeath - 95 * scaleDeath);
  curveVertex(xDeath + 60 * scaleDeath, yDeath - 75 * scaleDeath);
  curveVertex(xDeath + 70 * scaleDeath, yDeath - 45 * scaleDeath);
  curveVertex(xDeath + 60 * scaleDeath, yDeath - 15 * scaleDeath);
  curveVertex(xDeath + 40 * scaleDeath, yDeath + 5 * scaleDeath);
  curveVertex(xDeath + 30 * scaleDeath, yDeath + 15 * scaleDeath);
  curveVertex(xDeath + 35 * scaleDeath, yDeath + 20 * scaleDeath);
  curveVertex(xDeath + 35 * scaleDeath, yDeath + 20 * scaleDeath);
  curveVertex(xDeath + 55 * scaleDeath, yDeath + 50 * scaleDeath);
  curveVertex(xDeath + 75 * scaleDeath, yDeath + 100 * scaleDeath);
  curveVertex(xDeath + 85 * scaleDeath, yDeath + 190 * scaleDeath);
  curveVertex(xDeath + 45 * scaleDeath, yDeath + 180 * scaleDeath);
  curveVertex(xDeath + 5 * scaleDeath, yDeath + 190 * scaleDeath);
  curveVertex(xDeath - 35 * scaleDeath, yDeath + 180 * scaleDeath);
  curveVertex(xDeath - 75 * scaleDeath, yDeath + 190 * scaleDeath);
  curveVertex(xDeath - 15 * scaleDeath, yDeath + 180 * scaleDeath);
  curveVertex(xDeath - 145 * scaleDeath, yDeath + 190 * scaleDeath);
  curveVertex(xDeath - 140 * scaleDeath, yDeath + 100 * scaleDeath);
  curveVertex(xDeath - 125 * scaleDeath, yDeath + 50 * scaleDeath);
  curveVertex(xDeath - 100 * scaleDeath, yDeath + 20 * scaleDeath);
  curveVertex(xDeath - 95 * scaleDeath, yDeath + 15 * scaleDeath);
  curveVertex(xDeath - 110 * scaleDeath, yDeath); //
  curveVertex(xDeath - 125 * scaleDeath, yDeath - 20 * scaleDeath);
  curveVertex(xDeath - 135 * scaleDeath, yDeath - 40 * scaleDeath);
  curveVertex(xDeath - 125 * scaleDeath, yDeath - 70 * scaleDeath);
  curveVertex(xDeath - 110 * scaleDeath, yDeath - 100 * scaleDeath);
  curveVertex(xDeath - 92 * scaleDeath, yDeath - 115 * scaleDeath);
  curveVertex(xDeath - 72 * scaleDeath, yDeath - 125 * scaleDeath);
  curveVertex(xDeath - 52 * scaleDeath, yDeath - 131 * scaleDeath);
  endShape(CLOSE);

  //Face
  fill("#fff");
  rect(
    xDeath - 100 * scaleDeath,
    yDeath - 100 * scaleDeath,
    140 * scaleDeath,
    100 * scaleDeath,
    50 * scaleDeath
  );
  rect(
    xDeath - 60 * scaleDeath,
    yDeath - 25 * scaleDeath,
    20 * scaleDeath,
    40 * scaleDeath,
    10 * scaleDeath
  );
  rect(
    xDeath - 40 * scaleDeath,
    yDeath - 25 * scaleDeath,
    20 * scaleDeath,
    40 * scaleDeath,
    10 * scaleDeath
  );
  rect(
    xDeath - 20 * scaleDeath,
    yDeath - 25 * scaleDeath,
    20 * scaleDeath,
    40 * scaleDeath,
    10 * scaleDeath
  );

  fill("#000");
  ellipse(
    xDeath - 10 * scaleDeath,
    yDeath - 40 * scaleDeath,
    20 * scaleDeath,
    30 * scaleDeath
  );
  ellipse(
    xDeath - 50 * scaleDeath,
    yDeath - 40 * scaleDeath,
    20 * scaleDeath,
    30 * scaleDeath
  );

  fill("#e9caeb");
  ellipse(
    xDeath - 65 * scaleDeath,
    yDeath - 20 * scaleDeath,
    20 * scaleDeath,
    10 * scaleDeath
  );
  ellipse(
    xDeath + 5 * scaleDeath,
    yDeath - 20 * scaleDeath,
    20 * scaleDeath,
    10 * scaleDeath
  );

  //Hands
  fill(color); //#0c0017
  circle(xDeath + 70 * scaleDeath, yDeath + 50 * scaleDeath, 20 * scaleDeath);
  circle(xDeath - 140 * scaleDeath, yDeath + 50 * scaleDeath, 20 * scaleDeath);
}

let xGun = 100;
let yGun = 100;

function pistole(xGun, yGun) {
  fill(color);
  rect(xGun + 300, yGun, 280, 20);
  rect(xGun + 300, yGun + 20, 250, 20);
  rect(xGun + 300, yGun + 40, 280, 20);
  rect(xGun + 320, yGun + 70, 260, 10);
  rect(xGun + 330, yGun + 80, 240, 10);
  rect(xGun + 480, yGun + 80, 70, 100);
  rect(xGun + 520, yGun - 30, 40, 30);
  stroke(color);
  noFill();
  strokeWeight(15);
  arc(xGun + 480, yGun + 90, xGun, yGun - 20, HALF_PI, PI);
}

let colorLife = color;
let colorDie = color;

function life(colorLife) {
  fill("white");
  strokeWeight(5);
  stroke(colorLife);
  circle(230, 450, 50);
  noStroke();
  fill(colorLife);
  textSize(80);
  text("❤", 192, 483);
}

function die(colorDie) {
  fill("white");
  strokeWeight(5);
  stroke(colorDie);
  circle(530, 450, 50);
  fill(colorDie);
  textSize(80);
  text("✝", 507, 480);
}

function resultDie() {
  fill(color);
  rect(200, 126, 200, 5);
  rect(200, 131, 100, 100);
  fill("white");
  textSize(100);
  text("✝", 220, 215);
}

function resultLife() {
  fill(color);
  rect(200, 126, 200, 5);
  rect(200, 131, 100, 100);
  fill("white");
  textSize(80);
  text("❤", 212, 215);
}

function mousePressed() {
  if (resultState === 0) {
    //Guess Life
    if (
      (guessedState === 0 &&
        mouseX >= 150 &&
        mouseX <= 280 &&
        mouseY >= 390 &&
        mouseY <= 500) ||
      (guessedState === 2 &&
        mouseX >= 150 &&
        mouseX <= 280 &&
        mouseY >= 390 &&
        mouseY <= 500)
    ) {
      guessedState = 1;
    }

    //Guess Die
    if (
      (guessedState === 0 &&
        mouseX >= 470 &&
        mouseX <= 580 &&
        mouseY >= 390 &&
        mouseY <= 500) ||
      (guessedState === 1 &&
        mouseX >= 470 &&
        mouseX <= 580 &&
        mouseY >= 390 &&
        mouseY <= 500)
    ) {
      guessedState = 2;
    }
    console.log(guessedState);
  }

  if (
    resultState != 0 &&
    guessedState != 0 &&
    mouseX >= 330 &&
    mouseX <= 430 &&
    mouseY >= 500 &&
    mouseY <= 600
  ) {
    clear();
    resultState = 0;
    guessedState = 0;
  }

  if (
    guessedState != 0 &&
    resultState === 0 &&
    mouseX >= 400 &&
    mouseX <= 690 &&
    mouseY >= 80 &&
    mouseY <= 280
  ) {
    resultState = round(random(1, 2));
  }

  console.log(resultState);
}

var xDeath = 400;
var yDeath = 380;

function draw() {
 background("black");
  death(xDeath, 490, 0.6); //DEATH

  fill("black");
  stroke(color);
  rect(230, 600, 300, 50);

  noStroke();
  pistole(xGun, yGun);
  life(colorLife);
  die(colorDie);

  noStroke();
  textSize(20);
  fill("white");
  if (guessedState === 0 && resultState === 0) {
    text("Do you think it will kill you?", 255, 633);
  }

  if (
    (guessedState === 1 && resultState === 0) ||
    (guessedState === 2 && resultState === 0)
  ) {
    text("Nice Guess, now shot!", 255, 633);
  }

  if (guessedState === 1 && resultState === 1) {
    text("Right, you can life", 255, 633);
    resultLife();
  }

  if (guessedState === 1 && resultState === 2) {
    text("Ohhh, you failed.. and died!", 255, 633);
    resultDie();
  }

  if (guessedState === 2 && resultState === 1) {
    text("You failed.. stay alive!", 255, 633);
    resultLife();
  }
  if (guessedState === 2 && resultState === 2) {
    text("YEAH! You died!!!", 255, 633);
    resultDie();
  }

  if (
    (mouseX >= 150 &&
      mouseX <= 280 &&
      mouseY >= 390 &&
      mouseY <= 500 &&
      guessedState === 0) ||
    guessedState === 1
  ) {
    colorLife = "black";
  } else {
    colorLife = color;
  }

  if (
    (mouseX >= 470 &&
      mouseX <= 580 &&
      mouseY >= 390 &&
      mouseY <= 500 &&
      guessedState === 0) ||
    guessedState === 2
  ) {
    colorDie = "black";
  } else {
    colorDie = color;
  }

  if (resultState != 0 && guessedState != 0) {
    fill("white");
    circle(381, 551, 45);
    fill("black");
    circle(380, 550, 45);
    fill("white");
    textSize(20);
    textAlign(CENTER);
    text("AGAIN?", 380, 555);
    textAlign(LEFT);
  }
}
