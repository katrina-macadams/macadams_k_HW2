import { Plant, FloweringPlant } from "./modules/plant.js";

const lulu = new FloweringPlant(
    "Lulu", 
    "Yellow Elder", 
    "Cheerful & Social 🌸", 
    "Loves **bright, direct sunlight** ☀️", 
    "Needs water **every few days** 💧", 
    "adores morning sun and **friendly conversations**! ☀️"
  );
  
  const echo = new Plant(
    "Echo", 
    "Philodendron Monstera", 
    "Dreamy & Artistic 🍃", 
    "Prefers **soft, indirect light** 🌥️", 
    "Enjoys a **weekly watering + occasional misting** 💦", 
    "**loves listening to soft lo-fi music** while growing! 🎶"
  );
  
  const zara = new FloweringPlant(
    "Zara", 
    "Flamingo Flower", 
    "Confident & Playful 🌺", 
    "Thrives in **bright, indirect light** 🌞", 
    "Loves **humid air & water every few days** 💦", 
    "**can't resist a little drama** & attention! 💃"
  );
  
  const roo = new Plant(
    "Roo", 
    "Aloe Vera", 
    "Independent & Resilient 🌵", 
    "Enjoys **direct sunlight but tolerates shade** 🌅", 
    "Only needs **water every few weeks** 🌵", 
    "loves soaking up the sun and being **a low-maintenance legend**! ☀️"
  );
  
  const milo = new Plant(
    "Milo", 
    "String of Nickels", 
    "Calm & Thoughtful 🌿", 
    "Prefers **gentle, dappled light** 🍂", 
    "Needs **light watering every 10-14 days** 💧", 
    "enjoys peaceful, **cozy corners and deep thoughts**! ☕"
  );

  export { lulu, echo, zara, roo, milo};

  import { startQuiz, submitQuiz } from "./modules/quiz.js";
  
  document.querySelector('#startQuiz').addEventListener('click', () => {
    document.querySelector('#hero').classList.add('slide-out-left');
    document.querySelector('#plants').classList.add('slide-out-right');
    document.querySelector('#quiz').classList.add('active');
});

document.querySelector('#submitQuiz').addEventListener('click', submitQuiz);