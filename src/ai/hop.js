define([], function() {
    var Hop = function(ai) {
        this.hopCount = 0;
        this.ai = ai;
    };
    Hop.prototype.update = function(entity) {
        var key = entity.body.onFloor() ? 'frog' : 'frog_jump';
        entity.loadTexture(key);
        if (entity.body.onFloor()) {
            this.hopCount++;
            entity.body.velocity.y = -400;
        }
        if (this.hopCount > 1) this.ai.popState();
    };
    return Hop;
});