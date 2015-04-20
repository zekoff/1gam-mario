define(function(require) {
    var Enemy = require('entity/enemy');
    var Player = require('entity/player');
    var Collision = require('callback/collision');

    var state = {};
    var collisionLayer;
    var player;
    var enemyGroup;
    var cursors;
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
        // create cursor keys/other input
        cursors = state.input.keyboard.createCursorKeys();
        state.physics.arcade.gravity.y = 800;

        enemyGroup = state.add.group();
        var i;
        for (i = 0; i < 30; i++) enemyGroup.add(new Enemy(state.game,
            Math.random() * state.world.width, 200, 'badman'));
    };
    state.update = function() {
        // world collision
        state.physics.arcade.collide(player, collisionLayer);
        state.physics.arcade.collide(enemyGroup, collisionLayer);
        // player vs. enemies collision
        state.physics.arcade.collide(player, enemyGroup, Collision.playerEnemy);
        // update enemy AI state
        // scan for input
        player.body.velocity.x = 0;
        if (cursors.left.isDown) player.body.velocity.x = -150;
        if (cursors.right.isDown) player.body.velocity.x = 150;
        if (cursors.up.isDown && player.body.onFloor())
            player.body.velocity.y = -400;
    };
    state.render = function() {
        state.time.advancedTiming = true;
        state.game.debug.text("FPS: " + state.time.fps, 20, 20, "#FFF");
    };
    return state;
});