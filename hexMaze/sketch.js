
let resolution = 20;
let cols = Math.floor(window.innerWidth / resolution);
let rows = Math.floor(window.innerHeight / resolution);
let threshold = Math.random();
let flatChance = Math.random();

function setup() {
    console.log({ threashold: threshold });


    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    background(255);
    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            let locX = x * resolution;
            let locY = y * resolution;
            let rand = random(1);
            strokeWeight(4);
            if (rand < flatChance) {
                line(locX, locY, locX + resolution, locY);
            } else {
                if (rand < threshold) {
                    line(locX, locY, locX + resolution, locY + resolution);
                } else {
                    line(locX, locY + resolution, locX + resolution, locY);
                }
            }

        }
    }

}



function draw() {

}

function mouseClicked() {
    console.log("Hello there 2 ", { cols, rows, flatChance, threshold })
}
