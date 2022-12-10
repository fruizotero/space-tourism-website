const d = document;


export const menuActions = () => {

    d.addEventListener("click", e => {


        // console.log(e.target);

        if (e.target.matches(".menu__hamburger") ||
            e.target.matches(".menu__hamburger *")) {
            d.querySelector(".menu").classList.add("show-menu");
        }

        if (e.target.matches(".menu__close") ||
            e.target.matches(".menu__close *")) {
            d.querySelector(".menu").classList.remove("show-menu");

        }

    });

}


