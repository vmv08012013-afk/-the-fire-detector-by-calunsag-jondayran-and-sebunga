basic.showString("Fire Detector")
let Temperature = gatortemp.temp(AnalogPin.P0, GatorTempType.adcVal)
basic.forever(function () {
    basic.showNumber(gatortemp.temp(AnalogPin.P0, GatorTempType.adcVal))
})
