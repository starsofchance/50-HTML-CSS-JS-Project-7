const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
// addEventListener has two parameters: event handler(keyup means whatever we type)
textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
