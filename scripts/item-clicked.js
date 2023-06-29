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
