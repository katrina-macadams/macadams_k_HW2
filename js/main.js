import { Plant, FloweringPlant } from "./modules/plant.js";

const lulu = new FloweringPlant(
    "Lulu", 
    "Yellow Elder", 
    "cheerful & social 🌸", 
    "bright, direct sunlight ☀️", 
    "water every few days💧", 
    "being surrounded by friends, chatting, and making people smile",
    "images/yellow-elder.png"
);

const echo = new Plant(
    "Echo", 
    "Philodendron Monstera", 
    "dreamy & artistic 🍃", 
    "soft, indirect light 🌥️", 
    "weekly watering + occasional misting 💦", 
    "getting lost in a dreamy playlist while painting or journaling",
    "images/philo-monstera.png"
);

const zara = new FloweringPlant(
    "Zara", 
    "Flamingo Flower", 
    "confident & playful 🌺", 
    "bright, indirect light 🌞", 
    "humid air & water every few days 💦", 
    "all eyes on me! I love excitement, gossip, and looking fabulous",
    "images/flamingo-flower.png"
);

const roo = new Plant(
    "Roo", 
    "Aloe Vera", 
    "independent & resilient 🌵", 
    "direct sunlight but tolerates shade 🌅", 
    "water every few weeks 🌵", 
    "Basking in the sun, taking it easy, and doing things my way",
    "images/aloe-vera.png"
);

const milo = new Plant(
    "Milo", 
    "String of Nickels", 
    "calm & thoughtful 🌿", 
    "gentle, dappled light 🍂", 
    "light watering every 10-14 days 💧", 
    "A quiet, cozy nook, a warm drink, and time to reflect",
    "images/string-nickles.png"
);

export { lulu, echo, zara, roo, milo };
import { submitQuiz } from "./modules/quiz.js";

// I had to put this down here because it couldn't access the variables above
document.querySelector('#submitQuiz').addEventListener('click', submitQuiz);

const questions = document.querySelectorAll('.question');
let currentQuestionIndex = 0;

document.querySelectorAll('.nextQuestion').forEach(button => {
    button.addEventListener('click', () => {
        questions[currentQuestionIndex].classList.remove('active');
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].classList.add('active');
        } else {
            document.querySelector('#quiz').classList.remove('active');
        }
    });
});

questions[0].classList.add('active');
document.querySelector('#submitQuiz').addEventListener('click', submitQuiz);