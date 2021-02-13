const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
   ];  
   
  var ingredientsGet = document.getElementById("ingredients");
  const ApendElement = ingredients.forEach (ingredient =>{
  let element = document.createElement("li");
  element.innerHTML = ingredient; 
  ingredientsGet.append(element);
  });