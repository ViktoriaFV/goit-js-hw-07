const button = {
  add: document.querySelector("[data-action='decrement']"),
  sub: document.querySelector("[data-action='increment']"),
  span: document.querySelector("#value"), 
};
let counterValue = 0;
const decrement = () =>{
counterValue -=1;
button.span.textContent = counterValue;
};
const increment = () =>{
counterValue +=1;
button.span.textContent = counterValue;
};
button.add.addEventListener('click', decrement);
button.sub.addEventListener('click', increment);
