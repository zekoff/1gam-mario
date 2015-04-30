define(function(require) {
    var Enemy = require('entity/enemy');
    var Player = require('entity/player');
    var Collision = require('callback/collision');
    var Config = require('config');
    var Input = require('callback/input');
    var Coin = require('entity/coin');

    var state = {};
    var collisionLayer;
    var player;
    var enemyGroup;
    var coinGroup;
    state.create = function() {
        state.game.stage.backgroundColor = 0xCCCCCC;
        var map = state.add.tilemap('test_map');
        map.addTilesetImage('test_tiles', 'test_tiles');
        collisionLayer = map.createLayer('collision');
        map.setCollision(1, true, collisionLayer);
        collisionLayer.resizeWorld();
        state.add.existing(player = new Player(state.game, 100, 100, 'badman'));
        state.camera.follow(player);
        Input.init(state, player);
        state.physics.arcade.gravity.y = Config.gravity;
        enemyGroup = state.add.group();
        map.createFromObjects('enemy', 3, 'badman', null, true, false, enemyGroup, Enemy);
        coinGroup = state.add.group();
        map.createFromObjects('coin', 4, 'coin', null, true, false, coinGroup, Coin);
    };
    state.update = function() {
        state.physics.arcade.collide(player, collisionLayer);
        state.physics.arcade.collide(enemyGroup, collisionLayer);
        state.physics.arcade.overlap(player, coinGroup, Collision.playerCoin);
        state.physics.arcade.overlap(player, enemyGroup, Collision.playerEnemy);
        enemyGroup.callAll('updateAi', null, state);
        Input.handle(player);
    };
    state.render = function() {
        state.time.advancedTiming = true;
        state.game.debug.text("FPS: " + state.time.fps, 20, 20, "#FFF");
    };
    return state;
});