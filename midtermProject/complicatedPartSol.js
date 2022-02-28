let count = 8;
let position = 0;
let type = 0;
let platforms = [];

class Platform{
  
  constructor(x,y,w,h){
    
    this.w = w
    this.h = h
    this.x = x
    this.y = y
    
  }

  move(){
    y = y - 4
  } //moving platforms upwards
      
  
  display(){
    rect(x,y,w,h)
  }

} //Forms platforms

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(220);
  
  if (count == 8) {
    
    for (let i = 0; i < 8; i++) {
      position = random(0,4)
      type = random(0,4)
      count = count - 1
      new_platform = new Platform(position*120, (i+1)*100, 120,25)
      platforms[i] = new_platform
    }
  }
                
    for (p in platforms){
      
      if (p.y == 0){
                platforms.remove(p)
                count +=1
                break  
      }
  
    } //remove platforms when they reach the top
            
}
