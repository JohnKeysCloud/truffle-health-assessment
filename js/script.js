const billTable = document.querySelector('.full-help-modal');
const closeModalButton = document.querySelector('.modal-close-button');
const closeModalButtonCSS = document.querySelector('.modal-close-button-css');
const moreInfoButton = document.querySelectorAll('.more-info-button');
const openModalButton = document.querySelector('.modal-open-button');
const uploadModal = document.querySelector('#upload-modal');

[...moreInfoButton].forEach(button => button.addEventListener('click', () => billTable.classList.toggle('open')));
closeModalButton.addEventListener('click', () => uploadModal.close(uploadModal));
closeModalButtonCSS.addEventListener('click', () => billTable.classList.toggle('open'));
openModalButton.addEventListener('click', () => uploadModal.showModal());