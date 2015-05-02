define(function(require) {
    var Data = require('data');
    var MainState = require('state/main');

    var state = {};
    state.create = function() {
        var map = state.make.tilemap('level' + Data.currentLevel);
        var name = map.properties.name;
        state.game.stage.backgroundColor = '#000';
        var text = state.add.text(400, 300, "Now Entering:\n" + name, {
            fill: 'white',
            align: 'center'
        });
        text.anchor.set(0.5);
        var timer = state.time.create();
        timer.add(3000, function() {
            state.game.state.add('main', MainState, true);
        });
        timer.start();
    };
    return state;
});