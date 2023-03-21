document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

  const textInput = document.querySelector('#input')
  textInput.addEventListener('input', handleKeyboard)

  const select = document.querySelector('select')
  select.addEventListener('change', handleSelectChange)

  const form = document.querySelector('form')
  form.addEventListener('submit', handleSubmit)
});



const handleButtonClick = function (){
  console.log('Button has been clicked');
  const buttonResult = document.querySelector('#button-result')
  buttonResult.textContent = 'This button has been clicked'
};

const handleKeyboard = function (event) {
  console.log('Input done!');
  const inputResult = document.querySelector('#input-result')
  inputResult.textContent = `Input recieved is : ${event.target.value}`;
}

const handleSelectChange = function (event) {
  console.log('select event has happened');
  const selectedResult = document.querySelector('#select-result')
  selectedResult.textContent  = `You selected ${event.target.value}`
}

const handleSubmit = function(event) {
  // console.log('Form submited!');
  event.preventDefault();
  console.log(event.target.first_name.value);
  const formResult = document.querySelector('#form-result');
  formResult.textContent = `Your name is ${event.target.first_name.value} ${event.target.last_name.value}`
  }