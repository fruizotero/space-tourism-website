import { getHeader } from "../js/getheader.js";
import { menuActions } from "../js/menu.js";
import { markTab } from "../js/marktab.js";

const d = document;

d.addEventListener("DOMContentLoaded", async e => {

    await getHeader();
    menuActions();
    markTab("crew");

})