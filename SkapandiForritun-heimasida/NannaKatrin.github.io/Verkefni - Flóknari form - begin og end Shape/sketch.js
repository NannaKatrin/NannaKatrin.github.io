// Hér kemur kóðinn þinn:

var x = 250
var y = 250

var t = 250
var r = 125

function setup() {
 createCanvas(500, 500);
}

function draw() {
 background(79, 204, 220);
 beginShape();
 fill('red');
 vertex(x, y);
 vertex(x+50, y-50);
 vertex(x+100, y-50);
 vertex(x+150, y);
 vertex(x+150, y+50);
 vertex(x, y+200);
 vertex(x-150, y+50);
 vertex(x-150, y);
 vertex(x-100, y-50);
 vertex(x-50, y-50);
 endShape();
 
 beginShape();
 fill('black')
 vertex(t+80, r+ 20);
 vertex(t+80, r- 50);
 vertex(t+50, r-100);
 vertex(t+25, r-50);
 vertex(t-25, r-50);
 vertex(t-50, r-100);
 vertex(t-80, r-50);
 vertex(t-80, r+20);
 vertex(t+80, r+20);
   endShape();
 
}