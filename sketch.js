let mic;

let boca_w = 400;

var x = 1;
var y = 1;

function setup() {
    var canvas = createCanvas(windowWidth,windowHeight);
    canvas;
    canvas.parent('miCaraP5');

    mic = new p5.AudioIn();
    mic.start();
}



function draw() {
    background(0);

    micLevel = mic.getLevel();

    mov = map(micLevel, 0, 1, 10, 300);
    mov2 = map(micLevel, 0, 1, 10, 250);

    //    fondo cara
    rectMode(CENTER);
    push();
    fill('white');
    rect(width / 2, height / 2, width / 3.8, height / 2, 5);

    //mueve los ojos lateral
    if (width / 2 - 9 < mouseX) {
        if (width / 2 + 9 > mouseX) {
            x = mouseX
        }
    }

    //mueve los ojos vertical
    if (height / 2 - 12 < mouseY) {
        if (height / 2 + 12 > mouseY) {
            y = mouseY
        }
    }



    //    ceja izquierda
    fill('black');
    rect(width * 0.60, height / 3, width / 20, height / 100 + (mov - mov2));

    //    ojo izquierdo
    fill('black');
    ellipse(x + (width * 0.1), y - height / 10, height / 40, height / 40);

    //    ceja derecha
    fill('black');
    rect(width * 0.40, height / 3, width / 20, height / 100 + (mov - mov2));

    //    ojo derecho
    fill('black');
    ellipse(x - (width * 0.1), y - height / 10, height / 40, height / 40);

    //    nariz
    fill('black');
    rect(width / 2, height / 2.7, width / 8, height / 5, 6);
    pop();


    //    boca
    rectMode(CORNER);
    fill('black');
    rect(width / 2 - ((width / 4) / 2), height / 2, width / 2, height / 10 + mov2);



    //    comisuralabios
    fill('black');
    rect(width * 0.52, height / 2.2, width / 100, height / 20);
    fill('black');
    rect(width * 0.48, height / 2.2, width / 100, height / 20);

    //    dientes arriba izquierda-derecha
    fill('white');
    rect(width * 0.39, height / 1.95, width / 35, height / 30, 1);
    fill('white');
    rect(width * 0.44, height / 1.95, width / 35, height / 60, 1);
    fill('white');
    rect(width * 0.49, height / 1.95, width / 35, height / 60, 1);
    fill('white');
    rect(width * 0.54, height / 1.95, width / 35, height / 60, 1);
    fill('white');
    rect(width * 0.59, height / 1.95, width / 35, height / 30, 1);

    //    dientes abajo izquierda-derecha
    fill('white');
    rect(width * 0.39, height / 1.8 + mov2, width / 35, height / 60, 1);
    fill('white');
    rect(width * 0.44, height / 1.8 + mov2, width / 35, height / 60, 1);
    fill('white');
    rect(width * 0.49, height / 1.8 + mov2, width / 35, height / 60, 1);
    fill('white');
    rect(width * 0.54, height / 1.8 + mov2, width / 35, height / 60, 1);
    fill('white');
    rect(width * 0.59, height / 1.8 + mov2, width / 35, height / 60, 1);

}

function touchStarted() {
    getAudioContext().resume();
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

