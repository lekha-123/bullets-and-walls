var wall;
var speed,weight,thickness,bullet;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  wall=createSprite(1500, 200, thickness, height/2);
  bullet.velocityX=speed;
  wall.shapeColor=color(150,80,80);
}

function draw() {
  background(255,255,255);  
 
if(collided(bullet,wall))
{
  bullet.velocityX=0;
  var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10)
    {
     wall.shapeColor=color(255,0,0);
    }
  
  if(damage<10)
        {
         wall.shapeColor=color(0,255,0);
        }  
}
console.log(damage);
console.log(bulletRightEdge);
console.log(wallLeftEdge);
  drawSprites();
}
function collided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}