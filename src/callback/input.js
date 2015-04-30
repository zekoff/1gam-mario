define(['phaser'], function(Phaser) {
    var input = {};
    var cursors;
    input.init = function(state, player) {
        cursors = state.input.keyboard.createCursorKeys();
        cursors.up.onDown.add(function() {
            player.jumpPressed();
        });
        cursors.up.onUp.add(function(){
            player.jumpReleased();
        });
    };
    input.handle = function(player) {
        player.moveInput = 0;
        if (cursors.left.isDown)
            player.moveInput = Phaser.LEFT;
        if (cursors.right.isDown)
            player.moveInput = Phaser.RIGHT;
    };
    return input;
});