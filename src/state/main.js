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
        // create tilemap for level
        var map = state.add.tilemap('test_map');
        map.addTilesetImage('test_tiles', 'test_tiles');
        // create collision group
        collisionLayer = map.createLayer('collision');
        // fill collision group with collision layer
        map.setCollision(1, true, collisionLayer);
        // set size of game world
        collisionLayer.resizeWorld();
        // create player sprite
        player = new Player(state.game, 100, 100, 'badman');
        state.add.existing(player);
        // fix camera to player
        state.camera.follow(player);
        Input.init(state);
        state.physics.arcade.gravity.y = Config.gravity;
        console.log(player.getJumpHeightInTiles());

        enemyGroup = state.add.group();
        var i;
        for (i = 0; i < 30; i++) enemyGroup.add(new Enemy(state.game,
            Math.random() * state.world.width, 200, 'badman'));

        coinGroup = state.add.group();
        for (i = 0; i < 50; i++) coinGroup.add(new Coin(state.game,
            Math.random() * state.world.width, Math.random() *
            state.world.height, 'coin'));
    };
    state.update = function() {
        state.physics.arcade.collide(player, collisionLayer);
        state.physics.arcade.collide(enemyGroup, collisionLayer);
        state.physics.arcade.overlap(player, coinGroup, Collision.playerCoin);
        state.physics.arcade.overlap(player, enemyGroup, Collision.playerEnemy);
        // player/pickups collision
        enemyGroup.callAll('updateAi', null, state);
        Input.handle(player);
    };
    state.render = function() {
        state.time.advancedTiming = true;
        state.game.debug.text("FPS: " + state.time.fps, 20, 20, "#FFF");
    };
    return state;
});