function setup() {
  createCanvas(800,600);
  background(255,200,0);
  strokeWeight(2.5);
}

function draw() {
  //head
  fill(0,150,150);
  noStroke();
  ellipse(420,160,140,140);
  
  //eye
  fill(100,0,0);
  ellipse(440,160,50,50);

  //purple
  fill(200,0,100);
  ellipse(475,150,10,10); 
  
  //red
  fill(225,0,0);
  ellipse(400,150,20,20);
  
  //red
  fill(255,0,0);
  ellipse(440,160,10,10);
  
  //wheel
  fill(100,0,0);
  ellipse(395,500,100,100);
  
  //body
  fill(255,0,0);
  rect(320,300,150,200);
  
  fill(100,0,0);
  rect(320,320,150,15);
    
  //neck
  //line1
  stroke(200,0,100)
  line(400,300,400,228);
  
  //line2
  stroke(200,0,100)
  line(415,300,415,230);
  
  //line3
  stroke(200,0,100)
  line(430,300,430,230);
  
  //Antennas
  //line4
  stroke(200,0,100)
  line(340,80,370,110);
  
  //line5
  stroke(200,0,100)
  line(565,40,478,122);
  
  //line6
  stroke(200,0,100)
  line(525,200,482,190);
  
  
}