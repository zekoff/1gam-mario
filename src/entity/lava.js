define(['entity/base_entity'], function(Entity) {
    var Lava = function(game, x, y, key, frame) {
        Entity.apply(this, arguments);
        this.anchor.set(0);
        this.scale.set(0.25);
        this.body.allowGravity = false;
    };
    Lava.prototype = Object.create(Entity.prototype);
    Lava.prototype.constructor = Lava;
    return Lava;
});