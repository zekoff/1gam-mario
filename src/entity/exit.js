define(['entity/base_entity'], function(Entity) {
    var Exit = function(game, x, y, key, frame) {
        Entity.apply(this, arguments);
        this.anchor.set(0);
        this.scale.set(0.4);
        this.body.allowGravity = false;
    };
    Exit.prototype = Object.create(Entity.prototype);
    Exit.prototype.constructor = Exit;
    return Exit;
});