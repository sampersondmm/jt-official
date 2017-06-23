var canvas,
tan,
maroon;

function setup () {
    canvas = createCanvas(1300,200);
    maroon = color(173,37,49);
    tan = color(188,174,145);
    canvas.position(0,1);
};

function draw () {
    clear();
    //background(tan);
    fill(maroon);
    rect(146,0,254,200);
    fill(0);
    rect(120,0,26,200);
    rect(146,87,254,26);
    ellipse(50,100,46,46);
};