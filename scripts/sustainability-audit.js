/* ////// SUSTAINABILITY AUDIT FORM VALIDATION ////// */
const howDoesSpan = document.querySelector(".how-does");
const example = document.querySelector(".example");

// anchor tags 
const deatailsNextBtn = document.querySelector(".sustainability-btn");

// input values
const branch = document.getElementById("select-branch");
const howText = document.getElementById("how-text");
const exampleText = document.getElementById("example-text");

// error alerts
const branchError = document.querySelector(".branch-alert");
const howError = document.querySelector(".how-alert");
const exampleError = document.querySelector(".example-alert");

// caliing the validation function 
deatailsNextBtn.addEventListener("click", validateSustainability);


branch.addEventListener("change", ()=> {
    let selectedOption = branch.options[branch.selectedIndex];
    let selectedValue = selectedOption.value
    
    howDoesSpan.innerHTML = `How does your asset promote affordable and ${selectedValue} solutions`;
    example.innerHTML = `Examples of positive impacts your asset has made towards ${selectedValue}`;
})


// function to validate sustainability form 
function validateSustainability(event) {
    if (branch.value === "") {
        event.preventDefault();
        branchError.classList.remove("inactive");
    } else {
        branchError.classList.add("inactive");
    }

    if (howText.value === "") {
        event.preventDefault();
        howError.classList.remove("inactive");
    } else {
        howError.classList.add("inactive");
    }

    if (exampleText.value === "") {
        event.preventDefault();
        exampleError.classList.remove("inactive");
    } else {
        exampleError.classList.add("inactive");
    }
}

