input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
})
let degrees = 0
input.calibrateCompass()
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees > 315 && degrees <= 360 || degrees >= 0 && degrees <= 45) {
        basic.showString("N")
    } else if (degrees > 45 && degrees <= 135) {
        basic.showString("E")
    } else if (degrees > 135 && degrees <= 225) {
        basic.showString("S")
    } else if (degrees > 225 && degrees <= 315) {
        basic.showString("W")
    }
})
