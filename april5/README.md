# New York University Abu Dhabi
## Introduction To Interactive Media
### Assignment 6: Arduino Digital Input, Analog Input and Output

#### Description:
- I made a circuit that I call "Friendship/Love Tester". 
- A temperature sensor is used where if one person is touching from one side and the other person from the other side, the temperature increases as compared to room temperature. 
- When it starts, no LED is turned on. When temperature increases a bit, one red LED lights up! When temperature increases a bit further, another red LED lights up! 
- I've also added a push button switch where if you press it a blue LED turns on and starts blinking. The speed at which it blinks corresponds to the temperature. 
- When temperature increases rapidly, that means those two people have warm lovely feelings, whereas if the temperature increases slowly (the blinking light helps keep track of it) means that those two people don't love eachother much- they have cold feelings!
- This is just for fun, please don't kill me hahahha!

#### The Development Process:
- I started with installing the temperature sensor.
- I coded to check if it's working and in the right place.
- I, then, converted it's reading to get actual temperature in Celsius.
- After that, I installed 2 red LEDs each with 330 ohms resistors, and tested if they're working.
- I wrote the code for connecting the temperature sensor along with the LEDs.
- I then connected a switch, and tested if it's changing states correctly.
- I then attached a blue LED, tested it, connected it with the switch with writing it's code.
- I combined both of the code to join the circuits and corresponly act.
- Attached below are the pictures of the process.


- The start, all the components (additional wires were needed):

![Start](https://user-images.githubusercontent.com/90772853/161633226-9665d3d0-a5a5-4112-bc41-aa9ff755f7d8.jpeg)

- The Temperature Sensor Circuit with the 2 LEDS:

![Middle](https://user-images.githubusercontent.com/90772853/161633658-91b448bb-df83-4ca6-9bf4-f85ef1cfecf4.jpeg)

- The completed Circuit:

![End](https://user-images.githubusercontent.com/90772853/161633855-c8d88c9e-c678-4c0e-9ee3-930e66da9b32.jpeg)

#### Problems:
- Sometimes there was a delay in the LED turning off when the push button is left.
- Keeping tracks of wires and connections is extremely hard.
- Difficult to work with so many small pieces together.

#### Discoveries:
- The temperature on the temperature resistor can go upto 250 degrees celsius if the wires are in long place! BEWARE!
- That's how I burnt my finger while working on the project.

#### Video Output:
The video can be found here:


#### Schematics:

![Schematics](https://user-images.githubusercontent.com/90772853/161636395-da8e89e0-2ff7-4c78-a384-3a87d261c915.jpeg)
