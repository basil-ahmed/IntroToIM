# New York University Abu Dhabi
## Introduction To Interactive Media
### Assignment 7: The 3 In-class Assignments

#### 1. Make something that uses only one sensor on arduino and makes the ellipse in p5 move on the horizontal axis, in the middle of the screen, and nothing on arduino is controlled by p5
##### p5js link: https://editor.p5js.org/basilahmed46/sketches/QUa7bzz12
##### Description:
- Ellipse on p5js moves horizontally corresponding to turning the potentiometer.
- As the user rotates the potentiometer, the x-axis of the ellipse is changed.
- We had the map the values of the poteniometer from 0 - 1023 to 0-the width of the canvas. 
- The latest data refers to the analog reading taken from the arduino device. It first has to be converted to an integer using the int() function.
- The y axis, width, and height of the ellipse stay constant throughout the program. Only the x-axis changes.

#### 2. Make something that controls the LED brightness from p5
##### p5js link: https://editor.p5js.org/basilahmed46/sketches/m3PKJjK3x
##### Description:
- The number keys on the PC's keyboard corresponds to how bright the bulb would be.
- At 0, it is off and at 5, it is at the maximum brightness.

#### 3. Take the gravity wind example and make it so every time the ball bounces one led lights up and then turns off, and you can control the wind from one analog sensor
##### p5js link: https://editor.p5js.org/basilahmed46/sketches/pBmhfN6pI
##### Description:
- Pretty self explanatory.
- This prompt asked us to modify an already existing example.
- In the example, a ball is dropped into the canvas which slowly loses height to show loss of total energy in the ball.
- The user can control the wind using the LEFT and RIGHT arrow keys, which makes the ball move in the corresponding direction.
- To modify this, we used a potentiometer again. The potentiometer is used to control the wind.
- We again had to map the values from 0-1023 to -2 to 2. This means that somewhere in the middle of the rotation of the potentiometer is the point where wind = 0.
- To make the LED blink everytime the ball bounces, we made use of an already existing condition in the program where a bounce is detected.
- We simply added two additional statements. One inside the condition, where if the ball has met the ground, the output to the LED would be HIGH. The second outside the condition, using an else statement to send a value of LOW to the LED.
- The second statement is needed to make sure that the light blinks and does not stay on after the first bounce.

##### Outcome:
https://youtube.com/shorts/AqmoP3S5bDU?feature=share
