const int LED_PIN = 5; //LED Connected to pin5
const int SENSOR_PIN = A0; //Sensor connected to pin A0

void setup() {
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
  pinMode(SENSOR_PIN,INPUT);
  while (Serial.available() <= 0) {
    delay(300);              // wait 1/3 second
  }
}

void loop() {
  while (Serial.available() > 0) {
    // read the incoming byte:
    int inByte = Serial.read();
    switch (inByte) {
      //these values are sent by p5js. Whenever the ball hits the ground, a value of 1 is sent. When it leaves the ground, a value of 0 is sent.
      case 0:
        digitalWrite(LED_PIN, LOW); //turn LED off.
        break;
      case 1:
        digitalWrite(LED_PIN, HIGH); //turn LED on.
        break;
    }
    int sensorValue = analogRead(SENSOR_PIN); //read the value from the potentiometer
  
    Serial.print(sensorValue);
    Serial.println();

  }
}
