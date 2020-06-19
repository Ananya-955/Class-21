var fixedRect, movingRect;
var ob1, ob2, ob3, ob4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1=createSprite(250,50,50,50);
  ob2=createSprite(700,500,60,30);
  ob3=createSprite(400,400,50,70);
  ob4=createSprite(490,50,20,50);

 //ob3.velocityY = -5;
  //fixedRect.velocityY = +5;
  ob1.velocityX=+5;
  ob4.velocityX=-5;
}

function draw() {
  background(0,0,0); 
  if (isTouching(movingRect, ob3)){
    movingRect.shapeColor="pink";
    ob3.shapeColor="blue";
  } 
  else{
  movingRect.shapeColor="green";
  ob3.shapeColor="grey";
  }

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  bounceOff(ob1, ob4);

  drawSprites();
}
function isTouching(object1, object2){
  if ((object1.x - object2.x < object2.width/2 + object1.width/2)
    && (object2.x - object1.x < object2.width/2 + object1.width/2) &&
    (object1.y - object2.y < object2.height/2 + object1.height/2)
    && (object2.y - object1.y < object2.height/2 + object1.height/2)) {
      return true;
    }
else
return false;
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1); 
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}

}