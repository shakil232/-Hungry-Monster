
// displayMeals
const displayMeals = () => {
    const searchText = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => getDisplay(data.meals))
}

const getDisplay = meals => {
    const displayContainer = document.getElementById('display-container');
    displayContainer.innerHTML = ''
    meals.forEach(items => {
        // console.log(items);
        const itemDiv = document.createElement('div');
        itemDiv.className = `meal-items`
        itemDiv.innerHTML = `
       <img onclick=" displayIngredient(${items.idMeal})" src="${items.strMealThumb}">
       <p class="item-name"> ${items.strMeal}</p>
       
       `
        displayContainer.appendChild(itemDiv)
    });
}

// displayIngredient
const displayIngredient = (idMeal) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => getDisplayIngredient(data.meals[0]))
}
const getDisplayIngredient = ingredient => {
    const displayIngredient = document.getElementById('display-ingredient');
    displayIngredient.innerHTML = ''
    displayIngredient.innerHTML = `
            <img class="ingredient-img" src="${ingredient.strMealThumb}">
            <p> ${ingredient.strIngredient1}</p>
            <p> ${ingredient.strIngredient2}</p>
            <p> ${ingredient.strIngredient3}</p>
            <p> ${ingredient.strIngredient4}</p>
            <p> ${ingredient.strIngredient5}</p>
            <p> ${ingredient.strIngredient6}</p>
            <p> ${ingredient.strIngredient7}</p>
            <p> ${ingredient.strIngredient8}</p>
            <p> ${ingredient.strIngredient9}</p>
            <p> ${ingredient.strIngredient10}</p>

                 `
}
