import { lulu, echo, zara, roo, milo } from "../main.js";

    function startQuiz() {
    console.log('Quiz started');
}

    function submitQuiz() {
    const personality = document.querySelector('#motto').value;
    const light = document.querySelector('#light').value;
    const water = document.querySelector('#water').value;
    const favouriteThing = document.querySelector('#favourite').value;
    console.log("quiz submitted");
    const plants = [lulu, echo, zara, roo, milo];
    const scores = plants.map(plant => {
        let score = 0;
        if (plant.personality === personality) score++;
        if (plant.light === light) score++;
        if (plant.water === water) score++;
        if (plant.favouriteThing === favouriteThing) score++;
        return { plant, score };
    });

    const matchedPlant = scores.reduce((max, current) => current.score > max.score ? current : max).plant;

    document.querySelector('#quiz').style.display = 'none';
    document.querySelector('#result').style.display = 'block';
    document.querySelector('#plantMatch').innerText = `Your perfect plant match is ${matchedPlant.name}, the ${matchedPlant.type}! ${matchedPlant.describe()}`;
}

export { startQuiz, submitQuiz };