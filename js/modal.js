function initModal() {
  const modals = document.querySelectorAll(".modal[datatype='modal']");
  modals.forEach(modal => {

    const wrapper = modal.querySelector(".modal-layer[datatype='modalWrapperLayer']");
    wrapper.addEventListener("click", (e) => {
      !modal.classList.contains("hidden") && modal.classList.add("hidden")
    })
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  initModal();
});