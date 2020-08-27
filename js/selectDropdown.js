
function initSelectDropdown() {
  const items = document.querySelectorAll("*[datatype='selectDropdown']");
  items.forEach(item => {
    const buttonToggle = item.getElementsByClassName("--toggle-dropdown-button")[0];
    const dropdownList = item.querySelector(".box-input__dropdown")
    const input = item.querySelector(".box-input__input")
    const options = item.querySelectorAll(".box-input__dropdown-option")

    buttonToggle && buttonToggle.addEventListener('click', function() {
      if (dropdownList) {
        if (dropdownList.classList.contains("hidden")) {
          dropdownList.classList.remove("hidden")
        } else {
          dropdownList.classList.add("hidden")
        }
      }
    })

    options.forEach(option => {
      option.addEventListener('click', function() {
        input.value = option.dataset.option;
        !dropdownList.classList.contains("hidden") && dropdownList.classList.add("hidden")
      })
    })

    document.addEventListener("click", (evt) => {
      // const flyoutElement = document.getElementById("flyout-example");
      let targetElement = evt.target; // clicked element

      do {
        if (targetElement == item) {
          // This is a click inside. Do nothing, just return.
          // console.log("click inside")
          return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);

      // This is a click outside.
      !dropdownList.classList.contains("hidden") && dropdownList.classList.add("hidden")
    });
  })

}

window.addEventListener('DOMContentLoaded', (event) => {
  initSelectDropdown();
});