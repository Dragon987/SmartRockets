

class DNA
{
    constructor()
    {
        this.genes = [];
        for (let i = 0; i < lifespan; i++)
        {
            this.genes.push(p5.Vector.random2D());
            this.genes[i].setMag(0.2);
        }
    }

    crossover(p)
    {
        let newDNA = new DNA();
        let mid = floor(random(this.genes.length));
        for (let i = 0; i < this.genes.length; i++)
        {
            let mut = random();
            if (i > mid)
                newDNA.genes[i] = this.genes[i];
            else
                newDNA.genes[i] = p.genes[i];
            if (mut < 0.01)
                newDNA.genes[i] = p5.Vector.random2D();
        }
        return newDNA;
    }
}