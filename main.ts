input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    if (steps <= 10) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (steps >= 20) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    if (steps >= 30) {
        basic.showLeds(`
            . . . . #
            . # # . .
            # # # # .
            # # # # #
            . # # # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
steps = 0
if (steps <= 10) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
if (steps >= 20) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
}
if (steps >= 30) {
    basic.showLeds(`
        . . . . #
        . # # . .
        # # # # .
        # # # # #
        . # # # .
        `)
}
