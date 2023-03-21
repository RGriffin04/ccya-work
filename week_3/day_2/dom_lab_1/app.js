window.addEventListener("DOMContentLoaded", () => {

    const body = document.querySelector('body')

    const para = document.createElement("p");
    para.textContent = "hey i'm red!";
    para.classList.add('red')

    const h3 = document.createElement('h3');
    h3.textContent = "I'm a blue h3!"
    h3.classList.add('blue')

    const div = document.createElement('div');
    div.classList.add('black-border', 'pink-div')

    const h1 = document.createElement('h1');
    h1.textContent = "I'm in a div"

    const para2 = document.createElement("p");
    para2.textContent = "ME TOO!";

    body.appendChild(para)
    body.appendChild(h3)
    body.appendChild(div)

    div.appendChild(h1)
    div.appendChild(para2)

    let favFoods = ['chocolate', 'cheesecake', 'potatoes', 'beans']
    const newDiv = document.createElement('div')
    const newH1 = document.createElement('h1')
    newH1.textContent = 'My Favourite Foods'
    newDiv.appendChild(newH1)
    body.appendChild(newDiv)

    const favFoodsList = document.createElement('ul')
    newDiv.appendChild(favFoodsList)
    
    for(let food of favFoods){
        let listItem = document.createElement('li')
        listItem.textContent = food
        favFoodsList.appendChild(listItem)
    }
});