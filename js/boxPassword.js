

function initBoxPassword() {

  function setEventInput(input) {
    if (input) {
      if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text")
      } else {
        input.setAttribute("type", "password")
      }
      // input.focus();
    }
  }

  const items = document.querySelectorAll(".box-input[datatype='boxPassword']");
  items.forEach(box => {
    const iconShow = box.getElementsByClassName("--icon-show")[0];
    const iconHide = box.getElementsByClassName("--icon-hide")[0];
    const input = box.querySelector(".box-input__input")

    iconShow.addEventListener("click", function() {
      setEventInput(input);
      if (!this.classList.contains("hidden")) {
        this.classList.add("hidden")
      }
      if (iconHide.classList) {
        iconHide.classList.remove("hidden")
      }
    })
    iconHide.addEventListener("click", function() {
      setEventInput(input);
      if (!this.classList.contains("hidden")) {
        this.classList.add("hidden")
      }
      if (iconShow.classList) {
        iconShow.classList.remove("hidden")
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  initBoxPassword();
});

