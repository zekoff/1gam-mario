define(['phaser', 'state/level_intro'], function(Phaser, LevelIntro) {
    var state = {};
    var NUM_LEVELS = 1;
    state.preload = function() {
        state.load.baseURL = './assets/';
        state.load.tilemap('test_map', 'test_map.json', null, Phaser.Tilemap.TILED_JSON);
        var l;
        for (l = 0; l <= NUM_LEVELS; l++)
            state.load.tilemap('level' + l, 'levels/level' + l + '.json', null, Phaser.Tilemap.TILED_JSON);
        state.load.tilemap('level1', 'levels/level1.json', null, Phaser.Tilemap.TILED_JSON);
        state.load.image('test_tiles', 'test_tiles.png');
        state.load.image('spritesheet_ground_small', 'spritesheet_ground_small.png');
        state.load.image('spritesheet_items_small', 'spritesheet_items_small.png');
        state.load.image('spritesheet_tiles_small', 'spritesheet_tiles_small.png');
        state.load.image('badman', 'badman.png');
        state.load.image('slime', 'slimeBlue.png');
        state.load.image('heart', 'hudHeart_full.png');
        state.load.image('frog', 'frog.png');
        state.load.image('frog_jump', 'frog_move.png');
        state.load.image('bee', 'bee.png');
        state.load.image('exit', 'signExit.png');
        state.load.spritesheet('coin', 'coin_sheet.png', 24, 24);
        state.load.spritesheet('player', 'player.png', 136, 190);
        state.load.spritesheet('barnacle', 'barnacle.png', 131, 108);
        state.load.audio('coin_sound', 'coin_sound.ogg');
        state.load.audio('stomp_sound', 'stomp_sound.ogg');
        state.load.audio('hit_sound', 'hit_sound.ogg');
        state.load.audio('lose_sound', 'lose_sound.ogg');
    };
    state.update = function() {
        state.game.state.add('level_intro', LevelIntro, true);
    };
    return state;
});