////////// DISPLAYING SELECTED FILES ///////////
const fileValue = document.getElementById("select-file");
const fileContainer = document.querySelector(".display-file");
const uploadFileBtn = document.getElementById("upload-file");
const selectfileLabel = document.getElementById("label-file");
const selectSpan = document.querySelector(".select-span");
const ProofNextBtn = document.querySelector(".proof-next-btn");
const addNewDoc = document.querySelector(".add-new-doc");
const uploadNewDoc = document.querySelector(".upload-new-doc");
const dropArea = document.getElementById("label-file");


// Add event listeners for dragover, dragleave, and drop events
dropArea.addEventListener('dragover', handleDragOver);
dropArea.addEventListener('dragleave', handleDragLeave);
dropArea.addEventListener('drop', handleDrop);

addNewDoc.addEventListener('dragover', handleDragOver);
addNewDoc.addEventListener('dragleave', handleDragLeave);
addNewDoc.addEventListener('drop', handleDrop);

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

// Add event listeners for dragover and drop events
fileValue.addEventListener('dragover', handleDragOver);
fileValue.addEventListener('drop', handleDrop);


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

        // Deleting selected files
        deleteFile.addEventListener("click", ()=> {
            fileContainer.removeChild(createdFile);
          });
    }
    
}

// Function to handle the dragover event
function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    dropArea.classList.add('dragover');
    addNewDoc.classList.add("dragover");
}

// Function to handle the dragleave event
function handleDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    dropArea.classList.remove('dragover');
    addNewDoc.classList.add("dragover");
}

  // Function to handle the drop event
function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    dropArea.classList.remove('dragover');
    addNewDoc.classList.add("dragover");
    
    // Get the files from the event
    const files = event.dataTransfer.files;
    
    // Assign the files to the file input
    fileValue.files = files;
}



  



