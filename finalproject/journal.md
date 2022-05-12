# New York University Abu Dhabi
## Introduction To Interactive Media
### Final Project: People Counter

##### Date: 19th April 2022

#### Team Members:
- Faizan Raza
- Basil Ahmed

#### The Initial Idea:
- Our idea of the final project revolves around the concept of using arduino to count the number of people present in a room at a time. 
- Our initial idea was to use only one motion sensor connected to the arduino to detect movement in and out of the room but soon we realized that it would be hard to differentiate between people entering and exiting the room. 
- So courtesy of our friend Emaan, we now plan to install three motion sensors, one on one side of the door, one on the other side and one over the door. 
- The sensor on top of the door will ensure that the person actually passed the door and sensors on either sides of the door will help differentiate whether the person entered or exited based on the order in which they are activated. 
- Then we will use p5js to analyse and model the data gathered from the arduino. 
- And if it is implemented and a substantial amount of data is gathered, machine learning models can be used to predict the number of people at a certain time on a certain day which could be helpful for decision making such as in the library.

##### Date: 23rd April 2022

#### Finalized Idea - People Counter
With the Coronavirus pandemic still very much a problem, practicing social distancing and staying away from others is especially important. However, this is difficult to do in enclosed and crowded areas.

Here is where the people counter can help. It keeps track of the number of people in a room or building by increasing a counter when people enter and decreasing the counter when people leave. Once the number of people in an area surpasses the maximum number of people allowed (which can be set by the user), an alarm will go off until the number of people is within bounds again.

This can prevent buildings and rooms from being over crowded, which can help to limit the virus's spread by making social distancing easier to practice.

The data gathered from the people counter will then be used and manipulated by p5js and the analysis can help the user to determine the pattern of occupancy in the room with regards to time on a certain day. Machine Learning can also be used to design an algorithm based on the data collected. This can help them to make policies to match the number of people in the room such as in the Library.

How it will work is if ultrasonic sensor A is activated before the ultrasonic sensor B, it will mark it as entry and if its vice versa it will mark it as exit and manipulate the count using the arduino code

#### Design:
The design will consist of an acrylic board over which two breadboards will be installed. The circuit will consist of a buzzer, two ultransonic/infrared sensors, a bluetooth module and an arduino powered by a battery. 

#### Arduino Input and Output:
The inputs would be the two ultrasonic or infrared sensors, which will be analog and will continuously provide information to the arduino. The outputs would be the buzzer, which will ring when the max capacity is reached, a bluetooth module, which will send information to the laptop in order to analyze the data.

#### P5 Input and Output:
The input p5 is taking is the count from the arduino, when a person is detected either entering or exiting. The output would be on an LED screen, just like the Air Quality Index on campus, the count of the people and data analysis in the shape of a graph. p5 will also save the data into a csv file so in case the p5 program closes the p5 program can load data from the csv

##### 25 April 2022

#### Setting up the circuit
We used two breadboards with an ultrasonic sensor attached to both breadboards a certain distance apart. A buzzer is attached to one breadboard which is tirggered when the maximum amount (that can be set in the code) of people pass the room. 

#### Problems Faced
- Initially we put the breadboards flat horizontal on the table and the problem we faced was that the waves from the ultrasonic spread horizontally which caused the counter to usually double count and problems in determining which sensor was triggered first. But we fixed that by putting the breadboards vertically from a certain distance from each other so the waves from the ultrasonic sensor are dispersed vertically and not horizontally.
- Another problem that we faced was that we were just setting a threshold to detect movement but we soon realized that in different scenarios there would be different things in the background which could interfere with our readings so we calculated the initial measurement and set the threshold according to that value so it detects a change in the background signalling a passing person in order to increment or decrement the count
- Another problem we faced was determining the perfect distance from the sensors and the delay values that would better the program. How we got around that was simple, by trial and error: checking multiple values of the threshold and the delay and seeing which gives the best results.

#### Next Steps
Now we need to do some soldering to connect wires to the ultrasonic because right now the two breadboards are very close to each other causing problems in counting if the person is not walking in an almost perfect posture. Then after the solder and connect the two breadboards, we need to stick the breadboard to an enclosure and that enclosure can then be put up on a door. We also need to connect the battery in order to make the arduino wireless and also a bluetooth sensor so that the arduino can send data into the computer and p5js can then use the data for descriptive and predictive analysis.

#### Output So Far:
Initial Horizontal Positioning:

![8](https://user-images.githubusercontent.com/90772853/165176265-cd967296-9d21-4eac-967c-dfe09513545a.jpg)
![7](https://user-images.githubusercontent.com/90772853/165176367-ea3d88e0-14b4-47dd-8938-27a896d3de53.jpg)
![6](https://user-images.githubusercontent.com/90772853/165176428-d35afad5-180a-4a70-91a7-ab69ca106c12.jpg)
![5](https://user-images.githubusercontent.com/90772853/165176465-6cff99dc-46bb-4e57-b90e-86c36074d3a1.jpg)

Switching to Vertical (An idea of how it will look like):

![4](https://user-images.githubusercontent.com/90772853/165176599-74c57df8-ece4-4604-8ead-7a16cbfca8e1.jpg)
![1](https://user-images.githubusercontent.com/90772853/165176693-bbe89bba-ec99-4bf7-82d0-d40d59cc18fe.jpg)
![2](https://user-images.githubusercontent.com/90772853/165176717-3a43d9b1-5b7f-4cf8-bfb4-cfc32bd6b459.jpg)
![3](https://user-images.githubusercontent.com/90772853/165176724-9387cc6f-bdf2-42f4-8f6d-955444937834.jpg)

Working:

https://user-images.githubusercontent.com/90772853/165177019-75a13aca-2fa2-4f83-ab30-aee1a2ac53b8.mov

https://user-images.githubusercontent.com/90772853/165177039-8b24bc52-40a2-4f05-b8c8-728083f3dd0b.mov

#### Schematics (So Far):

![Schematics](https://user-images.githubusercontent.com/90772853/165177557-fec20518-bd57-4c3b-a011-5f04a6872fa2.jpeg)

##### Date: 30th April 2022

#### p5js Coding:
- We had to analyze the data we were going to get from Arduino and integrate it into graphs that will prortay the information differently. 
- Firstly, we simply wanted to show the count of people in a room on the screen.
- Secondly, a real time count of people in the shape of a line graph.
- Lastly, think of a way of showing the number of people throughout the day (to keep track of what hours are there the most people and vice versa).
- We used a sample set of data, and put it in an array. But since the data was so much for the real time graph, using an array was very slow. We figured out another way and started using p5js tables for a faster data access.
- Another problem we faced was that for analyisng the data (the rush hour data), we needed all the data ever recorded. Storing it in the progran itself meant data would vanish whenever program closes.
- To fix that problem, we transferred all data to a csv file whenever it closes. So whenever program loads up, along with getting the new data from arduino, it will take data from the csv file.

##### Date: 6th May 2022

#### User Testing and Changes Made:
- We made 5 people go in and out repeatedly, and when the 6th person would go in the buzzer would sound (As the max limit set was 5), and when they immediately come back, it would turn off.
- A lot of the times, when a person was entering, it wouldn't count.
- Also, sometimes when the person would be entering, count would increase by 2 instead of 1.
- To solve this problem, we increased the delay so the sensor doesn't detect again until the person has passed.
- When a person would be exiting, the count would increment instead of decrementing.
- To solve this problem we increased the distance between the 2 ultrasonic sensors.
- We also put the sensors vertically so as to make them more accurate.

##### Date: 8th May 2022

#### p5js Coding:
- The people counter and the real time graph was done.
- For the rush hour analysing, we thought of using a bar graph.
- What the program will do is analyse all the data we have and the hours they were in by checking the time in the program itself.
- It will then show the count of people in every hour interval of the day, in the shape of a bar graph.
- Then, we seperated it into states. 
- Pressing 0 on the computer would show the people count in Numbers.
- Pressing 1 on the computer would show the realtime count of people in the shape of a line graph.
- Pressing 2 on the computer would show the bar graph protraying what how the number of people in the place correlate to the hour of the day.

#### Next Steps:
- Combine P5js with Arduino.
- Figure out how to connect arduino to computer through bluetooth.
- Make a structure for the people counter so the 2 sensors are at enough distance from eachother to minimize bugs.

##### Date: 10th May 2022

#### Structure of the Device:
- First we thought of having an acrylic box type strucutre for the People Counter.
- The problem with Acrylic was cutting it, so we switched to a wooden structure.
- We also took headers and soldered them with wires for both of the scanners, as it would let us to use the scanners in greater range.
- We approximated the distance between the 2 scanners, where it will be best for them to work.
- We also made the structure so it's easy to put it somewhere.
- Heat shrinked the wire set of the ultrasonic sensors so it's managable and more in place.

#### Output of the Structure:
![IMG_55DE75EC218D-2](https://user-images.githubusercontent.com/90772853/167846040-36a0368d-187e-43a7-ad47-1e9f0bb83f10.jpeg)
![IMG_55DE75EC218D-3](https://user-images.githubusercontent.com/90772853/167846185-d39a4554-7ec8-4674-94b6-d4eab75aa7be.jpeg)
![IMG_55DE75EC218D-1](https://user-images.githubusercontent.com/90772853/167846210-ffb27a4c-ed22-4ef1-ab3b-a10ab404e66b.jpeg)


#### Next Steps:
- Combine P5js with Arduino.
- Figure out how to connect arduino to computer through bluetooth.

##### Date: 12th May 2022

#### Combining P5js with Arduino:
- Arduino sends the count of people to P5js
- p5js puts it into tables, it also takes data from its CSV file
- p5js analyses the data and outputs it into 3 different states

#### Bluetooth Module:
- We switched our prototype from wireless to wired
- The utility wasn't as much, and the bluetooth module available was outdated.
- It wasn't working so we removed it altogether.
