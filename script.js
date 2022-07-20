'use strict';

const tabValues = document.querySelectorAll('[data-tab-value]');
const tabContent = document.querySelectorAll('[data-tab]');

tabValues.forEach(tab => {
    tab.addEventListener("click", () => {
        
        // for destination page only
        for(let k=0; k<tabValues.length; k++){
            tabValues[k].parentElement.classList.remove("active");
        }

        const parent = tab.parentElement;
        parent.classList.add("active");

        // for all pages
        for(let i=0; i<tabValues.length; i++){
            tabValues[i].setAttribute("aria-selected", "false");
        }

        for(let j=0; j<tabContent.length; j++){
            tabContent[j].setAttribute("hidden","");
            if(tabContent[j].dataset.tab == tab.dataset.tabValue){
                tabContent[j].removeAttribute("hidden");
            }
        }

        tab.setAttribute("aria-selected", "true");
    })
})
