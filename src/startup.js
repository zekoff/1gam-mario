/* global requirejs */
requirejs.config({
    shim: {
        'phaser': {
            exports: 'Phaser'
        }
    },
    paths: {
        phaser: [
            'https://cdnjs.cloudflare.com/ajax/libs/phaser/2.2.2/phaser.min'
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