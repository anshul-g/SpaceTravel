'use strict';

// get all the tabs
const tabValues = document.querySelectorAll('[data-tab-value]');

// get all the elements that are going to be interactive
const tabContent = document.querySelectorAll('[data-tab]');


tabValues.forEach(tab => {
    //for each tab added an event listener
    tab.addEventListener("click", () => {
        
        // for destination page only
        // remove class "active" from all the parent nodes of the tabs
        for(let k=0; k<tabValues.length; k++){
            tabValues[k].parentElement.classList.remove("active");
        }

        // then add the active class only to the current tab
        const parent = tab.parentElement;
        parent.classList.add("active");

        // for all pages
        // set aria-selected = false for all the tabs
        for(let i=0; i<tabValues.length; i++){
            tabValues[i].setAttribute("aria-selected", "false");
        }

        // add hidden attribute to all the interactive elements
        // except for those that have the data-tab = data-tab-value of the current tab 
        for(let j=0; j<tabContent.length; j++){
            tabContent[j].setAttribute("hidden","");
            if(tabContent[j].dataset.tab == tab.dataset.tabValue){
                tabContent[j].removeAttribute("hidden");
            }
        }

        // finally set aria-selected to true for the current tab
        // so that it is highlighted
        tab.setAttribute("aria-selected", "true");
    })
})

// Changing to landscape images on tech page
// const currentWidth = window.innerWidth;
// const targetImage = document.querySelector(".mobile");
// const tabletScreenSize = 810;

// function changeImage(){
//     if(currentWidth <= tabletScreenSize){
//         targetImage.style.display = "block";
//     } else{
//         targetImage.style.display = "none";
//     }
// }

// changeImage();

//Mobile navigation
const btnMenuOpen = document.querySelector(".menu-open");
const btnMenuClose = document.querySelector(".menu-close");
const navEl = document.querySelector(".nav");


btnMenuOpen.addEventListener("click", function() {
    btnMenuClose.classList.toggle("mobile-nav-open");
    navEl.classList.toggle("mobile-nav-open");
})

btnMenuClose.addEventListener("click", function(){
    // btnMenuClose.classList.toggle("mobile-nav-open");
    navEl.classList.toggle("mobile-nav-open");
})


