namespace SpriteKind {
    export const Score = SpriteKind.create()
    export const Bonus = SpriteKind.create()
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Your high score is " + info.highScore() + " and played for " + game.runtime() / 1000, DialogLayout.Bottom)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    start = 1
    mySprite3.follow(mySprite2, 32)
})
let start = 0
let mySprite3: Sprite = null
let mySprite2: Sprite = null
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
mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . . 2 c 2 2 2 2 2 2 4 2 . 
. . . . 2 c c 2 2 2 2 2 2 4 c 2 
. . d 2 4 c c 2 4 4 4 4 4 4 c c 
. d 2 2 4 c b e e e e e e e 2 c 
. 2 2 2 4 b e e b b b e b b e 2 
. 2 2 2 2 2 e b b b b e b b b e 
. 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
. 2 d d 2 e f e e e f e e e e e 
. d d 2 e e e f e e f e e e e e 
. e e e e e e e f f f e e e e e 
. e e e e f f f e e e e f f f f 
. . . e f f f f f e e f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
mySprite2.setPosition(20, 56)
mySprite3.setPosition(142, 93)
start = 0
scene.setBackgroundColor(6)
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
    if (mySprite2.overlapsWith(mySprite3)) {
        game.over(false, effects.melt)
    }
})
forever(function () {
    if (mySprite2.isHittingTile(CollisionDirection.Left)) {
        mySprite2.setPosition(78, 57)
    }
    if (mySprite2.isHittingTile(CollisionDirection.Right)) {
        mySprite2.setPosition(78, 57)
    }
    if (mySprite2.isHittingTile(CollisionDirection.Bottom)) {
        mySprite2.setPosition(78, 57)
    }
    if (mySprite2.isHittingTile(CollisionDirection.Top)) {
        mySprite2.setPosition(78, 57)
    }
})
forever(function () {
    scene.cameraFollowSprite(mySprite2)
})
forever(function () {
    if (mySprite.overlapsWith(mySprite2)) {
        info.changeScoreBy(1)
        mySprite.x = Math.randomRange(5, 100)
        mySprite.y = Math.randomRange(5, 100)
        mySprite2.setPosition(mySprite.x - 55, mySprite.y - 55)
        mySprite3.setPosition(mySprite.x + 55, mySprite.y + 55)
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
    if (start == 1) {
        controller.moveSprite(mySprite2)
    }
})
