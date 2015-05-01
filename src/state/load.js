define(['phaser', 'state/main'], function(Phaser, MainState) {
    var state = {};
    state.preload = function() {
        state.load.baseURL = './assets/';
        state.load.tilemap('test_map', 'test_map.json', null, Phaser.Tilemap.TILED_JSON);
        state.load.tilemap('level1', 'levels/level1.json', null, Phaser.Tilemap.TILED_JSON);
        state.load.image('test_tiles', 'test_tiles.png');
        state.load.image('spritesheet_ground_small','spritesheet_ground_small.png');
        state.load.image('spritesheet_items_small','spritesheet_items_small.png');
        state.load.image('spritesheet_tiles_small','spritesheet_tiles_small.png');
        state.load.image('badman', 'badman.png');
        state.load.spritesheet('coin', 'coin_sheet.png', 24, 24);
    };
    state.update = function() {
        // create all levels
        state.game.state.add('main', MainState, true);
    };
    return state;
});