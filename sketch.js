var ball,img,paddle;
var paddleimg,ballimg;

function preload() {
  /* preload your images here of the ball and the paddle */
  ballimg=loadImage("ball.png");
  paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(200,200,20,20);
  ball.addImage(ballimg);
  ball.velocityX=9;
  paddle=createSprite(370,200,20,20);
  paddle.addImage(paddleimg);
  

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
    
  {
    paddle.y=paddle.y+20;
    /* what should happen when you press the UP Arrow Key */
  }

  ball.bounceOff(paddle,randomVelocity);
  
  
  drawSprites();
  
}
 
function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
ball.velocityY=random(-5,5);
}

