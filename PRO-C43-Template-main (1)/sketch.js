var bg,bg2s;
var score=0;

function preload() {
  bgImg = loadImage("assets/Bg.png");
  carImg = loadImage("assets/Car.png")
}

function setup() {
  createCanvas(1000,500);

  bg = createSprite(width/2 , height/2 , width , height )
  bg.addImage(bgImg)
  
  car = createSprite(500 , 400 )
  car.addImage(carImg)
  car.scale = 0.2
}

function draw() {
  background(bg);
  
   image(bg , 0 , 0 , width , height)

  if(bg.y > height){
    bg.velocityY = 3
  }

  drawSprites()
}