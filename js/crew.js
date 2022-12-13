import { getHeader } from "../js/getheader.js";
import { menuActions } from "../js/menu.js";
import { markTab } from "../js/marktab.js";
import { getData } from "../js/getdata.js";
import { setDataCrew } from "../js/setdatadocument.js";
import { sliderCircles } from "../js/slider_circles.js";

const d = document;
let data;
let crew = [];

d.addEventListener("DOMContentLoaded", async e => {

    await getHeader();
    data = await getData();
    crew = data["crew"];
    // sliderCircles(".slider__circles", crew.length);
    setDataCrew(
        crew[0],
        sliderCircles(".slider__circles", crew.length, "slider__circle", "#ffffff", "#d0d6f950")
    );
    menuActions();
    markTab("crew");

});

d.addEventListener("click", e => {

    if (e.target.matches(".slider__circle")) {
        console.log(e.target.dataset.number);
        let dataCrewIndex= e.target.dataset.number
        setDataCrew(crew[dataCrewIndex]);
    }

});