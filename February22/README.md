# New York University Abu Dhabi
## Introduction To Interactive Media
### Assignment 4: Data Visualization

The bar graph represents the trend of searches for "p5js" on Google from the beginning of 2021 till present(February 2022).
It clearly shows how the popularity of p5js increased overtime, as the trend moves upward.

#### Process:
I started with finding the csv file first. I wanted to see how popularity/usage of p5js in the modern world changed.
I went on to trends.google.com and downloaded the csv file for searches for keyword "p5js".
I loaded the file in preload and read each line in setup, put necessary checks in place to make sure the program doesn't crash.
I scaled the data according to the canvas I had for the graph to fit perfectly in canvas.
As the number of searches increases, the bar height increses.
I changed the color of the bars to the color pink that represents p5js itself. Then I put in a beige background for it to look visually pleasing.
The trend I got was an upwards trend that clearly shows it got more popular overtime.

#### Problems:
- The header was being read which couldn't be converted to integer and was causing the program to crash.
- If a line was empty or had text, the program crashed.
- Calculating width of the bars.
- I got stuck on actually drawing the bar.
- Spacing out the bars and equally.

#### Solutions:
- I started to read the line from the 2nd line of the file.
- Added a check to say that the specific line number wasn't able to be read, so the program can go on without crashing.
- Divided the width of canvas by the number of lines there were in the file/amount of data.
- After a lot of difficulty, trial and error, and debugging, I found out that the x coordinate has to be defined newly every single time the draw function runs.
- As the loop runs with every piece of data, x coordinate was defined to be the number of line multiplied by the width of the bar. That equally spaced the bars out.

#### Discoveries:
- Because rectangles' coordinates are for their top-left corners, it's hard to construct a bar graph.
- When you visualize data, you get to make some exciting conclusions about trends.

#### Result:

! []()
