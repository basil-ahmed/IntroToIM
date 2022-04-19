//controlling the brightness of an LED using p5js.

const int LED_PIN = 5;
void setup() {
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
  while (Serial.available() <= 0) {
    delay(300);              // wait 1/3 second
  }
}

void loop() {
  while (Serial.available() > 0) {
    // read the incoming byte:
    int inByte = Serial.read();
    switch (inByte) {
      case 0:
        //0 pressed, turn LED OFF
        analogWrite(LED_PIN, 0);
        break;
        
      //The next 5 cases control the brightness of the LED.
      case 1:
        analogWrite(LED_PIN, 50); //set brightness to 50
        break;
      case 2:
        analogWrite(LED_PIN, 100); //set brightness to 100
        break;

      case 3:
        analogWrite(LED_PIN, 150); //set brightness to 150
        break;
      case 4:
        analogWrite(LED_PIN, 200); //set brightness to 200
        break;
      case 5:
        analogWrite(LED_PIN, 255); //set brightness to 255
        break;
    }
  }
}
