// Hér kemur kóðinn þinn:

 
function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
   background(76, 130, 79);
  
  // ef þú ferð í þessari röð: rauði kvassinn, blái, appelsínuguli og svo bleiki þá koma upp skemmtileg skilaboð.
  if (mouseX <245 && mouseX>0 && mouseY < 245 ){
    kassi1();
   }
    else {
     mynd();
   }
    if (mouseX >245 && mouseY < 245 ){
    kassi2();
   }
    if (mouseX <245 && mouseY > 245 ){
    kassi4();
   }
    if (mouseX >245 && mouseY > 245 ){
    kassi3();
    }
      }
  function kassi1(){
    fill('red');
    rect(0,0,245,245);
    fill('green');
    beginShape();
    vertex(100, 50);
    vertex(150, 50);
    vertex(150, 200);
    vertex(100, 200);
    vertex(100, 50);
    endShape();
     }
  function kassi2(){
    fill('blue');
    rect(245,0, 255,245);
    fill('green');
    beginShape();
    vertex(375, 100);
    vertex(400, 70);
    vertex(425, 70);
    vertex(450, 100);
    vertex(450, 150);
    vertex(375, 200);
    vertex(300, 150);
    vertex(300, 100);
    vertex(325, 70);
    vertex(350, 70); 
    vertex(375, 100);
    endShape();
     }
  function kassi3(){
    fill('pink');
    rect(245,245, 255,255);
    fill('green');
    beginShape();
    vertex(300, 300);
    vertex(350, 300);
    vertex(350, 350);
    vertex(400, 350);
    vertex(400, 300);
    vertex(450, 300);
    vertex(450, 450);
    vertex(400, 450);
    vertex(400, 400);
    vertex(350, 400);
    vertex(350, 450);
    vertex(300, 450);
    vertex(300, 300);
    endShape();
     }
  function kassi4(){
    fill('orange');
    rect(0,245,245,255);
    fill('green');
    beginShape();
    vertex(25, 300);
    vertex(75, 300);
    vertex(125, 350);
    vertex(175, 300);
    vertex(225, 300);
    vertex(225, 450); 
    vertex(175, 450);
    vertex(175, 350);
    vertex(125, 400);
    vertex(75, 350);
    vertex(75, 450);
    vertex(25, 450);
    vertex(25, 300);
    endShape();
     }
  function mynd(){
    fill(76, 130, 79);
      rect(0,0,500,500);
    }