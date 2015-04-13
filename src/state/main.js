define(['phaser'], function(Phaser) {
    var state = {};
    state.create = function() {
        console.log('main state');
        // set size of game world
        // create tilemap for level
        // create collision group
        // fill collision group with collision layer
        // create player sprite
        // fix camera to player
        // create cursor keys/other input
    };
    state.update = function() {
        // perform collision checks
        // update enemy AI state
        // player vs. world
        // player vs. enemies
        // scan for input
    };
    return state;
});