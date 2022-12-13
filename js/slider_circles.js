
const d = document;
let $fragment = d.createDocumentFragment();

const animation = {
    opacity: [0, 1],
    transform: ["translate(-1em, 0)", "translate(0, 0)"]
};

const animationOpacity = {
    opacity: [0, 1]
}

export const sliderCircles = (parentDOMClass, amountElements, classToSet, mainColor, secondaryColor) => {



    for (let index = 0; index < amountElements; index++) {
        let $divCircle = d.createElement("div");
        $divCircle.setAttribute("class", classToSet);
        $divCircle.dataset.number = index;
        if (index === 0)
            $divCircle.style.backgroundColor = mainColor;
        $fragment.appendChild($divCircle);
    }

    d.querySelector(`${parentDOMClass}`).appendChild($fragment);

    d.querySelector(`${parentDOMClass}`).animate(animation, 500);

    d.addEventListener("click", e => {

        if (e.target.matches(`.${classToSet}`)) {

            let $slidersCircles = d.querySelectorAll(`.${classToSet}`);

            $slidersCircles.forEach(el => {
                el.style.backgroundColor = secondaryColor;
            });

            e.target.style.backgroundColor = mainColor;
            e.target.animate(animationOpacity, 500);
        }
    })

}