let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.clear()
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    strip.clear()
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
})
