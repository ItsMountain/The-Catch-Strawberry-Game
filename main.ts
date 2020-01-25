namespace SpriteKind {
    export const Score = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.x += -25
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.y += 25
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText(Score2, DialogLayout.Bottom)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.x += 25
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.y += -25
})
let Score2 = ""
let mySprite2: Sprite = null
let Name = game.askForString("What's your name?", 10)
let mySprite = sprites.create(img`
    . . . . . . . 6 . . . . . . . .
    . . . . . . 8 6 6 . . . 6 8 . .
    . . . e e e 8 8 6 6 . 6 7 8 . .
    . . e 2 2 2 2 e 8 6 6 7 6 . . .
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
    e 2 2 2 2 2 2 2 4 e 2 e e c . .
    e e 2 e 2 2 4 2 2 e e e c . . .
    e e e e 2 e 2 2 e e e c . . . .
    e e e 2 e e c e c c c . . . . .
    . c c c c c c c . . . . . . . .
`, SpriteKind.Food)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . 6 6 6 6 6 6 6 6 . .
    . . . . . 6 c 6 6 6 6 6 6 9 6 .
    . . . . 6 c c 6 6 6 6 6 6 9 c 6
    . . d 6 9 c c 6 9 9 9 9 9 9 c c
    . d 6 6 9 c b 8 8 8 8 8 8 8 6 c
    . 6 6 6 9 b 8 8 b b b 8 b b 8 6
    . 6 6 6 6 6 8 b b b b 8 b b b 8
    . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8
    . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8
    . d d 6 8 8 8 f 8 8 f 8 8 8 8 8
    . 8 8 8 8 8 8 8 f f f 8 8 8 8 8
    . 8 8 8 8 f f f 8 8 8 8 f f f f
    . . . 8 f f f f f 8 8 f f f f f
    . . . . f f f f . . . . f f f .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mySprite2.setPosition(20, 56)
scene.setBackgroundColor(12)
forever(function () {
    if (mySprite.overlapsWith(mySprite2)) {
        Score2 += 1
        mySprite.x = Math.randomRange(5, 100)
        mySprite.y = Math.randomRange(5, 100)
        mySprite2.setPosition(20, 56)
    }
})
forever(function () {
    pause(2000)
    mySprite.x += 25
    mySprite.y += -25
    pause(2000)
    mySprite.x += -25
    mySprite.y += 25
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        mySprite.x += 25
    }
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        mySprite.x += -25
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.y += -25
    }
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        mySprite.y += 25
    }
})
forever(function () {
    if (mySprite2.isHittingTile(CollisionDirection.Left)) {
        mySprite2.x += 25
    }
    if (mySprite2.isHittingTile(CollisionDirection.Right)) {
        mySprite2.x += -25
    }
    if (mySprite2.isHittingTile(CollisionDirection.Bottom)) {
        mySprite2.y += -25
    }
    if (mySprite2.isHittingTile(CollisionDirection.Top)) {
        mySprite2.y += 25
    }
})
