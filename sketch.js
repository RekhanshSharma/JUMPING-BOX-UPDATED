var music;
var edges;
var blueSurface;
var redSurface;
var greenSurface;
var orangeSurface;
var box;
var boxYRand, boxXRand;
var boxOuterLayer;
var gameState = "chooseBoxVelocity";

function preload(){
  music = loadSound("music.mp3");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  boxYRand = Math.round(random(-10, 10));
  boxXRand = Math.round(random(-10, 10));

  //create 4 different surfaces
  blueSurface = createSprite(windowWidth/20*4, windowHeight-26, 100, 50);
  blueSurface.shapeColor = "blue";

  redSurface = createSprite(windowWidth/20*8, windowHeight-26, 100, 50);
  redSurface.shapeColor = "red";

  greenSurface = createSprite(windowWidth/20*12, windowHeight-26, 100, 50);
  greenSurface.shapeColor = "green";

  orangeSurface = createSprite(windowWidth/20*16, windowHeight-26, 100, 50);
  orangeSurface.shapeColor ="orange";

  box = createSprite(Math.round(random(windowWidth/10, windowWidth/10*9)), windowHeight/2, 40, 40);
  box.shapeColor = "white";

  if(gameState === "chooseBoxVelocity"){
    box.velocityY = boxYRand;             
    box.velocityX = boxXRand;
    gameState = "playing";
  }
}

function draw() {
  background(0);
  console.log("this is a message")

  edges = createEdgeSprites();

  if(box.isTouching(blueSurface)){
    box.shapeColor = "blue";
    box.velocityX = 0;
    box.velocityY = 0;
    music.play();
    box.bounceOff(blueSurface);
  }
  if(box.isTouching(redSurface)){
    box.shapeColor = "red";
    music.play();
    box.bounceOff(redSurface);
  }
  if(box.isTouching(greenSurface)){
    box.shapeColor = "green";
    music.play();
    box.bounceOff(greenSurface);
  }
  if(box.isTouching(orangeSurface)){
    box.shapeColor = "orange";
    music.play();
    box.bounceOff(orangeSurface);
  }

  drawSprites();

  box.bounceOff(edges);

}
