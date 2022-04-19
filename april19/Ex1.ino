//Using a sensor to move an ellipse on the x-axis on p5js.

const int POTENTIOMETER_PIN = A0; //potentiometer is connected in pin A0.

void setup() {
  Serial.begin(9600); 
}

void loop() {
  int inByte = Serial.read();
  int sensorValue = analogRead(A0); //read the value from the sensor
  //the following lines print out the value of the reading from the sensor.
  //Although not needed for the task at hand, it is useful for debugging purposes to make sure that the sensor and the p5 program is working.
  Serial.print(sensorValue);
  Serial.println();
}
