
class Rocket
{
    constructor(dna)
    {
        this.pos = createVector(width / 2, height);
        this.vel = createVector();
        this.acc = createVector();
        if (dna)
            this.dna = dna;
        else
            this.dna = new DNA();
        this.fitness = 0;
        this.reachedDest = false;
        this.isDead = false;
    }

    show()
    {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 25, 5);
        pop();
    }

    applyForce(force)
    {
        this.acc.add(force);
    }

    update(obstacles)
    {
        if (this.pos.x >= target.x - 10 && this.pos.x <= target.x + 10 &&
            this.pos.y >= target.y - 10 && this.pos.y <= target.y + 10)
        {
            this.reachedDest = true;
        }
        else if (this.isDead)
        {

        }
        else
        {
            this.dead(obstacles);
            this.applyForce(this.dna.genes[count]);
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
    }

    calcFitness()
    {
        if (!this.reachedDest)
        {
            let d = dist(this.pos.x, this.pos.y, target.x, target.y);
            this.fitness = 1.0 / d;
        }
        else if (this.isDead)
            this.fitness = (1.0 / d) / 100;
        else
            this.fitness = 100;
    }

    dead(obstacles)
    {
        for (let obs of obstacles)
        {
            if (this.pos.x - 2.5 >= obs.x && this.pos.x + 2.5 <= obs.x + obs.w &&
                this.pos.y - 5 >= obs.y && this.pos.x + 5 <= obs.y + obs.h)
                {
                    this.isDead = true;
                    return;
                }
        }
    }

}