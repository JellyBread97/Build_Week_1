function proceed() {
  let checkbox = document.getElementById("checkbox");
  let proceed = document.getElementById("button");
  proceed.addEventListener("click", function (e) {
    if (checkbox.checked === false) {
      alert("You have to promise first!");
    } else if (checkbox.checked === true) {
      location.href = ""; // question page .html here
    }
  });
}

window.onload = function (e) {
  proceed();
};
