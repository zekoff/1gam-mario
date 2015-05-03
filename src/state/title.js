define(function(require) {
    var LevelIntro = require('state/level_intro');
    var Phaser = require('phaser');
    var Data = require('data');

    var state = {};
    state.create = function() {
        state.add.image(0, 0, 'splash');
        var timer = state.time.create();
        timer.add(2000, function() {
            var text = state.add.text(400, 550, "ENTER to start, arrow keys to play", {
                align: 'center',
                fill: 'black',
                font: '20px sans'
            });
            text.anchor.set(0.5);
            state.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown
                .addOnce(function() {
                    Data.startTime = state.time.now;
                    state.game.state.add('level_intro', LevelIntro, true);
                });
        });
        timer.start();
    };
    state.update = function() {

    };
    return state;
});