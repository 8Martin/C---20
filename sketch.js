var a,b;

function setup() {
  createCanvas(1200,800);
  a=createSprite(100, 600, 50, 50);
  a.velocityX= 3;
  b=createSprite(500, 600, 70, 50);
  b.velocityX = -3;
}

function draw() {
  background(255,255,255);  

  if(a.x-b.x<a.width/2+b.width/2&&b.x-a.x<b.width/2+a.width/2){
   
    a.velocityX = a.velocityX*(-1);
    b.velocityX = b.velocityX*(-1); 
  }
 
  drawSprites();
}