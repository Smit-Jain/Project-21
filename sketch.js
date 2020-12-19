
var car, wall;
var speed, weight;

function setup() {
  createCanvas(1200,400);
  
  car = createSprite(50,200,20,20);
  car.shapeColor="white";
  car.velocityX = speed;

  wall = createSprite(1150,200,20,200);

  speed = random(50,100);
  weight = random(500,2000);
}

function draw() {
  background(0);  

  if(wall.x-car.x<(wall.width+car.width/2)){
    car.velocityX = 0;
    
    var deformation = (0.5*weight*speed*speed)/22500

    if(deformation<100){
      car.shapeColor = rgb(0,255,0);
    }
    if(deformation>=100 && deformation<=180){
      car.shapeColor = rgb(230,230,0);
    }
    if(deformation>180){
      car.shapeColor = rgb(255,0,0);
    }
  }

  drawSprites();
}