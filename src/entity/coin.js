define(['phaser', 'entity/base_entity'], function(Phaser, Entity) {
    var Coin = function(game, x, y, key, frame) {
        Entity.apply(this, arguments);
        this.x += 4;
        this.y -= 4;
        this.body.reset();
        this.anchor.set(0);
        this.body.allowGravity = false;
        this.animations.add('coin');
        this.animations.play('coin', 20, true);
    };
    Coin.prototype = Object.create(Entity.prototype);
    Coin.prototype.constructor = Coin;
    return Coin;
});