define(function(require) {
    var Data = require('data');
    var state = {};
    state.create = function() {
        state.add.image(0, 0, 'final');
        state.add.text(400, 400, 'Coins collected: ' + Data.coins).anchor.set(0.5);
        state.add.text(400, 450, 'Times died: ' + Data.died).anchor.set(0.5);
        state.add.text(400, 500, 'Time taken (ms): ' + (state.time.now - Data.startTime)).anchor.set(0.5);
        if (Data.coins > 75)
            state.add.text(400, 550, 'Expert coin collector!').anchor.set(0.5);
    };
    return state;
});