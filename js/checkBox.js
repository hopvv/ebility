
function initCheckBox() {
  const items = document.querySelectorAll(".check-box[datatype='checkBox']");
  items.forEach(item => {
    const iconTick = item.getElementsByClassName("--check-box__tick")[0]
    const iconUnTick = item.getElementsByClassName("--check-box__un-tick")[0]

    iconTick && iconTick.addEventListener('click', function() {
      if (!this.classList.contains("hidden")) {
        this.classList.add("hidden")
      }
      if (iconUnTick.classList) {
        iconUnTick.classList.remove("hidden")
      }
      item.classList.contains("selected") && item.classList.remove("selected")
    })
    iconUnTick && iconUnTick.addEventListener('click', function() {
      if (!this.classList.contains("hidden")) {
        this.classList.add("hidden")
      }
      if (iconTick.classList) {
        iconTick.classList.remove("hidden")
      }
      !item.classList.contains("selected") &&  item.classList.add("selected")
    })

    // item.addEventListener('click', function (event) {
    //   event.stopPropagation();
    //   event.preventDefault();
    //   if (item.classList.contains("selected")) {
    //     item.classList.remove("selected")
    //     !iconTick.classList.contains("hidden") && iconTick.classList.add("hidden")
    //     iconUnTick.classList.remove("hidden")
    //   } else {
    //     item.classList.add("selected")
    //     iconTick.classList.remove("hidden")
    //     !iconTick.classList.contains("hidden") && iconUnTick.classList.add("hidden")
    //   }
    // })
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  initCheckBox();
});