let bubbles;

function setup() {
    createCanvas(200, 120);
    bubbles = [];
    for(let i=0; i < 4; i++){
        let x = random() * width;
        let y = random() * height;
        let diameter  = random(20, 100)
        let speed = random(4,8)
        bubbles.push(createBubble(x, y, diameter, speed));
    }


}
function draw(){
    background('#FF7F50');
    for (let bubble of bubbles){
        bubble.draw();
        bubble.move();
        drawWords(width * 0.2);
    }
}

function createBubble(xPos, yPos, diameter, bubbleSpeed) {
    return {
        x: xPos,
        y: height + yPos,
        diameter: diameter,
        bubbleSpeed: bubbleSpeed,
        draw: function() {
                    fill(220, 20, 60, 50);
            stroke('black')
            ellipse(this.x, this.y, this.diameter);
            fill(220, 20, 60, 20);
            ellipse(this.x + this.diameter / 4, this.y + this.diameter / 4, this.diameter / 8 )
        },
        move: function() {
            this.y -= this.bubbleSpeed;
            if(this.y < 0 - this.diameter/2) {
                this.y = height + this.diameter/2;
            }
        }
    }
}


function drawBubble(x, y, diameter) {
    fill(220, 20, 60, 100);
    stroke('black')
    ellipse(x, y, diameter);
    fill(255);
    ellipse(x + diameter/4, y + diameter/4, diameter/8);
}

function drawWords(x) {
  fill(0);
  text('Irn Bru', 90, 70);

}