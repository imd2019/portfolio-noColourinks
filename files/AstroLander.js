function setup() {
  var p5canvas = createCanvas(780, 660);
  p5canvas.parent("AstroLander");
  frameRate(30);
}

let color1 = "black";
let color2 = "white";
let color3 = "#b5a1da";

let astronautX = 100;
let astronautY = 100;

let astronautFall = false;
let startPos = 100;
let gameStart = false;
let gameEnd = false;
let astroSpeed = 5;
let astroWinSpeed = 4;
let astroJetpack = false;

function Astronaut(astronautX, astronautY) {
  // Astronaut
  noStroke();
  fill(color2);
  rect(astronautX - 10, astronautY - 30, 1, 15);
  circle(astronautX - 9.5, astronautY - 30, 2);
  circle(astronautX + 0, astronautY + 0, 20);
  fill(color1); //face
  rect(astronautX - 15, astronautY - 10, 30, 20, 5);
  fill(color2);
  rect(astronautX - 18, astronautY - 5, 7, 10, 1);
  rect(astronautX + 11, astronautY - 5, 7, 10, 1);
  //body
  rect(astronautX - 10, astronautY + 15, 20, 15);
  rect(astronautX - 17, astronautY + 20, 34, 39, 2);
  rect(astronautX - 15, astronautY + 50, 12, 40, 2);
  rect(astronautX + 3, astronautY + 50, 12, 40, 2);
  rect(astronautX - 18, astronautY + 80, 12, 10, 2);
  rect(astronautX + 7, astronautY + 80, 12, 10, 2);
  circle(astronautX, astronautY + 60, 6);

  noFill();
  stroke(255, 255, 255);
  strokeWeight(10);
  beginShape();
  vertex(astronautX + 13, astronautY + 24);
  vertex(astronautX + 20, astronautY + 41);
  vertex(astronautX + 30, astronautY + 58); // Hand rechts
  endShape();

  beginShape();
  vertex(astronautX - 13, astronautY + 24);
  vertex(astronautX - 20, astronautY + 41);
  vertex(astronautX - 30, astronautY + 60); //Hand links
  endShape();
}
let content1 = "PRESS SPACEBAR";
let content2 = "TO START";

function StartMenu(content1, content2) {
  textAlign(CENTER);
  stroke(color2);
  fill(color1);
  strokeWeight(2);
  rect(width / 2 - 120, 270, 240, 80, 10);
  strokeWeight(0);
  textSize(20);
  fill(color3);
  text(content1, width / 2 - 0, 300);
  textSize(38);
  text(content2, width / 2 - 0, 335);
}

function Background() {
  fill(color2);
  rect(0, 590, 1000, 100);
  rect(0, 520, 100, 100, 50, 50, 0, 0);
  rect(50, 500, 200, 200, 50, 50, 0, 0);
  rect(200, 520, 100, 100, 50, 50, 0, 0);
  rect(280, 570, 50, 50, 50, 50, 0, 0);
  rect(500, 520, 100, 100, 50, 50, 0, 0);
  rect(550, 450, 200, 200, 50, 50, 0, 0);
  rect(700, 520, 100, 100, 50, 50, 0, 0);
  rect(480, 570, 50, 50, 50, 50, 0, 0);
  circle(60, 515, 10);
  circle(770, 500, 10);
  circle(255, 500, 5);
  circle(540, 510, 5);
}

function keyPressed() {
  // Spiel wird gestartet
  if (keyIsDown(32) && startPos != 500 && astroSpeed != 0) {
    gameStart = true;
    astronautFall = true;
    astroJetpack = true;
  }

  if (
    keyIsDown(32) &&
    gameStart == true &&
    gameEnd == false &&
    astroJetpack === true
  ) {
    astroSpeed = astroSpeed - 1;
  }

  // Spiel wird beendet
  if (gameEnd == true && gameStart == true && keyIsDown(13)) {
    gameStart = false;
    gameEnd = false;
    astronautFall = false;
    astroSpeed = 5;
    startPos = 100;
  }
  console.log(astroSpeed);
}

function keyReleased() {
  if (!keyIsDown(32) && startPos != 500 && astroSpeed != 0) {
    astroJetpack = false;
  }
}

//Stars
var CountingStars = 900;
var StarsX = [];
var StarsY = [];
var StarsR = [];
var StarsT = [];
var Time = 0;

function setStarT() {
  for (var i = 0; i < CountingStars; i++) {
    StarsT[i] = random(0, 0.8);
  }
}
function randomStars() {
  for (var i = 0; i < CountingStars; i++) {
    StarsX[i] = random(width);
    StarsY[i] = random(height);
    StarsR[i] = random(0.5, 1);
    StarsT[i] = random(0, 1);
  }
}

function drawStars() {
  for (var i = 0; i < CountingStars; i++) {
    colorMode(RGB, 255, 255, 255, 1);
    fill(255, 255, 255, StarsT[i]);
    ellipse(StarsX[i], StarsY[i], StarsR[i] * 2, StarsR[i] * 2);
  }
}

randomStars();

function draw() {
  Time++;
  if (Time == 10) {
    setStarT();
    Time = 0;
  }

  background("black");
  noStroke();
  drawStars();
  if (astroJetpack == true) {
    for (i = 0; i < 30; i++) {
      fill(92, 50, 168, random(0.1, 0.8));
      circle(
        random(370, 430),
        random(startPos + 70, startPos + 120),
        random(1, 20)
      );
    }
  }
  Background();
  Astronaut(400, startPos);

  if (gameStart == false) {
    StartMenu("PRESS SPACEBAR", "TO START");
  }

  if (astroSpeed <= 4 && startPos >= 500) {
    StartMenu("RESTART WITH ENTER", "SURVIVED");
    textSize(10);
    fill(color2);
    text("OuO", 400, 504);
    textSize(50);
    text("🤍", 400, 454);
    beginShape();
    strokeWeight(5);
    vertex(440, 480);
    vertex(420, 600);
    endShape();

    beginShape();
    strokeWeight(5);
    fill(color2);
    vertex(440, 480);
    vertex(480, 480);
    vertex(475, 510);
    vertex(435, 510);
    endShape();
    gameEnd = true;
  }
  if (astroSpeed >= 4 && startPos >= 500) {
    StartMenu("RESTART WITH ENTER", "CRASHED");
    fill(color2);
    textSize(10);
    text("X_X", 400, 503);
    let radius = 1;
    for (i = 0; i < 25; i++) {
      fill(92, 50, 168, 0.5);
      circle(400, 600, radius);
      radius = radius * 1.22;
    }
    gameEnd = true;
  }
  fill(color2);
  ellipse(420, 760, 700, 300);
  textSize(14);
  noStroke();
  fill(color3);
  text("SPEED", 40, 20);
  text(floor(astroSpeed), 80, 20);

  if (astronautFall === true && gameStart === true) {
    startPos = startPos + astroSpeed;
  }
  if (astronautFall === true && gameStart === true) {
    if (startPos <= 100) {
      astronautFall = true;
    }

    if (astroSpeed === 0) {
      startPos = startPos + astroSpeed + 0.5;
    }

    if (startPos != 500) {
      astroSpeed = astroSpeed + 1 / 7;
    }

    if (startPos >= 500) {
      astronautFall = false;
      astroSpeed = astroSpeed;
      startPos = 500;
    }
  }
}
