const d = document;
let $fragment = d.createDocumentFragment();
let number;
let isFirstNumber = true;

const animation = {
    opacity: [0, 1],
    transform: ["translate(-1em, 0)", "translate(0, 0)"]
};

const animationOpacity = {
    opacity: [0, 1]
}

export const sliderCirclesNumber = (parentDOMClass, amountElements, classesToSet = [], classToMatch, classElementActive, type = "div", initialNumber = 0) => {

    number = initialNumber;

    for (let index = 0; index < amountElements; index++) {
        let $elementCircle = d.createElement(type);

        classesToSet.forEach((cls) => {
            $elementCircle.setAttribute("class", cls);
        });

        $elementCircle.dataset.number = number;
        $elementCircle.textContent = number;

        if (isFirstNumber) {
            $elementCircle.classList.add(classElementActive);
            isFirstNumber = false;
        }
        // if (index === 0)
        //     $elementCircle.style.backgroundColor = mainColor;
        $fragment.appendChild($elementCircle);

        number++;
    }

    d.querySelector(`${parentDOMClass}`).appendChild($fragment);

    d.querySelector(`${parentDOMClass}`).animate(animation, 500);

    d.addEventListener("click", e => {

        if (e.target.matches(classToMatch)) {

            let $slidersCircles = d.querySelectorAll(classToMatch);

            $slidersCircles.forEach(slider => {
                slider.classList.remove(classElementActive)
            });

            e.target.classList.add(classElementActive)

            e.target.animate(animationOpacity, 500);
        }
    })

}