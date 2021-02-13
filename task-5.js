let inputName = document.getElementById("name-input");
 let outputName = document.getElementById("name-output");
 
 inputName.addEventListener ('input', e => {
    if (inputName.value === '') {
        outputName.textContent = 'незнакомец';
     } else{
     outputName.textContent = e.target.value;
     }
   } );