define(function() {
    var input = {};
    var cursors;
    input.init = function(state) {
        cursors = state.input.keyboard.createCursorKeys();
    };
    input.handle = function(player) {
        player.body.velocity.x = 0;
        if (cursors.left.isDown) player.body.velocity.x = -player.speed;
        if (cursors.right.isDown) player.body.velocity.x = player.speed;
        if (cursors.up.isDown && player.body.onFloor())
            player.body.velocity.y = -player.jumpPower;
    };
    return input;
});