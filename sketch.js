var bullet, thickness;
var speed, weight, wall;

function setup() {
  createCanvas(1600,400);
  
  bullet= createSprite(50,200,50,5);
  bullet.shapeColor="white";
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(230,230,230)
}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    
    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness)

    if(deformation>10){
      wall.shapeColor = rgb(255,0,0);
    }
    if(deformation<10){
      wall.shapeColor = rgb(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall){
    bulletrightEdge=bullet.x+bullet.width;
    wallleftEdge=wall.x 
    if(bulletrightEdge>=wallleftEdge){
        return true
    }
    return false
}