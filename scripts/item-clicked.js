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


/* ////// IMAGE SECTIONS ////// */
const imageView = document.querySelectorAll(".img-sec");
const infoImage = document.querySelector(".info-image");

let imgSrc0 = imageView[0].src
let imgSrc1 = imageView[1].src
let imgSrc2 = imageView[2].src
let imgSrc3 = imageView[3].src

imageView[0].addEventListener("click", ()=> {
    imageView[0].classList.add("active")
    imageView[1].classList.remove("active")
    imageView[2].classList.remove("active")
    imageView[3].classList.remove("active")
    infoImage.src = imgSrc0;
});
imageView[1].addEventListener("click", ()=> {
    imageView[1].classList.add("active")
    imageView[0].classList.remove("active")
    imageView[2].classList.remove("active")
    imageView[3].classList.remove("active")
    infoImage.src = imgSrc1;
});
imageView[2].addEventListener("click", ()=> {
    imageView[2].classList.add("active")
    imageView[1].classList.remove("active")
    imageView[0].classList.remove("active")
    imageView[3].classList.remove("active")
    infoImage.src = imgSrc2;
});
imageView[3].addEventListener("click", ()=> {
    imageView[3].classList.add("active")
    imageView[1].classList.remove("active")
    imageView[2].classList.remove("active")
    imageView[0].classList.remove("active")
    infoImage.src = imgSrc3;
});
