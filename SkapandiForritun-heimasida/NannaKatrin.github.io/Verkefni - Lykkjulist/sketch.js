// Hér kemur kóðinn þinn:

var snuninur = 0
var menn = 0

function setup() {
  createCanvas(500, 500);
  background(98, 179, 242);
  frameRate(50); 
}

function draw() {
  
  background(98, 179, 242);
  
  drawextrabackground();
  
 
    if(menn <= 100)
    {
      drawmen(243, 226, 176, 0, 0);  
      drawmen(243, 226, 176, 110, 80);    
    }
    
    if(menn >= 100 && menn <= 200)
    {
      drawmen(244, 186, 99, 0, 0);  
      drawmen(244, 186, 99, 110, 80);    
    }
    
    if(menn >= 200 && menn <= 300)
    {
      drawmen(226, 99, 30, 0, 0);  
      drawmen(226, 99, 30, 110, 80);    
    }
  
    if(menn >= 300)
    {
      drawmen(239, 83, 80, 0, 0);  
      drawmen(239, 83, 80, 110, 80);    
    }
  
  
    menn = menn+1
    if (menn == 400)
    {
      menn = 0
    }
  
  
  //sólin  
  drawsun();  

}

function drawextrabackground(){
  
  //hóll 
  beginShape();
  fill(243, 217, 134);
  
  vertex(0, 200);
  vertex(10, 205);
  vertex(20, 210);
  vertex(30, 215);
  vertex(50, 220);
  vertex(70, 225);
  vertex(90, 240);
  vertex(110, 245);
  vertex(130, 260);
  vertex(145, 265);
  vertex(160, 280);
  vertex(170, 285);
  vertex(180, 300);
  vertex(190, 310);
  vertex(210, 315);
  vertex(230, 325);
  vertex(250, 340);
  vertex(270, 345);
  vertex(300, 375);
  vertex(320, 380);
  vertex(340, 380);
  vertex(360, 375);
  vertex(380, 375);
  vertex(400, 380);
  vertex(420, 385);
  vertex(440, 385);
  vertex(460, 380);
  vertex(500, 380);
  vertex(500, 500);
  vertex(0, 500);
  vertex(0, 200);
  endShape();
  
    
  //motta1
  drawmotta(160,80,174,0,0);
  drawmotta(55,180,196,110,80);
  
}

function drawmotta(f1,f2,f3,offs1,offs2){
  fill(f1, f2, f3);
  beginShape();
  vertex(30+offs1, 300+offs2);
  vertex(80+offs1, 270+offs2);
  vertex(120+offs1, 325+offs2);
  vertex(75+offs1, 360+offs2);
  vertex(30+offs1, 300+offs2);
  endShape(); 
}

function drawsun() {
  snuninur = snuninur+0.01;

  translate(430 , 70);{
  rotate(snuninur);
  ellipseMode(CENTER); 
  translate(-400, -100);
  fill(251, 232, 61);
  ellipse(400, 100, 100, 100);
  
  triangle(350, 75, 335, 60, 330, 80);
  triangle(377, 50, 378, 30, 360, 39);
  triangle(415, 48, 410, 30, 430, 35);
  triangle(450, 75, 465, 60, 470, 80);
  triangle(450, 120, 470, 115, 465, 135);
  triangle(415, 153, 410, 173, 430, 168);
  triangle(377, 150, 378, 170, 360, 160);
  triangle(348, 118, 325, 115, 335, 135);
  }
}

function drawmen(col1,col2,col3, offs1, offs2){  
  fill(col1, col2, col3);
  beginShape();
  vertex(65+offs1, 310+offs2);
  vertex(68+offs1, 318+offs2);
  vertex(60+offs1, 325+offs2);
  vertex(62+offs1, 330+offs2);
  vertex(71+offs1, 325+offs2);
  vertex(78+offs1, 335+offs2);
  vertex(73+offs1, 345+offs2);
  vertex(76+offs1, 348+offs2);
  vertex(83+offs1, 339+offs2);
  vertex(93+offs1, 337+offs2);
  vertex(92+offs1, 332+offs2);
  vertex(83+offs1, 332+offs2);
  vertex(77+offs1, 323+offs2);
  vertex(87+offs1, 323+offs2);
  vertex(86+offs1, 318+offs2);
  vertex(75+offs1, 318+offs2);
  vertex(70+offs1, 309+offs2);
  endShape();
  ellipse(65+offs1, 305+offs2, 15, 15);
}