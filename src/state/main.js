define(['phaser'], function(Phaser) {
    var state = {};
    var collisionLayer;
    var player;
    var cursors;
    state.create = function() {
        // set size of game world
        // create tilemap for level
        var map = state.add.tilemap('test_map');
        map.addTilesetImage('test_tiles', 'test_tiles');
        // create collision group
        collisionLayer = map.createLayer('collision');
        // fill collision group with collision layer
        map.setCollision(1, true, collisionLayer);
        collisionLayer.resizeWorld();
        // create player sprite
        player = state.add.sprite(100, 100, 'badman');
        state.physics.arcade.enableBody(player);
        // fix camera to player
        state.camera.follow(player);
        // create cursor keys/other input
        cursors = state.input.keyboard.createCursorKeys();
        state.physics.arcade.gravity.y = 250;
    };
    state.update = function() {
        // player vs. world collision
        state.physics.arcade.collide(player, collisionLayer);
        // player vs. enemies collision
        // update enemy AI state
        // scan for input
        player.body.velocity.x = 0;
        if (cursors.left.isDown) player.body.velocity.x = -150;
        if (cursors.right.isDown) player.body.velocity.x = 150;
        if (cursors.up.isDown && player.body.onFloor())
            player.body.velocity.y = -250;
    };
    return state;
});