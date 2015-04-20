define(['phaser', 'entity/fsm'], function(Phaser, FSM) {
    var Enemy = function(game, x, y, key, frame) {
        var e = game.make.sprite.apply(game.make,
            Array.prototype.slice.call(arguments, 1));
        game.physics.arcade.enable(e);
        e.tint = 0xFF0000;
        e.body.collideWorldBounds = true;
        e.ai = new FSM();
        return e;
    };
    Enemy.prototype = Object.create(Phaser.Sprite);
    Enemy.prototype.update = function() {
        // update AI state machine and all that good stuff
    };
    return Enemy;
});