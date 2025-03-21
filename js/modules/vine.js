gsap.registerPlugin(DrawSVGPlugin);


export function vine() {
    document.querySelector('.vine-path').style.strokeDasharray = 'none';
    document.querySelector('#startQuiz').addEventListener('click', () => {
        const timeline = gsap.timeline();
    
        // Animate the vine path
        timeline.fromTo(
            '.vine-path',
            { drawSVG: '0%' },
            { drawSVG: '100%', duration: 8, ease: 'power2.out' }
        );
    
        // Activate the quiz section
        timeline.add(() => {
            document.querySelector('#quiz').classList.add('active');
        });
    });

}