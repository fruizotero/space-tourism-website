import { getHeader } from "../js/getheader.js";
import { menuActions } from "../js/menu.js";
import { markTab, Tab } from "../js/marktab.js";
import { getData } from "../js/getdata.js";
import { filterData, setDataDestionation } from "../js/setdatadocument.js";

const d = document;
let selectTab = new Tab();
let data;
let destination;

d.addEventListener("DOMContentLoaded", async e => {

    await getHeader("../pages/templates/header.html");
    data = await getData();

    destination = filterData(data["destinations"], "moon", "name");

    setDataDestionation(destination);
    menuActions();
    markTab("destination");
    selectTab.markTab("moon", "article__tab", "tab")

});

d.addEventListener("click", e => {

    console.log(e.target);

    if (e.target.matches(".article__tab")) {
        let nameTab = e.target.dataset.name;
        selectTab.markTab(nameTab, "article__tab", "tab");
        destination = filterData(data["destinations"], nameTab, "name");
        setDataDestionation(destination);
    }


});