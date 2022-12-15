const d = document;

//Poner parámetro para pasar la ruta en cada respecti archivo JS
export const getHeader = async (path="pages/templates/header.html") => {

    try {

        let resp = await fetch(path);
        let text = await resp.text();

        if (!resp.ok) throw { status: resp.status, statusText: resp.statusText };

        d.querySelector(".header").outerHTML = text

    } catch (error) {

        console.log(error);
    }


}