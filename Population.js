
class Population
{
    constructor()
    {
        this.rockets = [];
        this.popsize = 100;
        for (let i = 0; i < this.popsize; i++)
        {
            this.rockets.push(new Rocket());
        }
        this.matingPool = [];
    }

    run(obstacles)
    {
        for (let i = 0; i < this.popsize; i++)
        {
            this.rockets[i].update(obstacles);
            this.rockets[i].show();
        }
    }

    evaluate()
    {
        let rocket;
        let maxFit = 0;
        for (rocket of this.rockets)
        {
            rocket.calcFitness();
            if (rocket.fitness > maxFit)
                maxFit = rocket.fitness;
        }

        for (rocket of this.rockets)
        {
            rocket.fitness /= maxFit;
        }

        this.matingPool = [];

        for (rocket of this.rockets)
        {
            let n = rocket.fitness * 100;
            for (let i = 0; i < n; i++)
            {
                this.matingPool.push(rocket);
            }
        }
    }

    selection()
    {
        let newRockets = [];
        for (let i = 0; i < this.rockets.length; i++)
        {
            let p1 = random(this.matingPool).dna;
            let p2 = random(this.matingPool).dna;
            var child = p1.crossover(p2);
            newRockets.push(new Rocket(child));
        }
        this.rockets = newRockets;
    }


}