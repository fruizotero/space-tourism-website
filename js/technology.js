import { getHeader } from "../js/getheader.js";
import { menuActions } from "../js/menu.js";
import { markTab } from "../js/marktab.js";
import { getData } from "../js/getdata.js";
import { setDataTech } from "../js/setdatadocument.js";
import { sliderCirclesNumber } from "../js/slider_circles_number.js";

const d = document;
let data;
let tech = [];
let index;

d.addEventListener("DOMContentLoaded", async e => {

    await getHeader();
    data = await getData();
    tech = data["technology"];
    console.log(tech);
    setDataTech(
        tech[0],
        sliderCirclesNumber(".slider__circles", tech.length, ["slider__circle"], ".slider__circle", "slider__circle--active", "button", 1)
    )
    menuActions();
    markTab("technology");
})

d.addEventListener("click", e => {

    if (e.target.matches(".slider__circle")) {

        index = parseInt(e.target.dataset.number) - 1;
        setDataTech(tech[index]);
    }
})