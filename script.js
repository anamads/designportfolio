/*var try = document.getElementsByClass('bold');

// Add a mouseover event listener
try.addEventListener('mouseover', () => {
  // Change the button's background color
  try.style.color = 'blue';
});
*/

const press = document.getElementById("jsbut");

let pressButton = function () {
  press.style.backgroundColor = "#000000";
  press.style.color = "#FFFFFF";
};

press.addEventListener("mousedown", pressButton);

const audit = document.getElementById("jsaudit");
const auditInfo = document.getElementById("info");

let open = function () {
  auditInfo.style.display = "grid";
};

audit.addEventListener("click", open);
/*
let square = document.getElementsByClassName("square4");

let hover = function () {
  square.style.backgroundImage = "none";
};

square.addEventListener("mouseover", hover);*/
