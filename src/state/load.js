define(['phaser', 'state/main'], function(Phaser, MainState) {
    var state = {};
    state.preload = function() {
        state.load.baseURL = './assets/';
        state.load.tilemap('test_map', 'test_map.json', null, Phaser.Tilemap.TILED_JSON);
        state.load.image('test_tiles', 'test_tiles.png');
        state.load.image('badman', 'badman.png');
    };
    state.update = function() {
        state.game.state.add('main', MainState, true);
    };
    return state;
});