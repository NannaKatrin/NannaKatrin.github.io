// Hér kemur kóðinn þinn:

var eyeshape = 0;
var mouthshape = 0;
var face = 0;
var body = 0;
 var x = 250;
 var y = 445;
var letters = 0;

function setup() {
createCanvas(500, 500);
}

function draw() {
background(89, 207, 221);

fill ('black');
if (letters == 0){
  beginShape();
  vertex(150, 100);
  vertex(150, 50);
  vertex(185, 50);
  vertex(185, 70);
  vertex(150, 70);
  vertex(195, 70);
  vertex(195, 100);
  vertex(150, 100);
  endShape();
   beginShape();
  fill('white');
  vertex(160, 90);
  vertex(185, 90);
  vertex(185, 80);
  vertex(160, 80);
  vertex(160, 90);
  endShape();
     beginShape();
  fill('white');
  vertex(160, 65);
  vertex(175, 65);
  vertex(175, 55);
  vertex(160, 55);
  vertex(160, 65);
  endShape();
  
  beginShape();
  fill('black');
  vertex(300, 100);
  vertex(300, 50);
  vertex(335, 50);
  vertex(335, 70);
  vertex(300, 70);
  vertex(345, 70);
  vertex(345, 100);
  vertex(300, 100);
  endShape();
     beginShape();
  fill('white');
  vertex(310, 90);
  vertex(335, 90);
  vertex(335, 80);
  vertex(310, 80);
  vertex(310, 90);
  endShape();
       beginShape();
  fill('white');
  vertex(310, 65);
  vertex(325, 65);
  vertex(325, 55);
  vertex(310, 55);
  vertex(310, 65);
  endShape();
  
  beginShape();
  fill('black');
  vertex(225, 100);
  vertex(225, 50);
  vertex(275, 50);
  vertex(275, 100);
  vertex(225, 100);
  endShape();
   beginShape();
  fill('white');
  vertex(235, 90);
  vertex(235, 60);
  vertex(265, 60);
  vertex(265, 90);
  vertex(235, 90);
  endShape();
 } 
   fill('yellow');
if (face == 0){
   ellipse(250, 225, 240, 240);
} 
 fill('yellow');
if (face == 1){
   ellipse(250, 225, 235, 230);
}   
 fill(236, 84, 81);
if (body == 0){
  beginShape();
  vertex(x+25, y-101);
  vertex(x+25, y-80);
  vertex(x+125, y-80);
  vertex(x+125, y+100);
  vertex(x-125, y+100);
  vertex(x-125, y-80);
  vertex(x-25, y-80);
  vertex(x-25, y-101);
  endShape();
}   
 fill(236, 84, 81);
if (body == 1){
  beginShape();
  vertex(x+25, y-109);
  vertex(x+25, y-80);
  vertex(x+125, y-90);
  vertex(x+125, y+100);
  vertex(x-125, y+100);
  vertex(x-125, y-70);
  vertex(x-25, y-80);
  vertex(x-25, y-106);
  endShape();
} 
 fill(236, 84, 81);
if (body == 2){
  beginShape();
  vertex(x+25, y-101);
  vertex(x+25, y-60);
  vertex(x+125, y-90);
  vertex(x+125, y+100);
  vertex(x-125, y+100);
  vertex(x-125, y-90);
  vertex(x-25, y-60);
  vertex(x-25, y-101);
  endShape();
} 
 fill(236, 84, 81);
if (body == 3){
  beginShape();
  vertex(x+25, y-109);
  vertex(x+25, y-80);
  vertex(x+125, y-60);
  vertex(x+125, y+100);
  vertex(x-125, y+100);
  vertex(x-125, y-60);
  vertex(x-25, y-80);
  vertex(x-25, y-109);
  endShape();
} 
 fill('black');
if (eyeshape == 0){
  ellipse(200,200,50,50); 
  ellipse(300,200,50,50);

} 
if (eyeshape == 1){
  triangle(160, 210, 200, 210, 180, 170);
  triangle(260, 210, 300, 210, 280, 170);
}   
 
if (eyeshape == 2){
  quad(155, 190, 180, 160, 205, 190, 180, 220);
  quad(255, 190, 280, 160, 305, 190, 280, 220);
}   
 if (eyeshape == 3){
  ellipse(225,225,50,50); 
  ellipse(325,225,50,50);
 }   

if (mouthshape == 0){
  triangle(225, 280, 250, 240, 275, 280);
}   
if (mouthshape == 1){
  ellipse(230, 270, 80, 40);
}   
 if (mouthshape == 2){
  quad(190, 280, 230, 260, 270, 280, 230, 300);
}  
 if (mouthshape == 3){
  quad(190, 290, 230, 270, 270, 290, 230, 310);
}


} 


function mousePressed(){
  
  eyeshape = eyeshape+1;
  if (eyeshape == 4){
    eyeshape = 0;
   } 
  
  mouthshape = mouthshape+1;
  if (mouthshape == 4){
    mouthshape = 0;
   } 
  
  face = face+1;
  if (face == 2){
    face = 0;
   }
  
  body = body+1;
  if (body == 4){
    body = 0;
   }
}

  