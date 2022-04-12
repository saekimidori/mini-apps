document.getElementById('random').addEventListener('click', randomMeal)

function randomMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.meals[0])
        document.querySelector('h2').innerText = data.meals[0].strMeal
        document.querySelector('img').src = data.meals[0].strMealThumb
        document.querySelector('h3').innerText = data.meals[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}