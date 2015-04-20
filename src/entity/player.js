define(['phaser'], function(Phaser) {
    var Player = function(game, x, y, key, frame) {
        var p = game.make.sprite.apply(game.make,
            Array.prototype.slice.call(arguments, 1));
        game.physics.arcade.enable(p);
        p.body.collideWorldBounds = true;
        return p;
    };
    Player.prototype = Object.create(Phaser.Sprite);
    return Player;
});