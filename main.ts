input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Diamond)
    calliBot2.setLed(C2Motor.beide, true)
    calliBot2.setRgbLed1(C2RgbLed.All, 0x00ff00, 8)
    calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 70)
    basic.pause(2000)
    calliBot2.motorStop(C2Motor.beide, C2Stop.Frei)
    calliBot2.setRgbLed1(C2RgbLed.All, 0xff0000, 8)
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
    if (calliBot2.readBumperSensor(C2Sensor.links, C2State.an)) {
        calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 100)
        basic.pause(2000)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
    }
    if (calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an)) {
    	
    }
})
