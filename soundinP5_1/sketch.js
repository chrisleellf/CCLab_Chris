console.log("js file linked");

let clickSound;

function preload(){
   clickSound = loadSound ("sounds/beat.mp3")
}

function setup(){
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");
}