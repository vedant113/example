var target1;

function setup(){
createCanvas(800,800);

target1 = new Target(400,400,40,40);
}

function Draw(){
background("black")

target1.display();
}