define(['phaser', 'state/level_intro'], function(Phaser, LevelIntro) {
    var state = {};
    state.preload = function() {
        state.load.baseURL = './assets/';
        state.load.tilemap('test_map', 'test_map.json', null, Phaser.Tilemap.TILED_JSON);
        state.load.tilemap('level1', 'levels/level1.json', null, Phaser.Tilemap.TILED_JSON);
        state.load.image('test_tiles', 'test_tiles.png');
        state.load.image('spritesheet_ground_small', 'spritesheet_ground_small.png');
        state.load.image('spritesheet_items_small', 'spritesheet_items_small.png');
        state.load.image('spritesheet_tiles_small', 'spritesheet_tiles_small.png');
        state.load.image('badman', 'badman.png');
        state.load.image('slime', 'slimeBlue.png');
        state.load.spritesheet('coin', 'coin_sheet.png', 24, 24);
        state.load.spritesheet('player', 'player.png', 136, 190);
        state.load.audio('coin_sound', 'coin_sound.ogg');
        state.load.audio('stomp_sound', 'stomp_sound.ogg');
    };
    state.update = function() {
        state.game.state.add('level_intro', LevelIntro, true);
    };
    return state;
});