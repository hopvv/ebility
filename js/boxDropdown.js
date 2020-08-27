function initBoxDropdown() {
  const items = document.querySelectorAll(".box-dropdown[datatype='boxDropdown']");
  items.forEach(box => {
    const buttonToggle = box.getElementsByClassName("box-dropdown__toggle-button")[0]
    const contents = box.querySelectorAll(".box-dropdown-content");
    const shortContents = box.querySelectorAll(".box-dropdown-short-content");
    const contentDividers = box.querySelectorAll(".box-dropdown-content-divider");
    function showContent() {
      contents.forEach(content => {
        content && content.classList.contains("hidden") && content.classList.remove("hidden")
      })
      contentDividers.forEach(contentDivider => {
        contentDivider && contentDivider.classList.contains("hidden") && contentDivider.classList.remove("hidden")
      })
      shortContents.forEach(shortContent => {
        shortContent && shortContent.classList.contains("short-tow-line") && shortContent.classList.remove("short-tow-line")
      })
    }

    function hideContent() {
      contents.forEach(content => {
        content && !content.classList.contains("hidden") && content.classList.add("hidden")
      })
      contentDividers.forEach(contentDivider => {
        contentDivider && !contentDivider.classList.contains("hidden") && contentDivider.classList.add("hidden")
      })
      shortContents.forEach(shortContent => {
        shortContent && !shortContent.classList.contains("short-tow-line") && shortContent.classList.add("short-tow-line")
      })
    }

    buttonToggle.addEventListener('click', function (e) {
      let classRotate = "rotate-180";
      if (this.dataset.rotate === "rotate90") {
        classRotate = "rotate-90";
      }
      if (!this.classList.contains(classRotate)) {
        this.classList.add(classRotate)
        showContent();
      } else {
        this.classList.remove(classRotate)
        hideContent();
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  initBoxDropdown();
});