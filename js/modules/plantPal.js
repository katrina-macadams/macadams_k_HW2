gsap.registerPlugin(SplitText);

export function plantPal() {
    const plantPal = document.querySelector('#plantPal');

    const splitText = new splitText(plantPal, { type: "words" });

    plantPal.addEventListener('mouseenter', () => {
        gsap.to(splitText.words, {
            duration: 0.5,
            textContent: "Plant Pal",
            stagger: 0.1, 
            ease: "power2.out",
        });
    });

    plantPal.addEventListener('mouseleave', () => {
        gsap.to(splitText.words, {
            duration: 0.5,
            textContent: "PlantPal", 
            stagger: 0.1,
            ease: "power2.out",
        });
    });
}
