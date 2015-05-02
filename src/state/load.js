define(['phaser', 'state/title', 'config'], function(Phaser, Title, Config) {
    var state = {};
    state.preload = function() {
        state.load.baseURL = './assets/';
        state.load.image('loading_image', 'image/hudPlayer_green.png');
    };
    state.create = function() {
        var loadSprite = state.add.sprite(0, 0, 'loading_image');
        loadSprite.x = 400 - loadSprite.width / 2;
        loadSprite.y = 300 - loadSprite.height / 2;
        state.load.setPreloadSprite(loadSprite);
        state.add.text(400, 500, "Loading 1gam-mario...", {
            fill: 'white',
            font: 'bold 30pt sans'
        }).anchor.set(0.5);
        state.load.tilemap('test_map', 'test_map.json', null, Phaser.Tilemap.TILED_JSON);
        var l;
        for (l = 0; l <= Config.numLevels; l++)
            state.load.tilemap('level' + l, 'levels/' + l + '.json', null, Phaser.Tilemap.TILED_JSON);
        state.load.image('test_tiles', 'test_tiles.png');
        state.load.image('spritesheet_ground_small', 'image/spritesheet_ground_small.png');
        state.load.image('spritesheet_items_small', 'image/spritesheet_items_small.png');
        state.load.image('spritesheet_tiles_small', 'image/spritesheet_tiles_small.png');
        state.load.image('badman', 'image/badman.png');
        state.load.image('slime', 'image/slimeBlue.png');
        state.load.image('heart', 'image/hudHeart_full.png');
        state.load.image('frog', 'image/frog.png');
        state.load.image('frog_jump', 'image/frog_move.png');
        state.load.image('bee', 'image/bee.png');
        state.load.image('exit', 'image/signExit.png');
        state.load.image('lava', 'image/lavaTop_high.png');
        state.load.image('splash', 'image/splash_screen.png');
        state.load.image('final', 'image/final_screen.png');
        state.load.spritesheet('coin', 'image/coin_sheet.png', 24, 24);
        state.load.spritesheet('player', 'image/player.png', 136, 190);
        state.load.spritesheet('barnacle', 'image/barnacle.png', 131, 108);
        state.load.audio('coin_sound', 'sound/coin_sound.ogg');
        state.load.audio('stomp_sound', 'sound/stomp_sound.ogg');
        state.load.audio('hit_sound', 'sound/hit_sound.ogg');
        state.load.audio('lose_sound', 'sound/lose_sound.ogg');
        state.load.audio('grass_music', 'music/grass.ogg');
        // state.load.audio('ice_music', 'music/ice.ogg');
        // state.load.audio('castle_music', 'music/castle.ogg');
        state.load.start();
    };
    state.update = function() {
        if (state.load.hasLoaded)
            state.game.state.add('level_intro', Title, true);
    };
    return state;
});