var words = [];
var createwords = ["Zayne","🍐","❄️","黎深"];

function createzayne(x,y){
    var originx = x;
    var originy = y;
}

function draw () {
    background('#0f274a');

    if (frameCount % 27 === 0) {
        var zayne = {
            x: 0,
            y: random (width),
            words: random(createwords),
            speed: random (1,3),
            colour: color(random('#000000')),

            draw: function() {
            text(this.words,this.x,this.y); 
            fill(this.colour); 
            noStroke();
            this.text(); 
            },

            text: function () {
            this.x += this.speed;
            }
        };
        words.push(zayne);
    }

    words = words.filter(function(zayne) {
        return zayne.x < height;
    });

    for (var i = 0; i < words.length; i +=1 ) {
            words[i].draw();
    }
}

function setup () {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);  
    textSize(20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


// References
// for: https://p5js.org/reference/p5/for/
// []: https://www.w3schools.com/jsref/jsref_array[].asp
// random: https://p5js.org/reference/p5/random/
// width: https://p5js.org/reference/p5/width/