
   
#include "pitches.h"

int tempo; 
//2000 = 92 BPM 
//1000 = 184 BPM

int buttonPushCounter = 0;   // counter for the number of button presses
int lastButtonState = 0;     // previous state of the button

const int analogPin = A0;   // the pin that the Potentiometer is attached to
const int buttonPin = 2;    // the pin that the pushbutton is attached to

// State 1 notes in the melody:
int melody1[] = {
  NOTE_E5, NOTE_D5, NOTE_E5, NOTE_F5, NOTE_G5, NOTE_C6, NOTE_E6
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations1[] = {
  4, 4, 4, 4, 4, 4, 4
};

// State 2 notes in the melody:
int melody2[] = {
  NOTE_B3,NOTE_B3, NOTE_B3, NOTE_B3,NOTE_B3,NOTE_B3
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations2[]{
 4,4,4,4, 4,4,

};

void setup() {

  // initialize the button pin as a input:
  pinMode(buttonPin, INPUT);

  Serial.begin(9600);       //start a serial connection with the computer
  
}

void loop() {

  // read the pushbutton input pin:
  int buttonState = digitalRead(buttonPin);

  // compare the buttonState to its previous state
  if (buttonState != lastButtonState) {
    // if the state has changed, increment the counter
    if (buttonState == HIGH) { // HIGH before
      // if the current state is HIGH then the button went from off to on:
      buttonPushCounter++;
      if (buttonPushCounter == 2)
      {
        buttonPushCounter = 0;
      }
      Serial.println("on");
      Serial.print("State: ");
      Serial.println(buttonPushCounter);
    } else {
      // if the current state is LOW then the button went from on to off:
      Serial.println("off");
    }
    // Delay a little bit to avoid bouncing
    delay(10);
  }
  // save the current state as the last state, for next time through the loop
  lastButtonState = buttonState;

  if (buttonPushCounter == 0) {

      int potPosition = analogRead(analogPin);
      
      tempo = map(potPosition, 0, 1023, 1000,2000);
  
      Serial.println(tempo);
    
        for (int thisNote = 0; thisNote < 7; thisNote++) {
    
        // to calculate the note duration, take one second divided by the note type.
        //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
        int noteDuration1 = tempo / noteDurations1[thisNote];
        tone(8, melody1[thisNote], noteDuration1);
    
        // to distinguish the notes, set a minimum time between them.
        // the note's duration + 30% seems to work well:
        int pauseBetweenNotes = noteDuration1 * 1.30;
        Serial.print("HELLO ");
        Serial.println(pauseBetweenNotes);
        delay(pauseBetweenNotes);
    
        // stop the tone playing:
        noTone(8);
  
      }

      delay(tempo);
        
  } 
  else if (buttonPushCounter == 1) {

      int potPosition = analogRead(analogPin);

      tempo = map(potPosition, 0, 1023, 1000,2000);
  
      Serial.println(potPosition);
    
      for (int thisNote = 0; thisNote < 6; thisNote++) {
    
        // to calculate the note duration, take one second divided by the note type.
        //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
        int noteDuration2 = tempo / noteDurations2[thisNote];
        tone(8, melody2[thisNote], noteDuration2);
    
        // to distinguish the notes, set a minimum time between them.
        // the note's duration + 30% seems to work well:
        int pauseBetweenNotes = noteDuration2 * 1.73332; //1.4111111; // addiing 0.11111 this is a third of a quarter note in 1 second at 184 BPM
        delay(pauseBetweenNotes);
    
        // stop the tone playing:
        noTone(8);
  
      }

      // delay(tempo);
      // Needed to make a pleasant rythm
  
   }

}
