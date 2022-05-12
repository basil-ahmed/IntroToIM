// declaring the initial variables
let table;
let hours_dict={};
let hours_mean={};
let margin = 30;
let divisions = [];
let x_cords = {};
let state=0;
let upper;
let hours;
let minutes;
let x_cords_line = {};
let count;
let serial;
let portName= 'COM3'
let onOff=0;

function preload(){
  // loading the data from the csv
  table=loadTable('data.csv','csv','header')
}
function setup() {
  createCanvas(600, 400);
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on("list", printList); // set a callback function for the serialport list event
  serial.on("connected", serverConnected); // callback for connecting to the server
  serial.on("open", portOpen); // callback for the port opening
  serial.on("data", serialEvent); // callback for when new data arrives
  serial.on("error", serialError); // callback for errors
  serial.on("close", portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
  
  background(249, 228, 183);
  
  // putting in hours in the hours dict for later use
  for (let h=0;h<24;h++){
    hours_dict[h]=[]
  }

}

function printList(portList) {
  // portList is an array of serial port names
  for (let i = 0; i < portList.length; i++) {
    // Display the list the console:
    print(i + " " + portList[i]);
  }
}
function serverConnected() {
  print("connected to server.");
}

function portOpen() {
  print("the serial port opened.");
}

function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  let inString = serial.readLine();
 

  // saving the received output from arduino into the variable count if an output is received
  if (inString.length > 0) {
    count=int(inString)
  }

  serial.write(onOff);
}

function serialError(err) {
  print("Something went wrong with the serial port. " + err);
}

function portClose() {
  print("The serial port closed.");
}

// function to make label on both axis
function make_labels(xlabel,ylabel){
  noStroke()
  textSize(10)
  push()
  translate(-190,240)
  rotate(-PI/2)
  text(ylabel,10,height/2)
  pop()
  text(xlabel,width/2,height-5) 
  stroke(0)
}

// function to make axis of the bar graph
function make_bar_axis(){
  noStroke()
  for (let p = 0;p<6;p++){
    textSize(8)
    //text(divisions[p],13,height-((height-(margin-10))/5*p)-(margin))
    text(divisions[p],11,(height-margin)/5*(5-p))
  }
  
  x_cords={}
  for (let g=0;g<13;g++){
    textSize(8)
    x_cords[g*2]=(width-margin)/12*g+margin
    text(g*2,(width-margin-10)/12*g+margin,height-20)
    
  }
  stroke(0)
}

// function to make axis of the line graph
function make_line_axis(hours,minutes,seconds){
  noStroke()
  for (let p = 0;p<6;p++){
    textSize(8)
    //text(divisions[p],13,height-((height-(margin-10))/5*p)-(margin))
    text(divisions[p],11,(height-margin)/5*(5-p))
  }
  
  if (counts.length>15){
    limit=counts.length-16
    placeholder=15
  }
  else{
    limit=0
    placeholder=counts.length-1
  }
  for (let i=counts.length-1;i>=limit;i--){
    textSize(8)
    text(str(hours[i])+':'+minutes[i]+':'+seconds[i],(width-margin-10)/15*placeholder+margin,height-20)
    placeholder--
  }
  stroke(0)
}

// function to make the bar graph
function make_bar_graph(){
  make_labels('Hour','Number of People')
  
  make_bar_axis()


  for (let c=0;c<24;c++){
    if (!isNaN(hours_mean[c])){
      if (c%2!=0){
        cord=(x_cords[c-1]+x_cords[c+1])/2
      }
      else{
        cord=x_cords[c]
      }
      noStroke()
      fill(color('#FF1694'))    
      bar_length=(height-margin)/max(upper)*hours_mean[c]
      text(round(hours_mean[c]),cord,height-bar_length-margin-10)
      rect(cord,height-bar_length-margin,(width-margin-10)/24,bar_length)
      fill(0)
    }
    
  }
   
}

// function to make the line graph
function make_line_graph(){
  make_labels('Time','Number of People')
  days=table.getColumn('day')
  months=table.getColumn('month')
  years=table.getColumn('year')
  noStroke()
  text('Date: '+days[0]+'/'+months[0]+'/'+years[0],500,20)
  stroke(0)
  hours=table.getColumn('hour')
  minutes=table.getColumn('minute')
  seconds=table.getColumn('second')
  counts=table.getColumn('people')
  upper=ceil(max(table.getColumn('people'))/10)*10
  make_line_axis(hours,minutes,seconds)
  if (counts.length>15){
    limit=counts.length-16
    placeholder=15
  }
  else{
    limit=0
    placeholder=counts.length-1
  }
  //stroke(color('#FF1694'))    
  for (let i = counts.length-1;i>limit;i--){
    x_1=placeholder*(width-margin-10)/15+margin
    y_1=height-counts[i]*(height-margin)/upper-margin
    x_0=(placeholder-1)*(width-margin-10)/15+margin
    y_0=height-counts[i-1]*(height-margin)/upper-margin
    stroke(color('#FF1694')) 
    line(x_1,y_1,x_0,y_0)
    placeholder--
      
  }
  stroke(0)
}

function draw() {
  if (frameCount%60===0 && !isNaN(count)){
    background(249, 228, 183);
    //count = round(random(0,1000));
    // find the current date and time and save it to the table along with the count of people
    y=year()
    m=month()
    d=day()
    h=hour()
    mi=minute()
    s=second()
    let newRow = table.addRow();
    newRow.setNum('year', y);
    newRow.setNum('month', m);
    newRow.setNum('day', d);
    newRow.setNum('hour', h);
    newRow.setNum('minute', mi);
    newRow.setNum('second', s);
    newRow.setNum('people', count);

    print(table.getColumn('people'))
    hours=table.getColumn('hour')
    counts=table.getColumn('people')

    
    for (let i =0;i<hours.length;i++){
      hours_dict[hours[i]].push(counts[i])
    }
    
    
    // find the mean for each hour
    for (let m=0;m<24;m++){
      total=0
      for(let k=0;k<hours_dict[m].length;k++){
        total+=hours_dict[m][k];
      }
      avg=total/hours_dict[m].length;
      hours_mean[m]=avg;
    }
    
    upper=ceil(max(table.getColumn('people'))/10)*10
    lower=0
    interval=(upper-lower)/5
    for (let j =0;j<6;j++){
      divisions[j]=interval*j
    }
  
    // display count if state =0
    if (state===0){
      noStroke()
      fill(color('#FF1694'))   
      textSize(50)
      text(count,width/2-52,height/2+10)
      fill(0)

    }
    
    // display line graph if state = 1
    if (state===1){
      stroke(0)
      line(margin,0,margin,height-margin)
      line(margin,height-margin,width,height-margin)
      make_line_graph()
    }

    // display bar graph if state = 2
    if (state===2){
      stroke(0)
      line(margin,0,margin,height-margin)
      line(margin,height-margin,width,height-margin)
      make_bar_graph()
      }
    
    // save the table to a csv after each minute
    if (frameCount%3600==0){
    saveTable(table,'data.csv','csv')
  }
  }
  
  
}

// handle states according to the key typed
function keyTyped(){
  if (key==='0'){
    state=0
  }
  else if (key==='1'){
    state=1
  }
  else if (key==='2'){
    state=2
  }

}
