function setup() {
  var p5canvas = createCanvas(800, 650);
  p5canvas.parent("selfiMe");
  frameRate(30);
}

var meX = 350;
var meY = 200;
var meSc = 1;

var colorBody = "#705a92";
var colorBodyShade = "#483763";
var colorBlack = "#020406";
var colorTail = "#705a92";
var colorTailShade = "#483763";
var colorBlushLight = "#ac8fdb";
var colorBlushDarker = "#8c74b3";

function mimigma(meX, meY, meSc) {
  //underneath
  beginShape();
  fill(colorBlack);
  curveVertex(meX + 145 * meSc, meY + 375 * meSc);
  curveVertex(meX + 150 * meSc, meY + 395 * meSc);
  curveVertex(meX + 140 * meSc, meY + 399 * meSc);
  curveVertex(meX + 115 * meSc, meY + 384 * meSc);

  curveVertex(meX + 80 * meSc, meY + 384 * meSc);
  curveVertex(meX + 64 * meSc, meY + 398 * meSc);
  curveVertex(meX + 45 * meSc, meY + 380 * meSc);
  curveVertex(meX + 20 * meSc, meY + 380 * meSc);
  curveVertex(meX + 5 * meSc, meY + 395 * meSc);
  curveVertex(meX - 10 * meSc, meY + 380 * meSc);
  curveVertex(meX - 30 * meSc, meY + 380 * meSc);
  curveVertex(meX - 58 * meSc, meY + 394 * meSc);
  curveVertex(meX - 58 * meSc, meY + 384 * meSc);
  curveVertex(meX - 95 * meSc, meY + 382 * meSc);
  curveVertex(meX - 79 * meSc, meY + 374 * meSc);
  curveVertex(meX - 79 * meSc, meY + 374 * meSc);
  curveVertex(meX - 55 * meSc, meY + 364 * meSc);
  endShape(CLOSE);

  //tail
  stroke(colorBodyShade);
  strokeWeight(2 * meSc);
  fill(colorTail);
  beginShape();
  curveVertex(meX + 236 * meSc, meY + 197 * meSc);
  curveVertex(meX + 245 * meSc, meY + 207 * meSc);
  curveVertex(meX + 249 * meSc, meY + 219 * meSc);
  curveVertex(meX + 249 * meSc, meY + 249 * meSc);
  curveVertex(meX + 210 * meSc, meY + 279 * meSc);
  curveVertex(meX + 171 * meSc, meY + 291 * meSc);
  curveVertex(meX + 180 * meSc, meY + 312 * meSc);
  curveVertex(meX + 158 * meSc, meY + 322 * meSc);
  curveVertex(meX + 163 * meSc, meY + 334 * meSc);
  curveVertex(meX + 137 * meSc, meY + 362 * meSc);
  curveVertex(meX + 120 * meSc, meY + 352 * meSc);
  curveVertex(meX + 138 * meSc, meY + 336 * meSc);
  curveVertex(meX + 126 * meSc, meY + 316 * meSc);
  curveVertex(meX + 146 * meSc, meY + 293 * meSc);
  curveVertex(meX + 136 * meSc, meY + 273 * meSc);
  curveVertex(meX + 186 * meSc, meY + 223 * meSc);
  endShape(CLOSE);

  fill(colorBody);
  //body

  beginShape();
  curveVertex(meX + 115 * meSc, meY - 95 * meSc);
  curveVertex(meX + 105 * meSc, meY - 60 * meSc);
  curveVertex(meX + 105 * meSc, meY - 60 * meSc);
  curveVertex(meX + 115 * meSc, meY - 45 * meSc);
  curveVertex(meX + 105 * meSc, meY - 25 * meSc);
  curveVertex(meX + 106 * meSc, meY + 15 * meSc);
  curveVertex(meX + 100 * meSc, meY + 65 * meSc);
  curveVertex(meX + 130 * meSc, meY + 93 * meSc);
  curveVertex(meX + 155 * meSc, meY + 123 * meSc);
  curveVertex(meX + 205 * meSc, meY + 110 * meSc);
  curveVertex(meX + 245 * meSc, meY + 110 * meSc);
  curveVertex(meX + 270 * meSc, meY + 135 * meSc);
  curveVertex(meX + 295 * meSc, meY + 165 * meSc);
  curveVertex(meX + 295 * meSc, meY + 187 * meSc);
  curveVertex(meX + 234 * meSc, meY + 150 * meSc);
  curveVertex(meX + 170 * meSc, meY + 180 * meSc);
  curveVertex(meX + 150 * meSc, meY + 220 * meSc);
  curveVertex(meX + 130 * meSc, meY + 240 * meSc);
  curveVertex(meX + 110 * meSc, meY + 250 * meSc);
  curveVertex(meX + 70 * meSc, meY + 249 * meSc);
  curveVertex(meX + 83 * meSc, meY + 260 * meSc);
  curveVertex(meX + 77 * meSc, meY + 265 * meSc);
  curveVertex(meX + 92 * meSc, meY + 277 * meSc);
  curveVertex(meX + 107 * meSc, meY + 300 * meSc);
  curveVertex(meX + 124 * meSc, meY + 350 * meSc);
  curveVertex(meX + 154 * meSc, meY + 365 * meSc);
  curveVertex(meX + 176 * meSc, meY + 378 * meSc);
  curveVertex(meX + 146 * meSc, meY + 381 * meSc);
  curveVertex(meX + 116 * meSc, meY + 380 * meSc);
  curveVertex(meX + 119 * meSc, meY + 398 * meSc);
  curveVertex(meX + 58 * meSc, meY + 382 * meSc);
  curveVertex(meX + 42 * meSc, meY + 395 * meSc);
  curveVertex(meX + 6 * meSc, meY + 381 * meSc);
  curveVertex(meX - 34 * meSc, meY + 395 * meSc);
  curveVertex(meX - 42 * meSc, meY + 375 * meSc);
  curveVertex(meX - 65 * meSc, meY + 369 * meSc);
  curveVertex(meX - 90 * meSc, meY + 357 * meSc);
  curveVertex(meX - 51 * meSc, meY + 357 * meSc);
  curveVertex(meX - 33 * meSc, meY + 290 * meSc);
  curveVertex(meX + 1 * meSc, meY + 217 * meSc);
  curveVertex(meX - 28 * meSc, meY + 170 * meSc);
  curveVertex(meX - 36 * meSc, meY + 125 * meSc);
  curveVertex(meX - 12 * meSc, meY + 99 * meSc);
  curveVertex(meX + 30 * meSc, meY + 67 * meSc);
  curveVertex(meX + 46 * meSc, meY + 17 * meSc);
  curveVertex(meX + 53 * meSc, meY + 8 * meSc);
  curveVertex(meX + 58 * meSc, meY - 26 * meSc);
  curveVertex(meX + 84 * meSc, meY - 56 * meSc);
  curveVertex(meX + 86 * meSc, meY - 80 * meSc);
  endShape(CLOSE);
  noStroke();

  beginShape();
  fill(colorBodyShade);
  curveVertex(meX + 115 * meSc, meY - 95 * meSc);
  curveVertex(meX + 105 * meSc, meY - 60 * meSc);
  curveVertex(meX + 105 * meSc, meY - 60 * meSc);
  curveVertex(meX + 115 * meSc, meY - 45 * meSc);
  curveVertex(meX + 105 * meSc, meY - 25 * meSc);
  curveVertex(meX + 106 * meSc, meY + 15 * meSc);
  curveVertex(meX + 100 * meSc, meY + 65 * meSc);
  curveVertex(meX + 130 * meSc, meY + 93 * meSc);
  curveVertex(meX + 155 * meSc, meY + 123 * meSc);
  curveVertex(meX + 205 * meSc, meY + 110 * meSc);
  curveVertex(meX + 245 * meSc, meY + 110 * meSc);
  curveVertex(meX + 270 * meSc, meY + 135 * meSc);
  curveVertex(meX + 295 * meSc, meY + 165 * meSc);
  curveVertex(meX + 295 * meSc, meY + 187 * meSc);
  curveVertex(meX + 234 * meSc, meY + 150 * meSc);
  curveVertex(meX + 170 * meSc, meY + 180 * meSc);
  curveVertex(meX + 154 * meSc, meY + 199 * meSc); //
  curveVertex(meX + 120 * meSc, meY + 170 * meSc); //
  curveVertex(meX + 70 * meSc, meY + 160 * meSc); //
  curveVertex(meX + 20 * meSc, meY + 162 * meSc); //
  curveVertex(meX - 28 * meSc, meY + 170 * meSc);
  curveVertex(meX - 36 * meSc, meY + 125 * meSc);
  curveVertex(meX - 12 * meSc, meY + 99 * meSc);
  curveVertex(meX + 30 * meSc, meY + 67 * meSc);
  curveVertex(meX + 46 * meSc, meY + 17 * meSc);
  curveVertex(meX + 58 * meSc, meY - 26 * meSc);
  curveVertex(meX + 84 * meSc, meY - 56 * meSc); //44
  curveVertex(meX + 83 * meSc, meY - 80 * meSc);
  endShape(CLOSE);

  //hals
  beginShape();
  fill(colorBodyShade);
  curveVertex(meX + 110 * meSc, meY + 250 * meSc);
  curveVertex(meX + 70 * meSc, meY + 249 * meSc);
  curveVertex(meX + 83 * meSc, meY + 260 * meSc);
  curveVertex(meX + 77 * meSc, meY + 265 * meSc);
  curveVertex(meX + 92 * meSc, meY + 277 * meSc);
  curveVertex(meX + 104 * meSc, meY + 295 * meSc);
  curveVertex(meX + 35 * meSc, meY + 267 * meSc); //
  curveVertex(meX - 33 * meSc, meY + 290 * meSc);
  curveVertex(meX + 2 * meSc, meY + 215 * meSc);
  curveVertex(meX + 50 * meSc, meY + 243 * meSc);
  endShape(CLOSE);

  //cheek left
  stroke(colorBlushDarker);
  noFill();

  strokeWeight(3 * meSc);
  beginShape();
  curveVertex(meX + 10 * meSc, meY + 125 * meSc);
  curveVertex(meX + 10 * meSc, meY + 125 * meSc);
  curveVertex(meX + 5 * meSc, meY + 120 * meSc);
  curveVertex(meX + 8 * meSc, meY + 133 * meSc);
  curveVertex(meX, meY + 116 * meSc);
  curveVertex(meX + 5 * meSc, meY + 138 * meSc);
  curveVertex(meX + 4 * meSc, meY + 138 * meSc);
  curveVertex(meX - 9 * meSc, meY + 115 * meSc);
  curveVertex(meX - 1 * meSc, meY + 147 * meSc);
  curveVertex(meX - 20 * meSc, meY + 120 * meSc);
  curveVertex(meX - 10 * meSc, meY + 150 * meSc);
  curveVertex(meX - 22 * meSc, meY + 126 * meSc);
  curveVertex(meX - 20 * meSc, meY + 156 * meSc);
  curveVertex(meX - 28 * meSc, meY + 140 * meSc);
  curveVertex(meX - 28 * meSc, meY + 140 * meSc);
  endShape();

  //cheekright
  stroke(colorBlushLight);
  beginShape();
  curveVertex(meX + 86 * meSc, meY + 237 * meSc);
  curveVertex(meX + 104 * meSc, meY + 237 * meSc);
  curveVertex(meX + 80 * meSc, meY + 230 * meSc);
  curveVertex(meX + 115 * meSc, meY + 232 * meSc);
  curveVertex(meX + 80 * meSc, meY + 225 * meSc);
  curveVertex(meX + 125 * meSc, meY + 220 * meSc);
  curveVertex(meX + 90 * meSc, meY + 220 * meSc);
  curveVertex(meX + 126 * meSc, meY + 215 * meSc);
  curveVertex(meX + 90 * meSc, meY + 213 * meSc);
  curveVertex(meX + 90 * meSc, meY + 213 * meSc);
  curveVertex(meX + 120 * meSc, meY + 207 * meSc);
  curveVertex(meX + 90 * meSc, meY + 207 * meSc);
  curveVertex(meX + 127 * meSc, meY + 204 * meSc);
  curveVertex(meX + 95 * meSc, meY + 200 * meSc);
  curveVertex(meX + 113 * meSc, meY + 195 * meSc);
  curveVertex(meX + 127 * meSc, meY + 204 * meSc);
  curveVertex(meX + 127 * meSc, meY + 204 * meSc);
  endShape();

  //Smile
  stroke(colorBlack);
  strokeWeight(10 * meSc);
  noFill();
  beginShape();
  curveVertex(meX, meY + 100 * meSc);
  curveVertex(meX + 5 * meSc, meY + 150 * meSc);
  curveVertex(meX + 10 * meSc, meY + 180 * meSc);
  curveVertex(meX + 40 * meSc, meY + 178 * meSc);
  curveVertex(meX + 50 * meSc, meY + 200 * meSc);
  curveVertex(meX + 68 * meSc, meY + 199 * meSc);
  curveVertex(meX + 74 * meSc, meY + 220 * meSc);
  curveVertex(meX + 74 * meSc, meY + 220 * meSc);
  curveVertex(meX + 80 * meSc, meY + 220 * meSc);
  curveVertex(meX + 100 * meSc, meY + 210 * meSc);
  curveVertex(meX + 100 * meSc, meY + 210 * meSc);
  endShape();

  //ear top
  fill(colorBlack);
  beginShape();
  curveVertex(meX + 116 * meSc, meY - 95 * meSc);
  curveVertex(meX + 106 * meSc, meY - 60 * meSc);
  curveVertex(meX + 105 * meSc, meY - 60 * meSc);
  curveVertex(meX + 115 * meSc, meY - 45 * meSc);
  curveVertex(meX + 105 * meSc, meY - 25 * meSc);
  curveVertex(meX + 100 * meSc, meY - 10 * meSc);
  curveVertex(meX + 85 * meSc, meY - 18 * meSc);
  curveVertex(meX + 65 * meSc, meY - 3 * meSc);
  curveVertex(meX + 55 * meSc, meY - 3 * meSc);
  curveVertex(meX + 60 * meSc, meY - 30 * meSc);
  curveVertex(meX + 84 * meSc, meY - 60 * meSc);
  curveVertex(meX + 82 * meSc, meY - 80 * meSc);
  endShape(CLOSE);

  //ear bottom
  fill(colorBlack);
  beginShape();
  curveVertex(meX + 226 * meSc, meY + 111 * meSc);
  curveVertex(meX + 246 * meSc, meY + 108 * meSc);
  curveVertex(meX + 267 * meSc, meY + 120 * meSc);
  curveVertex(meX + 290 * meSc, meY + 157 * meSc);
  curveVertex(meX + 299 * meSc, meY + 170 * meSc);
  curveVertex(meX + 301 * meSc, meY + 181 * meSc);
  curveVertex(meX + 294 * meSc, meY + 189 * meSc);
  curveVertex(meX + 234 * meSc, meY + 154 * meSc);
  curveVertex(meX + 220 * meSc, meY + 138 * meSc);
  curveVertex(meX + 234 * meSc, meY + 125 * meSc);
  endShape(CLOSE);

  //tail shadow
  noStroke();
  fill(colorTailShade);
  beginShape();
  curveVertex(meX + 236 * meSc, meY + 197 * meSc);
  curveVertex(meX + 245 * meSc, meY + 207 * meSc);
  curveVertex(meX + 249 * meSc, meY + 219 * meSc);
  curveVertex(meX + 249 * meSc, meY + 249 * meSc);
  curveVertex(meX + 210 * meSc, meY + 269 * meSc);
  curveVertex(meX + 171 * meSc, meY + 291 * meSc);
  curveVertex(meX + 180 * meSc, meY + 312 * meSc);
  curveVertex(meX + 136 * meSc, meY + 316 * meSc);
  curveVertex(meX + 146 * meSc, meY + 293 * meSc);
  curveVertex(meX + 136 * meSc, meY + 273 * meSc);
  curveVertex(meX + 186 * meSc, meY + 223 * meSc);
  endShape(CLOSE);

  //EYE left
  noFill();
  stroke(colorBlack);
  strokeWeight(5 * meSc);
  beginShape();
  curveVertex(meX + 20 * meSc, meY + 140 * meSc);
  curveVertex(meX + 20 * meSc, meY + 140 * meSc);
  curveVertex(meX + 15 * meSc, meY + 130 * meSc);
  curveVertex(meX + 14 * meSc, meY + 120 * meSc);
  curveVertex(meX + 23 * meSc, meY + 110 * meSc);
  curveVertex(meX + 28 * meSc, meY + 108 * meSc);
  curveVertex(meX + 40 * meSc, meY + 103 * meSc);
  curveVertex(meX + 50 * meSc, meY + 102 * meSc);
  curveVertex(meX + 53 * meSc, meY + 110 * meSc);
  curveVertex(meX + 50 * meSc, meY + 119 * meSc);
  curveVertex(meX + 45 * meSc, meY + 130 * meSc);
  curveVertex(meX + 35 * meSc, meY + 137 * meSc);
  curveVertex(meX + 25 * meSc, meY + 133 * meSc);
  curveVertex(meX + 25 * meSc, meY + 133 * meSc);
  curveVertex(meX + 20 * meSc, meY + 124 * meSc);
  curveVertex(meX + 25 * meSc, meY + 115 * meSc);
  curveVertex(meX + 35 * meSc, meY + 110 * meSc);
  curveVertex(meX + 45 * meSc, meY + 108 * meSc);
  curveVertex(meX + 43 * meSc, meY + 118 * meSc);
  curveVertex(meX + 37 * meSc, meY + 125 * meSc);
  curveVertex(meX + 30 * meSc, meY + 128 * meSc);
  curveVertex(meX + 35 * meSc, meY + 118 * meSc);
  curveVertex(meX + 30 * meSc, meY + 115 * meSc);
  endShape();

  //EYE right
  noFill();
  stroke(colorBlack);
  strokeWeight(5 * meSc);
  beginShape();
  curveVertex(meX + 105 * meSc, meY + 180 * meSc);
  curveVertex(meX + 105 * meSc, meY + 180 * meSc);
  curveVertex(meX + 100 * meSc, meY + 170 * meSc);
  curveVertex(meX + 103 * meSc, meY + 150 * meSc);
  curveVertex(meX + 112 * meSc, meY + 140 * meSc);
  curveVertex(meX + 118 * meSc, meY + 135 * meSc);
  curveVertex(meX + 130 * meSc, meY + 134 * meSc);
  curveVertex(meX + 140 * meSc, meY + 140 * meSc);
  curveVertex(meX + 145 * meSc, meY + 150 * meSc);
  curveVertex(meX + 143 * meSc, meY + 160 * meSc);
  curveVertex(meX + 143 * meSc, meY + 160 * meSc);
  curveVertex(meX + 140 * meSc, meY + 170 * meSc);
  curveVertex(meX + 130 * meSc, meY + 180 * meSc);
  curveVertex(meX + 120 * meSc, meY + 183 * meSc);
  curveVertex(meX + 110 * meSc, meY + 173 * meSc);
  curveVertex(meX + 106 * meSc, meY + 163 * meSc);
  curveVertex(meX + 110 * meSc, meY + 153 * meSc);
  curveVertex(meX + 115 * meSc, meY + 146 * meSc);
  curveVertex(meX + 120 * meSc, meY + 141 * meSc);
  curveVertex(meX + 130 * meSc, meY + 141 * meSc);
  curveVertex(meX + 135 * meSc, meY + 147 * meSc);
  curveVertex(meX + 135 * meSc, meY + 157 * meSc);
  curveVertex(meX + 133 * meSc, meY + 167 * meSc);
  curveVertex(meX + 126 * meSc, meY + 174 * meSc);
  curveVertex(meX + 118 * meSc, meY + 174 * meSc);
  curveVertex(meX + 118 * meSc, meY + 154 * meSc);
  curveVertex(meX + 128 * meSc, meY + 150 * meSc);
  curveVertex(meX + 127 * meSc, meY + 158 * meSc);
  curveVertex(meX + 122 * meSc, meY + 166 * meSc);
  curveVertex(meX + 116 * meSc, meY + 166 * meSc);
  curveVertex(meX + 116 * meSc, meY + 166 * meSc);
  endShape();

  noStroke();
  fill(colorBlack);
  ellipse(meX + 55 * meSc, meY + 310 * meSc, 10 * meSc, 30 * meSc);
  ellipse(meX + 20 * meSc, meY + 310 * meSc, 10 * meSc, 30 * meSc);
}

function wallpaper() {
  noStroke();

  fill("#333"); //lightgray
  ellipse(750, 600, 500, 500);
  ellipse(570, 450, 400, 400);
  ellipse(310, 390, 500, 500);
  ellipse(50, 600, 500, 500);

  fill("#222"); // gray
  ellipse(750, 650, 450, 450);
  ellipse(570, 490, 350, 350);
  ellipse(310, 430, 450, 450);
  ellipse(50, 650, 500, 500);

  fill("#111"); // gray
  ellipse(400, 700, 1500, 300);
}

function draw() {
  clear();
  background("#111");
  wallpaper();
  mimigma(450, 200, 1);
  fill("#fff");
  textSize(40);
  textStyle(ITALIC);
  textFont("Georgia");
  text("CLICK, IF", 50, 440);
  text("YOU ARE NOT", 50, 480);
  text("SCARED OF ME...", 50, 520);

  if (mouseIsPressed) {
    fill(colorBlushLight);
    textStyle(NORMAL);
    textSize(50);
    text("❤", 600, 250);
    textSize(30);
    text("❤", 380, 480);
    textSize(20);
    text("❤", 600, 450);
    textSize(20);
    text("❤", 600, 450);
    fill(colorBody);
    ellipse(470, 520, 15);
    ellipse(505, 520, 15);
  }
}
