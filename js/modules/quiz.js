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
    const careInstructions = matchedPlant.careInstructions();
    console.log(scores);
    document.querySelector('#quiz').style.display = 'none';
    document.querySelector('#result').style.display = 'block';
    document.querySelector('#plantMatch').innerText = `Your perfect plant match is ${matchedPlant.name}, the ${matchedPlant.type}! ${matchedPlant.describe()} ${careInstructions}`;
}

document.querySelector('#startQuiz').addEventListener('click', () => {
    document.querySelector('#hero').classList.add('slide-out-left');
    document.querySelector('#plants').classList.add('slide-out-right');
    document.querySelector('#quiz').classList.add('active');
});

const questions = document.querySelectorAll('.question');

questions[0].classList.add('active');

export { startQuiz, submitQuiz };