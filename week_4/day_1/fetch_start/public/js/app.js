

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      fetchDog()
    })
});

const fetchDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(Response => Response.json())
  .then(data =>{
    const image = document.querySelector('img');
    image.src = data.message
  }) 
}