define(['entity/base_entity'], function(Entity) {
    var Player = function(game, x, y, key, frame) {
        Entity.apply(this, arguments);
        this.scale.y = 1.5;
        this.speed = 200;
        this.jumpPower = 600;
    };
    Player.prototype = Object.create(Entity.prototype);
    Player.prototype.constructor = Player;
    // add damping to L/R movement
    // move input control/callbacks to this module
    return Player;
});