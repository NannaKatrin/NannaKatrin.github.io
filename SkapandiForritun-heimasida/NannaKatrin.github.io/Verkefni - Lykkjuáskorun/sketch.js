// Hér kemur kóðinn þinn:

function setup() {
    createCanvas(400,400);
    background(255, 215, 0);
    fill(0);
    colorMode(HSB);
    frameRate(5);
  }
  
  function draw(){
    
     for(var i = 0; i < 20 ; i = i + 1) {
      fill(random(0,360),75,100);
      for(var b = 0; b < 20 ; b = b + 1)
      ellipse(10 + i*20, 10+ b*20 , 15, 15);
     }
  }