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

    const matchedPlant = scores.reduce((max, current) => {
        return current.score > max.score ? current : max;
    }).plant;

    const careInstructions = matchedPlant.careInstructions();
    console.log(scores);
    document.querySelector('#quiz').style.display = 'none';
    document.querySelector('#result').style.display = 'block';
    document.querySelector('#plantMatch').innerHTML = `
        <p>Your perfect plant match is ${matchedPlant.name}, the ${matchedPlant.type}!</p>
        <p>${matchedPlant.describe()}</p>
        <p>${careInstructions}</p>
        <img src="${matchedPlant.image}" alt="${matchedPlant.name}">`;
}

document.querySelector('#startQuiz').addEventListener('click', () => {
    document.querySelector('#hero').classList.add('slide-out-left');
    document.querySelector('#plants').classList.add('slide-out-right');
    document.querySelector('#quiz').classList.add('active');
});

const questions = document.querySelectorAll('.question');
let currentQuestion = 0;

document.querySelectorAll('.nextQuestion').forEach(button => {
    button.addEventListener('click', () => {
        questions[currentQuestion].classList.remove('active');
        currentQuestion++;
        if (currentQuestion < questions.length) {
            questions[currentQuestion].classList.add('active');
        } else {
            document.querySelector('#quiz').classList.remove('active');
            document.querySelector('#submitQuiz').style.display = 'block';
        }
    });
});

document.querySelector('#resetQuiz').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
});

questions[0].classList.add('active');
document.querySelector('#submitQuiz').addEventListener('click', submitQuiz);

export { startQuiz, submitQuiz };