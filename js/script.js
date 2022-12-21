const browseButton = document.querySelector('.button');
const fileDropArea = document.querySelector('.file-drop-wrapper');
const fileElem = document.getElementById('fileElem');


function browseFiles() {
    fileElem.click();
}

fileDropArea.addEventListener('click', browseFiles)