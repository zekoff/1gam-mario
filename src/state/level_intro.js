define(function(require) {
    var Data = require('data');
    var MainState = require('state/main');

    var state = {};
    state.create = function() {
        var name = state.make.tilemap('level' + Data.currentLevel).properties.name;
        var text = state.add.text(400, 300, "Now Entering: " + name, {
            fill: 'white'
        });
        text.anchor.set(0.5);
        var timer = state.time.create();
        timer.add(1000, function() {
            state.game.state.add('main', MainState, true);
        });
        timer.start();
    };
    return state;
});