
// named constant for the pin the digital sensor is connected to
const int buttonPin = 6;
  
int buttonValue;
int blinkRate;

// named constant for the pin the analogue sensor is connected to
const int sensorPin = A0;
// room temperature in Celsius
const float baselineTemp = 23.0;

// named constant for the pin the LED is connected to
const int ledPin = 13;

void setup() {
  
  // initialize digital pin for LED as an output (Push Button output)
  pinMode(ledPin, OUTPUT);
  
  // open a serial connection to display values
  Serial.begin(9600);
  
  // set the LED pins as outputs (Temperature Sensor output)
  for (int pinNumber = 3; pinNumber < 5; pinNumber++) {
    pinMode(pinNumber, OUTPUT);
    digitalWrite(pinNumber, LOW);
  }
  
}

void loop() {
  // read the value on AnalogIn pin 0 and store it in a variable
  int sensorVal = analogRead(sensorPin);

  // send the 10-bit sensor value out the serial port
  Serial.print("sensor Value: ");
  Serial.print(sensorVal);

  // convert the ADC reading to voltage
  float voltage = (sensorVal / 1024.0) * 5.0;

  // Send the voltage level out the Serial port
  Serial.print(", Volts: ");
  Serial.print(voltage);

  // convert the voltage to temperature in degrees C
  // the sensor changes 10 mV per degree
  // the datasheet says there's a 500 mV offset
  // ((voltage - 500 mV) times 100)
  Serial.print(", degrees C: ");
  float temperature = (voltage - .5) * 100;
  Serial.println(temperature);

  // if the current temperature is lower than the baseline turn off all LEDs
  if (temperature < baselineTemp + 2) {
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
  } // if the temperature rises 2-5 degrees, turn an LED on
  else if (temperature >= baselineTemp + 2 && temperature < baselineTemp + 5) {
    digitalWrite(3, HIGH);
    digitalWrite(4, LOW);
  } // if the temperature rises more than 5 degrees, turn all LEDs on
  else if (temperature >= baselineTemp + 5) {
    digitalWrite(3, HIGH);
    digitalWrite(4, HIGH);
  }
  delay(1);

  // Reading Push Button Value
  buttonValue = digitalRead(buttonPin); 

  // Map the temperature to blink rate
  blinkRate = map(temperature, 22, 32, 1000, 100);

  // If button is pushed
  // Blink lights according to the temperature
  if (buttonValue == HIGH)
  {
    digitalWrite(ledPin, HIGH);   // turn the LED on (HIGH is the voltage level)
    delay(blinkRate);                       // wait for a second
    digitalWrite(ledPin, LOW);    // turn the LED off by making the voltage LOW
    delay(blinkRate);                       // wait for a second
  }
  else if (buttonValue == LOW)
  {
    digitalWrite(ledPin,LOW);
  }
  
}
