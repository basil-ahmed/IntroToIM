function setup() {
  createCanvas(400, 400);
  background(255);

  // Loop for multiple straight lines and lines of squares
  for (count = 0; count < 30; count++) {
    
    // Randomise co-ordiates for making the lines 
    x_coordinate = random(0, 400);
    y_coordinate = random(0, 400);
    
    randval = random(0, 350); // Random value for the starting x co-ordinates of the line of squares
    y = random(0, 400); // Random value for the y co-ordinates of the line of squares
    
    // Loop for making one line of squares
    for (i = randval; i < randval + 500; i = i + 5) {
      fill(random(0, 255), random(0, 255), 255);
      strokeWeight(random(0, 4));
      square(i, y + y, 50);
    }
    
    // Making of straight lines
    stroke(random(0, 255), random(0, 255), 255)
    line(x_coordinate, y_coordinate, x_coordinate + 100, y_coordinate + 100);
    
  }
}
