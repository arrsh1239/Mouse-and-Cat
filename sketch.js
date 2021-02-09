
var catImage
var mouse 
var mouseImage
var back
var backgroundImage
var catRunning
var mouseTeasing
var carLastImage
var mouseLastImage

function preload() {
    //load the images here
    catImage = loadAnimation("images/cat1.png")
   catRunning = loadAnimation("images/cat2.png","images/cat3.png")
   mouseImage = loadAnimation("images/mouse1.png")
   mouseTeasing = loadAnimation("images/mouse2.png","images/mouse3.png")
   backgroundImage = loadImage("images/garden.png")
   catLastImage = loadAnimation("images/cat4.png")
   mouseLastImage = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
back = createSprite(400,340,1000,1000);
    back.scale = 1
    back.addImage("garden.png",backgroundImage)
    cat = createSprite(600,500,40,40);
    cat.addAnimation("tomOne",catImage);
    cat.scale = 0.1;
    mouse = createSprite(200,500,40,40);
    mouse.addAnimation("jerryOne",mouseImage);
    mouse.addAnimation("jerryTwo",mouseTeasing)
    mouse.scale = 0.1;
    cat.addAnimation("catOne",catImage)
    cat.addAnimation("catTwo",catRunning)
    cat.addAnimation("catFour",catLastImage)
    mouse.addAnimation("jerryFour",mouseLastImage);

}

function draw() {

    background(255);
    mouseTouching();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catTwo",catRunning)
    cat.changeAnimation("catTwo",catRunning)
    mouse.addAnimation("jerryTwo",mouseTeasing)                 
    mouse.changeAnimation("jerryTwo",mouseTeasing)   
}
      }
function mouseTouching(){
     
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.position.x = cat.position.x + 60
    cat.velocityX = 0;
    cat.changeAnimation("catFour",catLastImage)
    mouse.changeAnimation("jerryFour",mouseLastImage)                 
}
}