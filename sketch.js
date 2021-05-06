var parentBirdImg;
var obstaclesImg;
var hunterImg1,hunterImg2;
var backgroundImg1,backgroundImg2,backgroundImg3;
var playImg;
var nestImg1;
var stoneImg1;
var kiteImg1,kiteImg2,kiteImg3,kiteImg4;
var gameState="start";
var life;


function preload(){
  parentBirdImg =loadImage("Images/Bird.png");
  obstaclesImg = loadImage("Images/Obstacles.png");
  backgroundImg1 = loadImage("Images/bg1.jpg");
  backgroundImg2 = loadImage("Images/bg2.png");
  backgroundImg3 = loadImage("Images/bg3.jpg");
  playImg = loadImage("Images/play1.png");
  nestImg1= loadImage("Images/nest.png");
  stoneImg1 = loadImage("Images/stone.png");
  hunterImg2 = loadImage("Images/hunter2.png")
  hunterImg1 = loadImage("Images/hunter3.png")
  kiteImg1 = loadImage("Images/kiteobstacle_image2.png");
  kiteImg2 = loadImage("Images/kiteobstaclesimage.png");
  kiteImg3 = loadImage("Images/kiteobstaclesimage3.png");
  kiteImg4 = loadImage("Images/kiteobstaclesimage4.png");
 
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  edges = createEdgeSprites();
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(gameState === "start"){

    setStart();

  }


  

}
function setStart(){
  bg=createSprite(width/2,height/2,width,height);
  bg.addImage(backgroundImg1);
  bg.scale = 6.4;
  //bg.visible = false;

  parentBird = createSprite(400,300);
  parentBird.addImage(parentBirdImg);
  parentBird.scale = 0.8;

  hunter = createSprite(1500,700);
  hunter.addImage(hunterImg1);
  hunter.scale = 0.8;

  playButton = createSprite(width/2,height/2);
  playButton.addImage(playImg);
  playButton.scale = 0.1;
 
}