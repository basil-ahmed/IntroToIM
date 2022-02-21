let lineOfString = [];

// For scaling
let minSearch;
let maxSearch;

function preload() {
  // The text from the file is loaded into an array.
  lineOfString = loadStrings("multiTimeline.csv");
}

function setup() {
  createCanvas(400, 400);
  background(249, 228, 183);

  // Endless loop for the case where file is empty
  if (lineOfString == null) {
    print("The file is empty!");

    while (true) {}
  }

  print(
    "The number of Lines of strings successfully loaded were " +
      lineOfString.length
  );

  // Find the minimum and maximum number of searches
  findMinMaxLatSearch();
}

function findMinMaxLatSearch() {
  let singleRow = [];

  // loop over each row in the file
  for (
    let csvRowNumber = 1;
    csvRowNumber < lineOfString.length;
    csvRowNumber++
  ) {
    singleRow = split(lineOfString[csvRowNumber], ",");

    let searches = int(singleRow[1]);

    if (csvRowNumber == 1) {
      minSearches = searches;
      maxSearches = searches;
    }

    if (searches < minSearches) minSearches = searches;
    if (searches > maxSearches) maxSearches = searches;
  }

  print("Searches (min, max) = (" + minSearches + "," + maxSearches + ") ");
}

let csvRowNumber = 1; // Skip the first line as it's a header

function draw() {
  let singleRow = [];

  singleRow = split(lineOfString[csvRowNumber], ",");

  let searches = int(singleRow[1]); //taking the second field which is the number of searches
  let x = (csvRowNumber * width) / lineOfString.length; //x coordinate for every bar

  // Check for non-numerical strings.
  if (isNaN(searches)) {
    print("The conversion of line" + csvRowNumber + " to Integer failed");
  } else {
    // scaling of bar heights to fit the canvas
    let barHeight = map(searches, minSearches, maxSearches, 100, height);

    // Making of a bar
    fill(218, 59, 95);
    rect(x, 400 - barHeight, width / lineOfString.length, barHeight);
  }

  csvRowNumber++;
  if (csvRowNumber >= lineOfString.length) {
    print("finished");
    noLoop();
  }
}
