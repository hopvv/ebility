
function initReplyItem() {
  const items = document.querySelectorAll(".reply-item[datatype='replyItem']");
  items.forEach(box => {
    const buttonWarnGray = box.getElementsByClassName("--icon-gray")[0]
    const buttonWarnRed = box.getElementsByClassName("--icon-red")[0]

    buttonWarnGray && buttonWarnGray.addEventListener('click', function() {
      if (!this.classList.contains("hidden")) {
        this.classList.add("hidden")
      }
      if (buttonWarnRed.classList) {
        buttonWarnRed.classList.remove("hidden")
      }
    })
    buttonWarnGray && buttonWarnRed.addEventListener('click', function() {
      if (!this.classList.contains("hidden")) {
        this.classList.add("hidden")
      }
      if (buttonWarnGray.classList) {
        buttonWarnGray.classList.remove("hidden")
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  initReplyItem();
});