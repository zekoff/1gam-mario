define(['phaser', 'state/main'], function(Phaser, MainState) {
    var state = {};
    state.preload = function() {
        // load tilemap
        // load tileset (?)
        // load player sprite/animation
    };
    state.update = function() {
        state.game.state.add('main', MainState, true);
    };
    return state;
});