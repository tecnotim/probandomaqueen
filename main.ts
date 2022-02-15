input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    modo += -1
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.showNumber(modo)
    basic.pause(500)
    basic.clearScreen()
    if (modo == 0) {
        modo = 4
    }
})
input.onButtonPressed(Button.AB, function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    modo += 1
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.showNumber(modo)
    basic.pause(500)
    basic.clearScreen()
    if (modo == 5) {
        modo = 1
    }
})
let modo = 0
DFRobotMaqueenPlus.I2CInit()
let strip = neopixel.create(DigitalPin.P3, 2, NeoPixelMode.RGB_RGB)
modo = 1
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    if (modo == 1) {
        basic.clearScreen()
        basic.showNumber(DFRobotMaqueenPlus.ultraSonic(PIN.P14, PIN.P13))
        basic.pause(5000)
        basic.clearScreen()
    }
    if (modo == 2) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1) {
            led.plot(3, 0)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1) {
            led.plot(4, 0)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 1) {
            led.plot(4, 4)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            led.plot(2, 0)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1) {
            led.plot(0, 0)
            basic.pause(1000)
            basic.clearScreen()
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 1) {
            led.plot(0, 4)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
    if (modo == 3) {
        for (let index = 0; index < 4; index++) {
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
            basic.pause(1000)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.GREEN)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.GREEN)
            basic.pause(1000)
        }
    }
    if (modo == 4) {
        for (let index = 0; index < 4; index++) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 255)
            basic.pause(2000)
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 255)
            basic.pause(2000)
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 255)
            basic.pause(2000)
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 255)
            basic.pause(2000)
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
        }
    }
})
