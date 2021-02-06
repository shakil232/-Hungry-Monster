

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
     .then(res => res.json())
     .then(data => displayMealsItem(data.meals));

const displayMealsItem = Meals => {

     const MealsDiv = document.getElementById('display-items');
     Meals.forEach(Items => {

          const ItemsDiv = document.createElement('div');
          ItemsDiv.className = `Items`
          const ItemsList = `
        <img class="meal-images" src="${Items.strMealThumb}">
        <p class="meal-Name"> ${Items.strMeal}</p>
        
        `
          ItemsDiv.innerHTML = ItemsList;
          MealsDiv.appendChild(ItemsDiv)
     });
}


