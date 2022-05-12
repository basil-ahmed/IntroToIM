# New York University Abu Dhabi
## Introduction To Interactive Media
### Final Project: People Counter

#### Team Members:
- Faizan Raza
- Basil Ahmed

With the Coronavirus pandemic still very much a problem, practicing social distancing and staying away from others is especially important. However, this is difficult to do in enclosed and crowded areas.

Here is where the people counter can help. It keeps track of the number of people in a room or building by increasing a counter when people enter and decreasing the counter when people leave. Once the number of people in an area surpasses the maximum number of people allowed (which can be set by the user), an alarm will go off until the number of people is within bounds again.

This can prevent buildings and rooms from being over crowded, which can help to limit the virus's spread by making social distancing easier to practice.

The data gathered from the people counter will then be used and manipulated by p5js and the analysis can help the user to determine the pattern of occupancy in the room with regards to time on a certain day. Machine Learning can also be used to design an algorithm based on the data collected. This can help them to make policies to match the number of people in the room such as in the Library.

#### Working of Arduino Code:
- When the program first starts, both ultrasonic sensors measure the initial distances, so when it detects a person, the distance is changed.
- How it will work is if ultrasonic sensor A is activated before the ultrasonic sensor B, it will mark it as entry and if its vice versa it will mark it as exit and manipulate the count using the arduino code.
- When the count surpasses a specific value, the buzzer is sounded.
- We have kept checks where if a person enters, but not the full way in, and the 1st sensor detected the person, then he came out, the count will not increase.
- We have also kept a delay before the sensor starts detecting again to make sure the person has passed the sensor, when entering or exiting.

#### Working of P5js Code:
- There are 3 screens in total in P5js: 
- 1st is simply the count of people 
- 2nd is a realtime line graph showing that count
- 3rd is the analysis of the data in shape of a bar graph showing the average number of people in each hour of the day
- You can access the different screens by pressing 0, 1 or 2 respectively.

#### User Testing and Changes Made:
- We made 5 people go in and out repeatedly, and when the 6th person would go in the buzzer would sound (As the max limit set was 5), and when they immediately come back, it would turn off.
- A lot of the times, when a person was entering, it wouldn't count.
- Also, sometimes when the person would be entering, count would increase by 2 instead of 1.
- To solve this problem, we increased the delay so the sensor doesn't detect again until the person has passed.
- When a person would be exiting, the count would increment instead of decrementing.
- To solve this problem we increased the distance between the 2 ultrasonic sensors.
- We also put the sensors vertically so as to make them more accurate.

#### Photos:
![IMG_55DE75EC218D-2](https://user-images.githubusercontent.com/90772853/167846040-36a0368d-187e-43a7-ad47-1e9f0bb83f10.jpeg)
![IMG_55DE75EC218D-3](https://user-images.githubusercontent.com/90772853/167846185-d39a4554-7ec8-4674-94b6-d4eab75aa7be.jpeg)
![IMG_55DE75EC218D-1](https://user-images.githubusercontent.com/90772853/167846210-ffb27a4c-ed22-4ef1-ab3b-a10ab404e66b.jpeg)
#### Video:
https://user-images.githubusercontent.com/90772853/168021433-3d20d846-1ea5-4c09-9591-03380a177c18.mov

https://user-images.githubusercontent.com/90772853/168021772-efb514a2-77ea-42b9-901d-336f2b1e8a77.mov




#### Problems:
- If 2 people cross exactly together, it would count them as one.
- The Solution for this is to have the path small enough for only one person to pass through.
- Figuring out the correct distance between the 2 sensors (not too big not too small) was a bit tricky.
- Counting the hour and the day and using it with the data provided by arduino was tricky.
- Using Bluetooth instead of wires to connect to arduino was a challenge, we learnt it from the internet.
- Soldering wires to ultrasonic sensors was very hard since the space between 4 wires is extremely small.
- When a person is standing when the program starts it will disrupt the program.

#### Discoveries:
- We learnt how to connect Arduino with the computer through Bluetooth.
- The horizontal range of ultrasonic sensors is very high so we had to put them vertically.
- The initial distance should be when the program starts and not a set one since the sensor can be used at a lot of different places.
- Soldering wires, cutting and joining/pasting wood, making connections manually is extremely fun!!!

#### Schematics:
![Schematics](https://user-images.githubusercontent.com/90772853/165177557-fec20518-bd57-4c3b-a011-5f04a6872fa2.jpeg)
