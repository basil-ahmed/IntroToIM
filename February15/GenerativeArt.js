class make_circle {
  
  //takes attributes for the middle circle
  constructor(centerX, centerY, diameter) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.diameter = diameter;
  } 
  
  //makes 5 duplicate circles on all 4 sides of the middle one
  duplicate() { 
    circle(this.centerX, this.centerY, this.diameter);
    circle(this.centerX-50, this.centerY-50, this.diameter);
    circle(this.centerX-50, this.centerY+50, this.diameter);
    circle(this.centerX+50, this.centerY-50, this.diameter);
    circle(this.centerX+50, this.centerY+50, this.diameter);
  }
  
  //changes color randomly (r, g, or b)
  change_color(choice) {
    if (choice == 1){
      fill(random(255), 0, 0,90);
    }
    if (choice == 2){
      fill(0, random(255), 0,90);
    }
    if (choice == 3){
      fill(0, 0, random(255),90);
    }
    
  }
}



function setup() {
  createCanvas(400, 400);
  frameRate(10); //to give it a calmer, pleasing effect
}

function draw() {
  
  background(255);
  noStroke();
    
  //constructs circle sets from bottom-left to top-right
  for (let i = 0; i > -230; i = i-50) {
      let anim2 = new make_circle(100-i, 300+i, 70);
      anim2.duplicate();
      anim2.change_color(3);
      anim2.change_color(1);
  }
 
  //constructs circle sets from top-left to bottom-right
  for (let i = 0; i < 230; i = i+50) {
      let anim1 = new make_circle(100+i, 100+i, 70);
      anim1.duplicate();
      anim1.change_color(1);
      anim1.change_color(3);
  }

}
