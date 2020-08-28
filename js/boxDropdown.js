function initBoxDropdown() {
  const items = document.querySelectorAll(".box-dropdown[datatype='boxDropdown']");
  items.forEach(box => {
    const buttonToggle = box.getElementsByClassName("box-dropdown__toggle-button")[0]

    if (!buttonToggle) console.error("Can not init Box Dropdown cause by no any toggle-button")

    const itemClickable = buttonToggle.parentElement;

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
        shortContent && shortContent.classList.contains("short-one-line-three-dot") && shortContent.classList.remove("short-one-line-three-dot")
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
        shortContent && !shortContent.classList.contains("short-one-line-three-dot") && shortContent.classList.add("short-one-line-three-dot")
      })
    }

    const itemEventClick = itemClickable.classList.contains("item-action") ? itemClickable : buttonToggle;

    itemEventClick.addEventListener('click', function (e) {
      let classRotate = "rotate-180";
      if (buttonToggle.dataset.rotate === "rotate90") {
        classRotate = "rotate-90";
      }
      if (!buttonToggle.classList.contains(classRotate)) {
        buttonToggle.classList.add(classRotate)
        showContent();
      } else {
        buttonToggle.classList.remove(classRotate)
        hideContent();
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  initBoxDropdown();
});