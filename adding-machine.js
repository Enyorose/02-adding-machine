const form = document.querySelector('form')

const handleSubmit = function(event){
  //stop form from submitting and refreshing the page
  event.preventDefault();

  //calculate total
  const total = Number(form.first.value) + Number (form.second.value);

  //log total to output
  form.total.value = total;

  console.log(total);
}

form.addEventListener('submit', handleSubmit);

console.log(form);