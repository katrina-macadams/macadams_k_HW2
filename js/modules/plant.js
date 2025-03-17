class Plant {
    constructor(
        name, 
        type, 
        personality, 
        light, 
        water, 
        favouriteThing) {
        this.name = name;
        this.type = type;
        this.personality = personality;
        this.light = light;
        this.water = water;
        this.favouriteThing = favouriteThing;
    }

    describe() {
        return `${this.name} is a ${this.type} plant. It is ${this.personality}, prefers ${this.light}, needs ${this.water}, and ${this.favouriteThing}.`;
    }

    careInstructions() {
        return `To care for ${this.name}, make sure it gets ${this.light} and water it ${this.water}.`;
    }
}

class FloweringPlant extends Plant {
    constructor(
        name, 
        type, 
        personality, 
        light, water, 
        favouriteThing, 
        bloomSeason
    ) {
        super(name, type, personality, light, water, favouriteThing);
        this.bloomSeason = bloomSeason;
    }

    bloomInfo() {
        return `${this.name} blooms in the ${this.bloomSeason}.`;
    }
}

export { Plant, FloweringPlant };