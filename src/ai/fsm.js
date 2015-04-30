define([], function() {
    var Fsm = function() {
        this.stack = [];
    };
    Fsm.prototype.setState = function(state) {
        this.stack.unshift(state);
    };
    Fsm.prototype.popState = function() {
        if (this.stack.length > 0)
            this.stack.shift();
    };
    Fsm.prototype.activeState = function() {
        return this.stack.length > 0 ? this.stack[0] : null;
    };
    return Fsm;
});