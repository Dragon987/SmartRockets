
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

    update()
    {
        if (this.pos.x >= target.x - 10 && this.pos.x <= target.x + 10 &&
            this.pos.y >= target.y - 10 && this.pos.y <= target.y + 10)
        {
            this.reachedDest = true;
        }
        else
        {
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
        else
            this.fitness = 100;
    }

}