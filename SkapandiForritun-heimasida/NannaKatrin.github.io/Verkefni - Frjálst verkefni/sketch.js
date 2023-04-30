// Hér kemur kóðinn þinn:

var Fx = 50;
var Fy = 100;

function setup() {
    createCanvas(600, 400);
    
  }
  
  function draw() {
    background(55, 70, 161);
    himinn();
    sjór();
    fiskur();
    briggja();
    maður(); 
    
   if (mouseX< 570){
    Fx=mouseX-60;
    }
  }
  
  
  function briggja(){
      /*hér er teiknuð briggja sem eru 9 form í heild*/
    fill(109, 76, 65);
    strokeWeight(2);
    beginShape();
    vertex(0, 230);
    vertex(200, 230);
    vertex(200, 250);
    vertex(0, 250);
    endShape();
    fill(85, 60, 52);
    beginShape();
    vertex(20, 400);
    vertex(20, 220);
    vertex(50, 220);
    vertex(50, 400);
    endShape();
    beginShape();
    vertex(130, 400);
    vertex(130, 220);
    vertex(160, 220);
    vertex(160, 400);
    endShape();
    fill(122, 87, 74);
    beginShape();
    vertex(20, 255);
    vertex(20, 280);
    vertex(160, 380);
    vertex(160, 355);
    vertex(20, 255);
    endShape();
    beginShape();
    vertex(160, 255);
    vertex(160, 280);
    vertex(20, 380);
    vertex(20, 355);
    vertex(160, 255);
    endShape();
    fill(72, 72, 72);
    ellipse(30, 275, 5, 5);
    ellipse(30, 360, 5, 5);
    ellipse(150, 275, 5, 5);
    ellipse(150, 360, 5, 5);
   }
   
   
  function sjór(){
    fill(76, 163, 232);
    strokeWeight(1);
    ellipse(40, 300, 100, 55);
    ellipse(120, 300, 100, 55);
    ellipse(190, 300, 100, 55);
    ellipse(273, 300, 100, 55);
    ellipse(355, 300, 100, 55);
    ellipse(436, 300, 100, 55);
    ellipse(515, 300, 100, 55);
    ellipse(590, 300, 100, 55);
    strokeWeight(0);
    rect(0,400, 600, -115);
  
     } 

  function fiskur(){
    /*Hér er fiskurinn gerður sem er 5 form.*/
    fill(241, 69, 56);
    strokeWeight(2);
    beginShape();
    vertex(Fx, Fy+ 230);
    vertex(Fx, Fy+ 255);
    vertex(Fx+20, Fy+ 245);
    vertex(Fx, Fy+ 230);
    endShape();
    fill(234, 219, 91);
    quad(Fx+20, Fy+ 245, Fx+ 55, Fy+225, Fx+90, Fy+245, Fx+55, Fy+265);
    fill(239, 99, 147);
    beginShape();
    vertex(Fx+25, Fy+242);
    vertex(Fx+28, Fy+ 220);
    vertex(Fx+35, Fy+230);
    vertex(Fx+37, Fy+215);
    vertex(Fx+45, Fy+225);
    vertex(Fx+47, Fy+210);
    vertex(Fx+56, Fy+225);
    endShape();
    fill(241, 69, 56);
    triangle(Fx+50, Fy+245, Fx+40, Fy+248, Fx+55, Fy+255);
    fill(4,4,4);
    ellipse(Fx+65, Fy+240, 5, 5);
     }

  function maður(){
    strokeWeight(3);
    noFill();
    //haus
    fill(248, 248, 248);
    ellipse(190, 150, 35, 35);
    ellipse(200, 150, 3, 3);
    //líkami
    line(190, 170, 190, 230);
    //fætur
    line(190, 230, 215, 215);
    line(215, 215, 200, 240);
    line(190, 230, 218, 230);
    line(218, 230, 217, 250);
    //hendur
    line(190, 195, 200, 205);
    line(200, 205, 220, 200);
    //staung og línan
    beginShape();
    fill('black');
    vertex(223, 189);
    vertex(230, 193);
    vertex(224, 202);
    vertex(217, 198);
    vertex(223, 189);
    endShape();
    strokeWeight(2);
    line(210, 210, 280, 120);
    strokeWeight(1);
    line(280, 120, 380, 300);
    beginShape();
    noFill();
    strokeWeight(2);
    vertex(380, 300);
    vertex(377, 310);
    vertex(374, 314);
    vertex(370, 309);
    endShape();
  } 
  
  //Hér eru pörin (x,y)(a,b)(c,d)(f,g)(h,j) og þau mynda stjörnur.
   var x = 50;
    var y = 100;
  var a = 140;
  var b = 50;
  var c = 250;
  var d = 130;
  var f = 350;
  var g = 60;
  var h = 500;
  var j = 180;

  function himinn(){
    
    fill('yellow');
    //stjörnur
    beginShape();
    vertex(x-10,y);
    vertex(x-3, y-3);
    vertex(x, y-10);
    vertex(x+3, y-3);
    vertex(x+10, y);
    vertex(x+3, y+3);
    vertex(x, y+10);
    vertex(x-3, y+3);
    vertex(x-10, y);
    endShape();
    beginShape();
    vertex(a-10,b);
    vertex(a-3, b-3);
    vertex(a, b-10);
    vertex(a+3, b-3);
    vertex(a+10, b);
    vertex(a+3, b+3);
    vertex(a, b+10);
    vertex(a-3, b+3);
    vertex(a-10, b);
    endShape();
    beginShape();
    vertex(c-10,d);
    vertex(c-3, d-3);
    vertex(c, d-10);
    vertex(c+3, d-3);
    vertex(c+10, d);
    vertex(c+3, d+3);
    vertex(c, d+10);
    vertex(c-3, d+3);
    vertex(c-10, d);
    endShape();
    beginShape();
    vertex(f-10,g);
    vertex(f-3, g-3);
    vertex(f, g-10);
    vertex(f+3, g-3);
    vertex(f+10, g);
    vertex(f+3, g+3);
    vertex(f, g+10);
    vertex(f-3, g+3);
    vertex(f-10, g);
    endShape();
    beginShape();
    vertex(h-10,j);
    vertex(h-3, j-3);
    vertex(h, j-10);
    vertex(h+3, j-3);
    vertex(h+10, j);
    vertex(h+3, j+3);
    vertex(h, j+10);
    vertex(h-3, j+3);
    vertex(h-10, j);
    endShape();
    
    } 
