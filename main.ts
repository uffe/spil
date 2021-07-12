input.onButtonPressed(Button.A, function () {
    plads += 1
})
input.onButtonPressed(Button.AB, function () {
    images.createImage(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . # # # .
        `).showImage(plads)
})
input.onButtonPressed(Button.B, function () {
    plads += -1
})
let plads = 0
plads = 0
basic.forever(function () {
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `).showImage(plads, 400)
})
