export function confetti() {

const startQuizButton = document.querySelector('#startQuiz');
const confettiContainer = document.querySelector('#confetti-container');

const createConfetti = () => {
    const colors = ['#FFD700', '#FF4500', '#32CD32', '#1E90FF', '#FF69B4'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiContainer.appendChild(confetti);


        gsap.fromTo(confetti, {
            x: startQuizButton,
            y: startQuizButton,
            opacity: 1,
            scale: Math.random() * 0.5 + 0.5,
        }, {
        
            x: Math.random() * 200,
            y: Math.random() * 400,
            opacity: 0,
            scale: 0.5,
            duration: 2.5,
            onComplete: () => confetti.remove()
        });
    }
};

startQuizButton.addEventListener('mouseenter', createConfetti);

}