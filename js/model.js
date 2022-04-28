const refs = {
    openModalBtn: document.querySelector("[data-open-model]"),
    closeModalBtn: document.querySelector("[data-close-model]"),
    backdrop: document.querySelector("[data-backdrop]"),
};
refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
}
function logBackdropClick() {
    console.log ("Model")
}