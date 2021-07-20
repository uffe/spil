input.onButtonPressed(Button.A, function () {
    plads += -1
})
input.onButtonPressed(Button.AB, function () {
    skud = game.createSprite(plads, 4)
    skud.set(LedSpriteProperty.Blink, 50)
    for (let indeks = 0; indeks <= 4; indeks++) {
        basic.pause(100)
        skud.change(LedSpriteProperty.Y, -1)
    }
    if (skud.isTouching(fjende)) {
        fjende.delete()
    }
    skud.delete()
})
input.onButtonPressed(Button.B, function () {
    plads += 1
})
let skud: game.LedSprite = null
let fjende: game.LedSprite = null
let plads = 0
plads = 2
let fjende_plads = 2
fjende = game.createSprite(fjende_plads, 0)
let fjende_retning = 1
let helt = game.createSprite(2, 4)
loops.everyInterval(1000, function () {
    if (fjende_plads == 4) {
        fjende_retning = -1
    }
    if (fjende_plads == 0) {
        fjende_retning = 1
    }
    fjende_plads += fjende_retning
    fjende.set(LedSpriteProperty.X, fjende_plads)
    helt.set(LedSpriteProperty.X, plads)
})
