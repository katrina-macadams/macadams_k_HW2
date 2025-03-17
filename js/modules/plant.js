class Plant {
    constructor(
        name, 
        type, 
        personality, 
        light, 
        water, 
        favouriteThing,
        image) {

        this.name = name;
        this.type = type;
        this.personality = personality;
        this.light = light;
        this.water = water;
        this.favouriteThing = favouriteThing;
        this.image = image;
    }

    describe() {
        return `${this.name} is a ${this.type} plant. It is ${this.personality}, and ${this.favouriteThing}.`;
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
        image,
        bloomSeason
    ) {
        super(name, type, personality, light, water, favouriteThing, image);
        this.bloomSeason = bloomSeason;
    }

    bloomInfo() {
        return `${this.name} blooms in the ${this.bloomSeason}.`;
    }
}

export { Plant, FloweringPlant };