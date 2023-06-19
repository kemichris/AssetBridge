////////// DISPLAYING SELECTED FILES ///////////
const fileValue = document.getElementById("select-file");
const fileContainer = document.querySelector(".display-file");
const uploadFileBtn = document.getElementById("upload-file");
const selectfileLabel = document.getElementById("label-file");
const selectSpan = document.querySelector(".select-span");
const ProofNextBtn = document.querySelector(".proof-next-btn");
const addNewDoc = document.querySelector(".add-new-doc");
const uploadNewDoc = document.querySelector(".upload-new-doc");


uploadFileBtn.addEventListener("click", ()=>{
    createNewFile()
    uploadFileBtn.classList.add("active");
    selectfileLabel.classList.add("active")
    selectSpan.classList.add("active");
    ProofNextBtn.classList.remove("active");
    addNewDoc.classList.remove("active");
    uploadNewDoc.classList.remove("active")

});

uploadNewDoc.addEventListener("click", createNewFile);


// function to create the file display container
function createNewFile() {
    const fileNames = fileValue.files;

    for (let i = 0; i < fileNames.length; i++) {
        
        const file = fileNames[i];
        const fileName= file.name;
        const createdFile = document.createElement("div");
        createdFile.classList.add("created-file");
        fileContainer.appendChild(createdFile);

        const fileImageName = document.createElement("div");
        fileImageName.classList.add("file-image-name")
        createdFile.appendChild(fileImageName);

        const fileImage = document.createElement("img");
        fileImage.setAttribute("src", "assets/icons/file-icon.png");
        fileImageName.appendChild(fileImage);

        const fileP = document.createElement("p")
        fileP.innerHTML = fileName;
        fileImageName.appendChild(fileP);

        const deleteFile = document.createElement("img");
        deleteFile.setAttribute("src", "assets/icons/delete-icon.png");
        deleteFile.classList.add("del-file");
        createdFile.appendChild(deleteFile);

        deleteFile.addEventListener("click", ()=> {
            // Remove the corresponding created file element
            fileContainer.removeChild(createdFile);
          });
    }
    
}


////////// DELETING FILES ///////////
const delFileBtn = document.querySelectorAll(".del-file");
const createdfileEl = document.querySelectorAll(".created-file");

// delFileBtn[0].addEventListener("click", ()=>{
//     createdfileEl[0].remove;
// })


// delFileBtn.forEach((delFileBtns)=>{
//     delFileBtns.addEventListener("click", ()=>{
//         for (let i = 0; i < createdfileEl.length; i++) {
//             Array.from(delFileBtn).forEach((div, index)=>{
//                  if (div = createdfileEl[i]) {
//                         createdfileEl[i].remove;
//                 }
//             });
//         }
//     })
// })








/*function createNewFile() {
    const fileName = fileValue.files[0];
    if (fileName) {
        const fileInput = fileName.name
        const createdFile = document.createElement("div");
        createdFile.classList.add("created-file");
        fileContainer.appendChild(createdFile);

        const fileImageName = document.createElement("div");
        fileImageName.classList.add("file-image-name")
        createdFile.appendChild(fileImageName);

        const fileImage = document.createElement("img");
        fileImage.setAttribute("src", "assets/icons/file-icon.png");
        fileImageName.appendChild(fileImage);

        const fileP = document.createElement("p")
        fileP.innerHTML = fileInput;
        fileImageName.appendChild(fileP);

        const deleteFile = document.createElement("img");
        deleteFile.setAttribute("src", "assets/icons/delete-icon.png");
        deleteFile.classList.add("del-file");
        createdFile.appendChild(deleteFile);
    } else {
        alert("No file selected")
    }
}*/