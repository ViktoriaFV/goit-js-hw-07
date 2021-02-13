const button = {
    add: document.querySelector("[data-action='decrement']"),
     span: document.querySelector("#value"),
    sub: document.querySelector("[data-action='increment']"), 
  };
  let counterValue = 0;
  const decrement = () =>{
  counterValue -=1;
  span.textContent = counterValue;
  };
  const increment = () =>{
  counterValue +=1;
  span.textContent = counterValue;
  };
  button.span.addEventListener("click", decrement);
  button.span.addEventListener("click", increment);