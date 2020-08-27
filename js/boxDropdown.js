function initBoxDropdown() {
  const items = document.querySelectorAll(".box-dropdown[datatype='boxDropdown']");
  items.forEach(box => {
    const buttonToggle = box.getElementsByClassName("box-dropdown__toggle-button")[0]
    const content = box.getElementsByClassName("box-dropdown-content")[0];
    const contentDivider = box.getElementsByClassName("box-dropdown-content-divider")[0];
    function showContent() {
      content && content.classList.contains("hidden") && content.classList.remove("hidden")
      contentDivider && contentDivider.classList.contains("hidden") && contentDivider.classList.remove("hidden")
    }

    function hideContent() {
      content && !content.classList.contains("hidden") && content.classList.add("hidden")
      contentDivider && !contentDivider.classList.contains("hidden") && contentDivider.classList.add("hidden")
    }

    buttonToggle.addEventListener('click', function (e) {
      if (!this.classList.contains("rotate-180")) {
        this.classList.add("rotate-180")
        showContent();
      } else {
        this.classList.remove("rotate-180")
        hideContent();
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  initBoxDropdown();
});