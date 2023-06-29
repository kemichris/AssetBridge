/* ////// NAV BAR MENU DROPDOWN ////// */
const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const sideBarMenu = document.querySelector(".sidebar-menu")

// opening the nav menu 
openNav.addEventListener("click", ()=> {
    sideBarMenu.classList.add("active");
    openNav.classList.add("inactive");
    closeNav.classList.remove("inactive");
});

// closing the nav menu 
closeNav.addEventListener("click", ()=> {
    sideBarMenu.classList.remove("active");
    closeNav.classList.add("inactive");
    openNav.classList.remove("inactive");
});




/* ////// FORM VALIDATION ////// */
// anchor tags 
const nextBtn = document.querySelector(".next-btn");
const page2Next = document.querySelector(".page-2-next");

// input values
const assetName = document.getElementById("asset-name");
const assetType = document.getElementById("asset-type");
const assetDesc = document.getElementById("desc");

// error alerts
const nameError = document.querySelector(".asset-name-alert");
const typeError = document.querySelector(".asset-type-alert");
const DescError = document.querySelector(".description-alert");


nextBtn.addEventListener("click", validateForm);
page2Next.addEventListener("click", validateForm);



// function to validate the form 
function validateForm(event) {
    if (assetName.value === "") {
        event.preventDefault();
        nameError.classList.remove("inactive");
    } else {
        nameError.classList.add("inactive");
    }

    if ( assetType.value === "") {
        event.preventDefault();
        typeError.classList.remove("inactive");
    } else {
        typeError.classList.add("inactive");
    }

    if (assetDesc.value === "") {
        event.preventDefault();
        DescError.classList.remove("inactive");
    } else {
        DescError.classList.add("inactive")
    }
}

