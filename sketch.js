const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var newx=0
var platform
var platformImg
var playerImg

function preload() {
  platformImg=loadImage("mt.png")
  playerImg=loadImage("climber.png")
}
function setup(){
  var canvas=createCanvas(displayWidth,displayHeight);
engine=Engine.create()
world=engine.world
platformGroup= new Group()
startWall= createSprite(100,height-100,200,200)

for (var i=0;i<25;i++){
platform1 =new Platform(newx)
newx=newx+platform1.width
platformGroup.add (platform1.body)
}
player= new Player()

}
function draw()
{
  background(0);
  translate(-player.body.x+100,0)
  drawSprites()
  //player.gravity()
  player.body.collide(platformGroup)
  startWall.collide(player.body)
  if (keyDown('right')){
    player.moveRight()
  }
  
  if(keyDown('left')){
    player.moveLeft()
  }

  if(keyDown('up')&& player.body.velocityY===0){
    player.moveUp()
  }
}
