/**
 * Lines.js
 * http://dbtek.github.io/lines
 *
 * Copyright (c) 2014, Ismail Demirbilek
 * Published under MIT License
 * http://opensource.org/licenses/MIT
 */

function lines(options){
    // Set default options
    this.setDefaults();

    // Check options param and override properties if they are not null
    if(typeof(options) != 'undefined'){
        if('canvas' in options)
            this.setCanvas(options.canvas);
        if('pieces' in options)
            this.setPieces(options.pieces);
        if('color' in options)
            this.setColor(options.color);
    }

    return this;
}

/**
 * Default properties
 */
lines.prototype.defaults = {
    canvas: 'lines-canvas',
    pieces: 5,
    color: '#EEE'
};

/**
 * setCanvas() sets canvas id which will contain lines
 *
 * @param <String> canvas
 */
lines.prototype.setCanvas = function(canvas){
    this.canvas = canvas;
    return this;
};

/**
 * setPieces() sets number of lines to be drawn
 *
 * @param <int> pieces
 */
lines.prototype.setPieces = function(pieces){
    this.pieces = pieces;
    return this;
};

/**
 * setColor() sets the hex color of the lines
 *
 * @param <String> color
 */
lines.prototype.setColor = function(color){
    this.color = color;
    return this;
};

/**
 * clearCanvas() clears the canvas
 * To avoid multiple drawings
 */
lines.prototype.clearCanvas = function(){
    var cnv = document.getElementById(this.canvas);
    var ctx = cnv.getContext("2d");
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    return this;
};

/**
 * setDefaults() sets the default options
 */
lines.prototype.setDefaults = function(){
    this.canvas = this.defaults.canvas;
    this.pieces = this.defaults.pieces;
    this.color = this.defaults.color;

    return this;
};

/**
 * draw() is the main method, clears the canvas and draws the lines
 * Based on the options provided
 */
lines.prototype.draw = function(){
    this.clearCanvas();

    var cnv = document.getElementById(this.canvas);
    var ctx = cnv.getContext("2d");

    ctx.strokeStyle = this.color;

    ctx.beginPath()

    for(i=0; i<this.pieces; i++){
        var rndY = parseInt(Math.random() * 2 * cnv.height - cnv.height);
        var rndY2 = parseInt(Math.random() * 2 * cnv.height - cnv.height);

        if(rndY < 0 && rndY2 < 0)
            rndY2 += parseInt(Math.random() * cnv.height);

        if(rndY > cnv.height && rndY2 > cnv.height)
            rndY2 -= parseInt(Math.random() * cnv.height);

        ctx.moveTo(0,rndY);
        ctx.lineTo(cnv.width,rndY2);
        ctx.stroke();

        console.log('Lines: Drawing piece ' + (i+1) + ' (0,' + rndY + ') to (' + cnv.width + ',' + rndY2 + ')');
    }

    return this;
};
