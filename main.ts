let limit = 500
basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P0),
    limit
    )
})
