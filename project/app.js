document.addEventListener('DOMContentLoaded', () => {

 const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
  });


const handleFormSubmit = function (event) {
    event.preventDefault();
    console.log(event);
    const resultList = document.querySelector('#results');
    const newListDestination = document.createElement("li")
    newListDestination.textContent = this.place.value
    resultList.appendChild(newListDestination)
};