
const closeModalButton = document.querySelector('.modal-close-button');
const uploadModal = document.querySelector('#upload-modal');
const openModalButton = document.querySelector('.modal-open-button');
const formButton = document.querySelector('.file-form .button');
openModalButton.addEventListener('click', () => uploadModal.showModal());
closeModalButton.addEventListener('click', () => uploadModal.close(uploadModal));

const