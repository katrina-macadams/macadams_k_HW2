gsap.registerPlugin(SplitText)


export function hero() {
    const creativeText = document.querySelector("#creative-text");
    const texts = ["Echo", "Zara", "Roo", "Milo"];
    let index = 0;


    function animateText() {
        const split = new SplitText(creativeText, { type: "words,chars" });
        gsap.fromTo(split.chars, 
            { opacity: 0, filter: "blur(3px)" }, 
            { opacity: 1, filter: "blur(0px)", duration: 0.5, stagger: 0.05, ease: "power2.out", onComplete: () => {
                setTimeout(() => {
                    gsap.to(split.chars, {
                        duration: 0.5,
                        opacity: 0,
                        filter: "blur(10px)",
                        stagger: 0.05,
                        ease: "power2.in",
                        onComplete: () => {
                            index = (index + 1) % texts.length;
                            creativeText.textContent = texts[index];
                            animateText();
                        }
                    });
                }, 2000); 
            }}
        );
    }
    
    animateText();
    }