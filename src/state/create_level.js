define(function(require) {
    var Enemy = require('entity/enemy');
    var Coin = require('entity/coin');
    var Input = require('callback/input');
    var Config = require('config');
    var Player = require('entity/player');
    var Exit = require('entity/exit');

    var create_level = function(state, number) {
        var levelData = {};
        var map = state.add.tilemap('level' + number);
        levelData.name = map.properties.name;
        state.game.stage.backgroundColor = map.properties.backgroundColor;
        map.addTilesetImage('spritesheet_ground_small',
            'spritesheet_ground_small');
        map.addTilesetImage('spritesheet_items_small',
            'spritesheet_items_small');
        map.addTilesetImage('spritesheet_tiles_small',
            'spritesheet_tiles_small');
        levelData.collisionLayer = map.createLayer('collision');
        map.setCollisionByExclusion([], true, levelData.collisionLayer);
        levelData.collisionLayer.resizeWorld();
        map.createLayer('clutter');
        state.add.existing(levelData.player = new Player(state.game, 100, 100,
            'player'));
        state.camera.follow(levelData.player);
        Input.init(state, levelData.player);
        state.physics.arcade.gravity.y = Config.gravity;
        levelData.enemyGroup = state.add.group();
        map.createFromObjects('slime', 249, 'slime', null, true, false,
            levelData.enemyGroup, Enemy);
        map.createFromObjects('bee', 249, 'bee', null, true, false,
            levelData.enemyGroup, Enemy);
        map.createFromObjects('frog', 249, 'frog', null, true, false,
            levelData.enemyGroup, Enemy);
        map.createFromObjects('barnacle', 249, 'barnacle', null, true, false,
            levelData.enemyGroup, Enemy);
        levelData.coinGroup = state.add.group();
        map.createFromObjects('coin', 158, 'coin', null, true, false,
            levelData.coinGroup, Coin);
        levelData.exitGroup = state.add.group();
        map.createFromObjects('exit', 221, 'exit', null, true, false,
            levelData.exitGroup, Exit);
        levelData.music = state.add.audio(map.properties.music);
        levelData.music.volume = 0.3;
        levelData.music.play();
        return levelData;
    };
    return create_level;
});