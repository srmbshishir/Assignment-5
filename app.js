fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => displayMealCategory(data));

const displayMealCategory = meals => {
    const mealsDiv = document.getElementById('meals');
    meals.categories.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        //console.log(meal.strCategoryDescription);
        var description = meal.strCategoryDescription;
        description = description.replace("\r\n\r\n", "<br>");
        // console.log(description);
        //console.log(description);
        const mealInfo = `
            <img src="${meal.strCategoryThumb}" onclick="ShowDetails('${description}')" style="width: 300px; height: 250px;"/>
            <h3 onclick="ShowDetails('${description}')" class="meal-name" style="text-align: center; padding-top: 10px;">${meal.strCategory}</h3>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);



        //     <h3 class="meal-name">${meal.strCategory}</h3>
        //     <p>${meal.strCategoryDescription}</p>
    });
}

function Search() {
    const value = document.getElementById("search").value
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + value)
        .then(res => res.json())
        .then(data => displayMealSearch(data));

    const displayMealSearch = meals => {
        if (meals.meals == null) {
            const elements = document.getElementsByClassName('detail');
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
            const DetailsDiv = document.getElementById('details');
            const DetailDiv = document.createElement('div');
            DetailDiv.className = 'detail';
            const mealInfo = `
                        <h3 class="meal-details" style="text-align: center; padding-top: 10px;">No such item is available</h3>
                    `;
            DetailDiv.innerHTML = mealInfo;
            DetailsDiv.appendChild(DetailDiv);
        }
        else {
            const elements = document.getElementsByClassName('meal');
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
            const mealsDiv = document.getElementById('meals');
            meals.meals.forEach(meal => {
                const mealDiv = document.createElement('div');
                mealDiv.className = 'meal';
                const mealInfo = `
                    <img src="${meal.strMealThumb}" style="width: 300px; height: 250px;"/>
                    <h3 class="meal-name" style="text-align: center; padding-top: 10px;">${meal.strMeal}</h3>
                `;
                mealDiv.innerHTML = mealInfo;
                mealsDiv.appendChild(mealDiv);

                //     <h3 class="meal-name">${meal.strCategory}</h3>
                //     <p>${meal.strCategoryDescription}</p>
            });
        }
    }
}
function ShowCategory() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => displayMealCategory(data));

    const displayMealCategory = meals => {
        const elements = document.getElementsByClassName('meal');
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        const mealsDiv = document.getElementById('meals');
        meals.categories.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.className = 'meal';
            // console.log(meal.strCategoryDescription);
            var description = meal.strCategoryDescription;
            description = description.replace("\r\n\r\n", "<br>");
            // console.log(description);
            //console.log(description);
            const mealInfo = `
                <img src="${meal.strCategoryThumb}" onclick="ShowDetails('${description}')" style="width: 300px; height: 250px;"/>
                <h3 onclick="ShowDetails('${description}')" class="meal-name" style="text-align: center; padding-top: 10px;">${meal.strCategory}</h3>
            `;
            mealDiv.innerHTML = mealInfo;
            mealsDiv.appendChild(mealDiv);

            //     <h3 class="meal-name">${meal.strCategory}</h3>
            //     <p>${meal.strCategoryDescription}</p>
        });
    }
}

function ShowDetails(details) {
    console.log(details);
    const elements = document.getElementsByClassName('detail');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    const DetailsDiv = document.getElementById('details');
    const DetailDiv = document.createElement('div');
    DetailDiv.className = 'detail';
    const mealInfo = `
                <h3 class="meal-details" style="text-align: center; padding-top: 10px;">${details}</h3>
            `;
    DetailDiv.innerHTML = mealInfo;
    DetailsDiv.appendChild(DetailDiv);

}
