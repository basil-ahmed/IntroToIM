let game_started=false

// Pre-load all files 
// (except platforms as they're random)
function preload() {
  bgMusic = loadSound('background.mp3');
  spikeRow= loadImage('5.png');
  gameover_img = loadImage('end.png');
  SpikeSound = loadSound("spike.mp3");
  FireSound = loadSound("fire.mp3");
  LandSound = loadSound("land.mp3");
  ScreamSound = loadSound("scream.mp3");
  img1 = loadImage('kid1.png');
  img2 = loadImage('kid2.png');
  img = loadImage('bg.jpeg');
}

// Characteristics of the game
class Game {
  
  constructor(w, h, g, ground) 
  // g is length of spikes
  // ground is the bottom ground of the game 
  // (where character lands)
  {
    this.w = w;
    this.h = h;
    this.g = g;
    this.ground = ground;
    this.speed = 0;
    this.level = 0;
    this.kid = new
      Player(this.g+100, this.g+100, this.g, 800, 100, 100);
    this.platforms = [];
    this.gameOver = false;
    this.count = 8;
    this.bgMusic = bgMusic;
    this.spikeRow = spikeRow;
    this.bgMusic.loop(); // Playing background music on loop
  }
  
  form_platform() {
  
    // Randomly forms platforms of 
    // different types at the start of the game 
    if (this.count == 8) 
    {
      for (let i = 0; i < 8; i++)
      {
        let position = random([0,1,2,3,4]);
        let type = random([0,1,2,3,4]);
        this.count = this.count - 1;
        let new_platform = 
            new Platform(120, 25, position*120, (i+1)*100, type);
        this.platforms.push(new_platform);
      }
    }
    
    // Removing Platforms when they reach the top
    for (let i = 0; i < this.platforms.length; i++)
    {
      if (this.platforms[i].y <= 0) 
      {  
        this.platforms.splice(i,1);
        this.level = this.level + 1;
        this.count = this.count + 1;
        break;
      }
    }
    
    // Randomly forms platforms of 
    // different types until the game is over 
    if (this.gameOver == false && this.count == 1) {
      this.count = this.count - 1;
      let position = random([0,1,2,3,4]);
      let type = random([0,1,2,3,4]);
      let new_platform1 = 
          new Platform(120, 25, position*120, 800, type);
      this.platforms.push(new_platform1);
    }
    
  }
  
  // Displays Character and Platforms
  display() {
    
    // Displaying the row of spikes at the top
    image(this.spikeRow, 0, 0, 120, 51);
    image(this.spikeRow, 120, 0, 120, 51);
    image(this.spikeRow, 240, 0, 120, 51);
    image(this.spikeRow, 360, 0, 120, 51);
    image(this.spikeRow, 480, 0, 120, 51);
    
    // Moving platforms (until game is over) and 
    // displaying the character
    for (let i = 0; i < this.platforms.length; i++)
    {
      if (this.gameOver == false) 
      {
        this.platforms[i].move();
      }    
      this.platforms[i].display();
    
    }
    this.kid.display();
  }
  
}

// Contains the feautures of the player
class Player {
  
  constructor(x, y, g, ground, char_w, char_h) 
  {
    this.x = x;
    this.y = y;
    this.g = g;
    this.ground = ground;
    this.char_w = char_w;
    this.char_h = char_h;
    this.vx = 0; // Change in x coordinate of the character
    this.vy = 1; // Change in y coordinate of the character
    this.on = 0;
    this.life = 10; // Starting health is 10
    this.dir = 1; // Direction
    this.gameover_img = gameover_img;
    this.SpikeSound = SpikeSound;
    this.FireSound = FireSound;
    this.LandSound = LandSound;
    this.ScreamSound = ScreamSound;
    this.img1 = img1;
    this.img2 = img2;
    this.keyHandler = {LEFT:false, RIGHT:false, UP:false};
  }
  
  // Falling of the character
  gravity() {
    
    if (this.y + this.char_h < this.ground) 
    {
      this.vy += 0.5;
    }
    else
    {
      this.vy = 0;
    }       
    
    // Changes the ground of the character to 
    // the y position of the platform below it
    for (let i = 0; i < game.platforms.length; i++) 
    {
      if (game.platforms[i].x <= this.x+50 && 
          this.x+50 <= game.platforms[i].x + game.platforms[i].w && 
          this.y + this.char_h - game.platforms[i].y <= 30 && 
          game.platforms[i].type != 4)
      {
          this.ground = game.platforms[i].y;
          return;
      }
    }
      
    this.ground = game.ground;
      
  }
  
  // Updating character stats according to player input
  update() {
    
    this.gravity();

    // Horizontal movement of the player
    if (this.keyHandler[LEFT])
    {
      this.vx = -7;
      this.dir = -1;
    }
    else if (this.keyHandler[RIGHT])
    {
      this.vx = 7;
      this.dir = 1;
    }
    else
    {
      this.vx = 0;
    }
    
    //Moving of the character
    this.x += this.vx;
    this.y += this.vy;
    if (this.y + this.char_h > this.ground)
    {
      this.y = this.ground - this.char_h;
    }
    
    // When landed on a platform 
    // (Increase life or decrease life depending on 
    // the platform type)
    if (this.vy == 0) 
    {
      for (let i = 0; i < game.platforms.length; i++)
      {
        if (this.on == 0 &&
           game.platforms[i].x <= this.x + 50 &&
           this.x + 50 <= game.platforms[i].x + game.platforms[i].w &&
           this.y + this.char_h == game.platforms[i].y)
        {
          if (game.platforms[i].type == 1) {
            this.SpikeSound.play();
            this.reduce_life();
            this.reduce_life();
            this.on = 1;
          }
          else if (game.platforms[i].type == 2) {
            this.FireSound.play();
            this.reduce_life();
            this.on = 1;
          }
          else if (game.platforms[i].type == 0 ||
                   game.platforms[i].type == 3) {
            this.LandSound.play();
            if (this.life < 10) {this.plus_life();}
            this.on = 1;
          }
        }
      }
    }
    else
    {
      this.on = 0;
    }
    
    // Conditions for game over
    if (800 - this.char_h == this.y &&
       game.gameOver == false)
    {
      this.gameOver();
    }
    else if (this.life <= 0 &&
            game.gameOver == false)
    {
      this.gameOver();
    }
    
    // When player hits the above row of spikes
    if (this.y + 50 <= 70) {
      this.SpikeSound.play();
      this.y = 40;
      this.reduce_life();
    }
    
    // For the player to not go outisde the screen (Horizontally)
    if (this.x < 1) {
      this.x = 0;
    }
    else if (this.x + this.char_w > 600) {
      this.x = 600 - this.char_w;
    }
    
  }
  
  // Reduce Life Function if life is above 0
  reduce_life() {if (this.life > 0) {this.life = this.life - 1;}}
  // Increase life function
  plus_life() {this.life = this.life + 1;}
  
  // Game over sound and screen display
  gameOver() {
    this.ScreamSound.play();
    game.gameOver = true;
  }
  
  // Display the character going left or right  
  display() {
    this.update()
    if (this.dir > 0) {
      image(this.img1,this.x,this.y,this.char_w,this.char_h);
    }
    if (this.dir < 0) {
      image(this.img2,this.x,this.y,this.char_w,this.char_h);
    }
  }
  
}

// Contains the moving and display features for platforms
class Platform {
  
  constructor(w,h,x,y,t) 
  {
    this.w = w; // Platform width
    this.h = h; // Platform Height
    this.x = x; // Paltform x-coordinate
    this.y = y; // Platform y-coordinate
    this.type = t; // Platform's type
    this.img = loadImage(str(this.type) +'.png');
  }
  
  move() // Moving the platform upwards
  {
    // Gradually increase the game speed as it moves on
    this.y = this.y - 4 - (game.level/100);
  }
  
  // Display Platform according to the type
  display()
  {
    image(this.img,this.x,this.y,this.w,this.h);
  }
  
}

let game; // Initialisation of the global game variable

function setup() {
  
  createCanvas(600, 800);
  
}

function draw() {
  
  background(img);
  
  // Start Game When Mouse Clicked
  if (game_started==true)
  {
    game.form_platform();
    game.display();

    // Scoreboard
    fill(202, 0, 42)
    rect(5, 45, 150, 85)
    fill(255,255,255);
    textSize(40);

    //Increase 1 score for 25 platforms passed
    text('Score:'+str((int(game.level/25))+1),10,80);

    // Display Player Health
    text('Life:'+str(game.kid.life),10,120);

    // Display Game Over Message
    if (game.gameOver == true) {
      image(game.kid.gameover_img,170,300,250,300);
      text("Click to Restart!!", 150, 650);
    }
  }
  // Display The Menu
  else{
    
    fill(200, 0, 255)
    text("Welcome To Kid's Going Downstairs! ", 100, 50)
    
    fill(255,0,0)
    text('How To Play The Game:', 100, 120)
  
    fill(255,0,150)
    text('•	As soon as the game starts, the player falls.', 100, 150)
    text('•	Control the player movement by pressing the Right and Left keys respectively.', 100, 170)
    text('•	Move the player while it’s falling (in the air) as well as on the platforms.', 100, 190)
    text('•	Avoid touching the harmful platforms, but if no safe platforms exist, jump on harmful ones ', 100, 210) 
    text('  to keep on moving, as you can get your health recovered.', 100, 230)
    text('•	Try to get as much of a high score as possible!', 100, 250)
    text('•	When life goes 0, or player touches\falls on the ground, the game ends.', 100, 270) 
    text('•	Click mouse to restart the game.', 100, 290)
    text('•	Most importantly, Enjoy your time while playing!!!', 100, 310)
    
    fill(255, 0, 0)
    text('PLEASE MAKE SURE THE GAME PREVIEW FITS YOUR SCREEN', 100, 400)
    text('If it does not, please use a monitor', 100, 420)
    
    fill(200, 0, 255)
    text('CLICK TO PLAY THE GAME', 100, 500)
  }
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        game.kid.keyHandler[LEFT] = true; }
    else if (keyCode == RIGHT_ARROW) {
        game.kid.keyHandler[RIGHT] = true; }
}

function keyReleased() {
    if (keyCode == LEFT_ARROW) {
        game.kid.keyHandler[LEFT] = false; }
    else if (keyCode == RIGHT_ARROW) {
        game.kid.keyHandler[RIGHT] = false; }
}

function mouseClicked() { //Start and Restart Game when mouse clicked
    if (game_started==false){
      game = new Game(600, 800, 51, 800);
      game_started=true
    }
    if (game.gameOver == true) {
        game = new Game(600,800,51,800); }
}
