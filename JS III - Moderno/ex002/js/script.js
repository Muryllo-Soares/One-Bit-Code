import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipBoard.js";
import themeSwitcher from "./themeSwitcher.js";
import { handleButtonPress, handleClear, handleTyping } from "./keyHandlers.js";


document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click",handleButtonPress);
});

document.getElementById("clear").addEventListener("click",handleClear);
document.querySelector("#input").addEventListener("keydown", handleTyping)
document.getElementById("equal").addEventListener("click", calculate);
document.getElementById("copyToClipboard").addEventListener("click",copyToClipboard);
document.getElementById("themeSwitcher").addEventListener("click",themeSwitcher);
