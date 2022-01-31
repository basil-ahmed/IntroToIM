function setup() {
  createCanvas(400, 400);
  background(220);
  
  fill(0,96,255)
  arc(200, 450, 250, 400, PI, 0)
  
  fill(255)
  line(190, 320, 190, 450)
  
  fill(220, 178, 128)
  stroke(38,30,24)
  ellipse(292,145, 5, 20)
  ellipse(108,145, 5, 20)
  
  fill(1)
  circle(200, 330, 5)
  circle(200, 350, 5)
  circle(200, 370, 5)
  circle(200, 390, 5)
  
  fill(220, 178, 128)
  stroke(38,30,24)
  ellipse(200,250,80,100) 
  circle(200, 150 , 185);
  
  fill(38,30,24)
  noStroke()
  ellipse(200, 80, 140, 50)
  
  arc(150, 90, 50, 50, 0, PI - QUARTER_PI, OPEN);
  arc(180, 75, 80, 80, 0, PI, OPEN);
  arc(220, 75, 80, 80, 0, PI, OPEN);
  arc(250, 90, 50, 50, 0, PI + QUARTER_PI, OPEN);
  circle(133,105,30)
  circle(271,109,30)
  circle(146,97,20)
  circle(269,97,20)
  circle(136,92,20) 
  circle(264,86,20)
  
  
  fill(255)
  stroke(1)
  ellipse(160, 143, 30, 20)
  ellipse(240, 143, 30, 20)
  
  fill(38,30,24)
  noStroke()
  circle(165, 147,10)
  circle(245, 147,10)
  
  fill(145,115,88)
  ellipse(200,170, 12, 30)
  triangle(200,173, 190, 190, 210, 190)
  arc(200,195,70,60,PI/5,4*PI/5, CHORD)
  
  fill(255)
  stroke(1)
  rect(177,215,3)
  rect(180,215,4)
  rect(185,215,5)
  rect(190,215,5)
  rect(195,215,5)
  rect(200,215,5)
  rect(205,215,5)
  rect(210,215,5)
  rect(215,215,4)
  rect(220,215,3)

}
