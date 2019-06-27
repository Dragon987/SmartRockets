let p;
let lifespan = 200;
let lifeP;
let count = 0;
let target;
let obstacles;

function setup()
{
    lifeP = createP();
    createCanvas(640, 480);
    p = new Population();
    target = createVector(width / 2, 20);
    obstacles = [];
    obstacles.push(new Obstacle(0, 300, 400, 20));
}



function draw()
{
    background(0);
    for (let obs of obstacles)
        obs.show();
    p.run(obstacles);
    lifeP.html(count);

    count++;
    if (count == lifespan)
    {
        p.evaluate();
        p.selection();
        count = 0;
    }

    ellipse(target.x, target.y, 16);
}