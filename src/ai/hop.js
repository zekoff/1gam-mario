define([], function() {
    var Hop = function(ai) {
        this.hopCount = 0;
        this.ai = ai;
    };
    Hop.prototype.update = function(entity) {
        if (entity.body.onFloor()) {
            this.hopCount++;
            entity.body.velocity.y = -300;
        }
        if (this.hopCount > 1) this.ai.popState();
    };
    return Hop;
});