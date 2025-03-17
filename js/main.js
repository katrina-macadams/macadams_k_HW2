import { Plant, FloweringPlant } from "./modules/plant.js";
import { startQuiz, submitQuiz } from "./modules/quiz.js";

startQuiz();

const lulu = new FloweringPlant(
    "Lulu", 
    "Yellow Elder", 
    "cheerful & social 🌸", 
    "bright, direct sunlight ☀️", 
    "water every few days💧", 
    "adores morning sun and friendly conversations! ☀️"
  );
  
  const echo = new Plant(
    "Echo", 
    "Philodendron Monstera", 
    "dreamy & artistic 🍃", 
    "soft, indirect light 🌥️", 
    "weekly watering + occasional misting 💦", 
    "loves listening to soft lo-fi music** while growing! 🎶"
  );
  
  const zara = new FloweringPlant(
    "Zara", 
    "Flamingo Flower", 
    "confident & playful 🌺", 
    "bright, indirect light 🌞", 
    "humid air & water every few days 💦", 
    "can't resist a little drama & attention! 💃"
  );
  
  const roo = new Plant(
    "Roo", 
    "Aloe Vera", 
    "independent & resilient 🌵", 
    "direct sunlight but tolerates shade 🌅", 
    "water every few weeks 🌵", 
    "loves soaking up the sun and being a low-maintenance legend! ☀️"
  );
  
  const milo = new Plant(
    "Milo", 
    "String of Nickels", 
    "calm & houghtful 🌿", 
    "gentle, dappled light 🍂", 
    "light watering every 10-14 days 💧", 
    "enjoys peaceful, cozy corners and deep thoughts! ☕"
  );

  export { lulu, echo, zara, roo, milo};

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