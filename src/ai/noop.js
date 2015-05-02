define(function() {
    var NoOp = function(ai) {
        this.ai = ai;
    };
    NoOp.prototype.update = function(entity, state) {};
    return NoOp;
});