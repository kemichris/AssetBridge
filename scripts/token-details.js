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


/* ////// TOKEN-DETAILS FORM VALIDATION ////// */
const howManyFractions = document.querySelector(".how-many-fractions");

// anchor tags 
const deatailsNextBtn = document.querySelector(".token-detail-btn");
const page4Next = document.querySelector(".page-4-next");

// input values
const tokenPrice = document.getElementById("token-price");
const numFractions = document.getElementById("no-fractions");
const fractionCheck = document.getElementById("fraction-check");

// error alerts
const priceError = document.querySelector(".token-price-alert");
const fractionError = document.querySelector(".fractions-alert");

// caliing the validation function 
deatailsNextBtn.addEventListener("click", validateDetails);
page4Next.addEventListener("click", validateDetails);


// displaying the checked box       
fractionCheck.addEventListener("input", ()=>{
    if (fractionCheck.checked) {
        howManyFractions.classList.remove("active")
    } else {
        howManyFractions.classList.add("active")
    }
})



// function to validate the details 
function validateDetails(event) {
    if (tokenPrice.value === "") {
        event.preventDefault();
        priceError.classList.remove("inactive");
    } else {
        priceError.classList.add("inactive");
    }

    if (fractionCheck.checked) {
        if (numFractions.value === "") {
            event.preventDefault();
            fractionError.classList.remove("inactive");
        } else {
            fractionError.classList.add("inactive");
        }
        
    }
}

