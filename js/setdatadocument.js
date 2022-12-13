const d = document;

const animationImage = {
    opacity: [0, 1]
};

const animationText = {
    opacity: [0, 1],
    transform: ["translate(-1em, 0)", "translate(0, 0)"]
}

export const filterData = (data = [], valueToCheck, variableToCheck = "") => {

    let dataFinal;

    for (let index = 0; index < data.length; index++) {
        let valueData = data[index][variableToCheck].toLocaleLowerCase();
        if (valueData === valueToCheck) {
            dataFinal = data[index];
            break;
        }

    }
    return dataFinal;

}


export const setDataDestionation = (el) => {


    d.querySelector(".article__image").setAttribute("src", `.${el["images"].png}`);
    d.querySelector(".article__text__title").textContent = el["name"];
    d.querySelector(".article__paragraph").textContent = el["description"];
    d.querySelector(".detail__value-1").textContent = el["distance"];
    d.querySelector(".detail__value-2").textContent = el["travel"];

    d.querySelector(".article__image").animate(animationImage, 500);
    d.querySelector(".article__text__title").animate(animationText, 500);
    d.querySelector(".article__paragraph").animate(animationText, 500);

}

export const setDataCrew = (el, fnt = () => { }) => {


    d.querySelector(".crew__image").setAttribute("src", `.${el["images"].png}`);
    d.querySelector(".crew__info__role").textContent = el["role"];
    d.querySelector(".crew__info__name").textContent = el["name"];
    d.querySelector(".crew__info__description").textContent = el["bio"];
    fnt();

    d.querySelector(".crew__image").animate(animationImage, 500);
    d.querySelector(".crew__info__role").animate(animationText, 500);
    d.querySelector(".crew__info__name").animate(animationText, 500);
    d.querySelector(".crew__info__description").animate(animationText, 500);

}