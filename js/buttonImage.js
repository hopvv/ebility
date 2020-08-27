function initButtonImage() {
  const items = document.querySelectorAll(".button-image[datatype='buttonImage']");
  items.forEach(item => {
    const input = item.getElementsByClassName("input-image")[0]

    item.addEventListener('click', function (event) {
      event.stopPropagation();
      // event.preventDefault();
      input.click();
    })
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  initButtonImage();
});