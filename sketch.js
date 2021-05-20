var surfer1, surferImg, octopus, octopusImg;
var water, waterImg, fort, fortImg, island, islandImg;
var rock, rockImg, coin, coinImg, b1,b1img;
var rockGroup;

function preload() {
  surferImg = loadImage("girlAngleOnly.png");
  waterImg = loadImage("water.jpg");
  octopusImg = loadImage("monster.png");
  fortImg = loadImage("fort.png");
  islandImg = loadImage("island.png")
  rockImg = loadImage("rock.png");
  coinImg = loadImage("coin.png");
  b1img = loadImage("water.jpg");
  rockGroup = new Group();
}

function setup() {
  createCanvas(700, 600);
  b1 = createSprite(300,300);
  b1.addImage(b1img);
  b1.velocityY = -2;
  surfer1 = createSprite(150, 200, 20, 20);
  surfer1.addImage(surferImg);
  surfer1.scale = 0.05;
  octopus = createSprite(500, 200, 20, 20);
  octopus.addImage(octopusImg);
  octopus.scale = 0.1;
  
  island = createSprite(350, 350, 20, 20);
  island.addImage(islandImg);
  island.scale = 0.5;

}

function draw() {  
  background(255);
  if (b1.y > -300){
    b1.y = 150;
  }
  spawnrock();
  spawnfort();
  spawncoin();

  drawSprites()
  console.log(b1.y)

}
function spawnrock(){
  if(frameCount % -100 === 0){
   rock = createSprite(90, 90, 20, 20);
  rock.addImage(rockImg);
    rock.x = Math.round(random(1,600))
  rock.scale = 0.1;
    rock.velocityY = -3
    
  }
}
function spawnfort(){
  if(frameCount % -200 === 0 ){
    fort = createSprite(300, 100, 20, 20);
    fort.addImage(fortImg);
    fort.scale = 0.2;
    fort.x = Math.round(random(1,600))
    fort.velocityY = -3
  }
}
function spawncoin(){
  if(frameCount % -50 === 0){
  coin = createSprite(450, 60, 20, 20);
    coin.addImage(coinImg);
    coin.scale = 0.05;
    coin.velocityY = -5
    coin.x = Math.round(random(300,600))
  }
}
