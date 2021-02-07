


// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
//      .then(res => res.json())
//      .then(data => displayMealsItem(data.meals));

// const displayMealsItem = Meals => {

//      const MealsDiv = document.getElementById('display-items');
//      Meals.forEach(Items => {

//           const ItemsDiv = document.createElement('div');
//           ItemsDiv.className = `Items `
//           const ItemsList = `
//         <img class="meal-images" src="${Items.strMealThumb}">
//         <p class="meal-Name"> ${Items.strMeal}</p>

//         `
//           ItemsDiv.innerHTML = ItemsList;
//           MealsDiv.appendChild(ItemsDiv)
//      });
// }

const searchButton = document.getElementById('search-button').addEventListener('click', function () {
     const searchInput = document.getElementById('search-input').Value = 
          
     fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
               .then(res => res.json())
               .then(data => displayMealsItem(data.meals));

     const displayMealsItem = Meals => {

          const MealsDiv = document.getElementById('display-items');
          Meals.forEach(Items => {

               const ItemsDiv = document.createElement('div');
               ItemsDiv.className = `Items `
               const ItemsList = `
            <img class="meal-images" src="${Items.strMealThumb}">
            <p class="meal-Name"> ${Items.strMeal}</p>
            
            `
               ItemsDiv.innerHTML = ItemsList;
               MealsDiv.appendChild(ItemsDiv)
          }); fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
     }
})

// const displayMealItems = items =>{
//      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
//      .then(res => res.json())
//      .then(data => displayMealItems(data.meals));

// }
// const searchButton = document.getElementById('search-button').addEventListener('click', MealsInput => {
//      const searchInput = document.getElementById('search-input').Value = displayMealItems();
//      console.log(searchInput)
     
   
//      // const detailsMeals = Meals => {

//      //                const MealsDiv = document.getElementById('display-items');
//      //                Meals.forEach(Items => {
          
//      //                     const ItemsDiv = document.createElement('div');
//      //                     ItemsDiv.className = `Items `
//      //                     const ItemsList = `
//      //                  <img class="meal-images" src="${Items.strMealThumb}">
//      //                  <p class="meal-Name"> ${Items.strMeal}</p>
                      
//      //                  `
//      //                     ItemsDiv.innerHTML = ItemsList;
//      //                     MealsDiv.appendChild(ItemsDiv)
//      //                });
//      //           }
     
// }    
// )

