const d = document;

export const markTab = (nameTab = "home") => {

    let $tabCurrent;
    const $tabs = d.querySelectorAll(".menu__title");
    // console.log($tabs);

    $tabs.forEach($tab => {
        if ($tab.dataset.name === nameTab) {
            $tabCurrent = $tab.closest(".menu__tab");
        }
    });

    $tabCurrent.classList.add("tab-mark");

}

export class Tab {

    markTab(tabName, tabsClass, classToAdd, callback = () => { }) {

        let $tabCurrent;
        const $tabs = d.querySelectorAll(`.${tabsClass}`);

        $tabs.forEach($tab => {
            if ($tab.dataset.name === tabName) {
                $tabCurrent = $tab;
            }
            $tab.classList.remove(classToAdd);
        });

        $tabCurrent.classList.add(classToAdd);

        callback();

    }

}