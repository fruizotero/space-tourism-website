const d = document;


export const getHeader = async () => {

    try {

        let resp = await fetch("pages/templates/header.html");
        let text = await resp.text();

        if (!resp.ok) throw { status: resp.status, statusText: resp.statusText };

        d.querySelector(".header").outerHTML = text

    } catch (error) {

        console.log(error);
    }


}