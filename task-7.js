let sizeControle = document.getElementById("font-size-control");
 let text = document.getElementById("text");

 sizeControle.addEventListener('input', function () {
  text.style.fontSize = sizeControle.value+'px';
});