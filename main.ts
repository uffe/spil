input.onButtonPressed(Button.A, function () {
    plads += -1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    plads += 1
})
let plads = 2
let fjende_plads = 2
let fjende = game.createSprite(fjende_plads, 0)
let fjende_retning = 1
let helt = game.createSprite(2, 4)
fjende.set(LedSpriteProperty.Blink, 300)
loops.everyInterval(500, function () {
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
