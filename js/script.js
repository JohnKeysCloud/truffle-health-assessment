const billTable = document.querySelector('.full-help-modal');
const closeModalButton = document.querySelector('.modal-close-button');
const closeModalButtonCSS = document.querySelector('.modal-close-button-css');
const formButton = document.querySelector('.file-form .button');
const moreInfoButton = document.querySelectorAll('.more-info-button');
const openModalButton = document.querySelector('.modal-open-button');
const uploadModal = document.querySelector('#upload-modal');
openModalButton.addEventListener('click', () => uploadModal.showModal());
closeModalButton.addEventListener('click', () => uploadModal.close(uploadModal));

for (let i = 0; i < moreInfoButton.length; ++i) {
    moreInfoButton[i].addEventListener('click', () => {
        billTable.classList.toggle('open');
    })
}

closeModalButtonCSS.addEventListener('click', () =>  billTable.classList.toggle('open'))