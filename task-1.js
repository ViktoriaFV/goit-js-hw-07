const elementList = document.querySelectorAll('.item');
console.log(`В списке ${elementList.length} категории.`);
const categoriesList = elementList.forEach(element =>  
console.log(`Категория: ${element.querySelector("h2").textContent} 
Количество: ${element.querySelector("ul").children.length}`).join("\n"))