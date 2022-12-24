
const closeModalButton = document.querySelector('.modal-close-button');
const closeModalButtonCSS = document.querySelector('.modal-close-button-css');
const uploadModal = document.querySelector('#upload-modal');
const openModalButton = document.querySelector('.modal-open-button');
const formButton = document.querySelector('.file-form .button');
const billTable = document.querySelector('.full-help-modal');
openModalButton.addEventListener('click', () => uploadModal.showModal());
closeModalButton.addEventListener('click', () => uploadModal.close(uploadModal));

const moreInfoButton = document.querySelectorAll('.more-info-button');

for (let i = 0; i < moreInfoButton.length; ++i) {
    moreInfoButton[i].addEventListener('click', () => {
        billTable.classList.toggle('open');
    })
}

closeModalButtonCSS.addEventListener('click', () =>  billTable.classList.toggle('open'))