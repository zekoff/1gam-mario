define(['phaser'], function(Phaser) {
    var input = {};
    var cursors;
    input.init = function(state) {
        cursors = state.input.keyboard.createCursorKeys();
    };
    input.handle = function(player) {
        player.moveInput = 0;
        if (cursors.left.isDown) {
            player.body.velocity.x = -player.speed;
            player.moveInput = Phaser.LEFT;
        }
        if (cursors.right.isDown) {
            player.body.velocity.x = player.speed;
            player.moveInput = Phaser.RIGHT;
        }
        if (cursors.up.isDown && player.body.onFloor())
            player.body.velocity.y = -player.jumpPower;
    };
    return input;
});