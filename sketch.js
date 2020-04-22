
var r = 0;
var g = 0;
var b = 0;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,800);
}


function draw(){

  r=map(mouseX,0,1200,0,20);
  g=map(mouseX,0,1200,1,20);
  b=map(mouseX,0,1200,50,255);


  background(r,g,b);

  ellipse(mouseX,400,40,40);


  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}