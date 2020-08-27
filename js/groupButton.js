function initGroupButton() {
  const items = document.querySelectorAll("*[datatype='groupButton']");
  items.forEach(group => {
    const buttons = group.querySelectorAll("*[datatype='button']");
    buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
        !this.classList.contains("active") && this.classList.add("active")
        buttons.forEach((b, idx) => {
          if (idx !== index) {
            b.classList.remove("active")
          }
        })
      })
    })
  })
}


window.addEventListener('DOMContentLoaded', (event) => {
  initGroupButton();
});