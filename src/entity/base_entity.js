define(['phaser', 'config'], function(Phaser, Config) {
    var Entity = function(game, x, y, key, frame) {
        Phaser.Sprite.apply(this, arguments);
        this.anchor.set(0.5, 1);
        game.physics.arcade.enable(this);
        this.body.collideWorldBounds = true;
        this.body.maxVelocity.y = Config.gravity / 2;
    };
    Entity.prototype = Object.create(Phaser.Sprite.prototype);
    Entity.prototype.constructor = Entity;
    return Entity;
});