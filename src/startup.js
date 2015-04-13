/* global requirejs */
requirejs.config({
    shim: {
        'phaser': {
            exports: 'Phaser'
        }
    },
    paths: {
        phaser: [
            'https://cdnjs.cloudflare.com/ajax/libs/phaser/2.3.0/custom/phaser-arcade-physics.min',
            'https://raw.githubusercontent.com/photonstorm/phaser/8233b0a07974a21f6757b7665e61feeeda9b0038/build/phaser.min'
        ]
    }
});
requirejs(['phaser', 'state/load'], function(Phaser, LoadState) {
    // figure out size of game world
    var game = new Phaser.Game();
    game.state.add('load', LoadState, true);
}, function(error) {
    console.log(error);
    document.write("Error during module loading.");
});