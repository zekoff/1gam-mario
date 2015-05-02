define(function(require) {
    var state = {};
    state.create = function() {
        state.add.image(0, 0, 'final');
    };
    return state;
});