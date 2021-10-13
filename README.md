# Learning how to use forms
## Why are forms useful?
 - We use it because it gives us easy access to the form fields.
  - we can wrap the content in a form.
## Some useful things to do when making forms
 - always make sure to ``` event.preventDefault() ``` when making a form so the submit button does not take you to the place where the information is posted.
 - You can turn any value into a number by using an old function called ```Number()``` where the parameters you pass into the functions are turned into numbers instead of strings.
## Including an Output element
- Including this into an adding machine is useful because it will display the output to the user without having to open the console. You can do this by adding the ```<output></output>``` element to your form. Make sure to give it an id, for more robust coding. You can then enter that output into your function giving and adding the created value from the function and also telling it out put the number as a value. ```form.total.value = total;```
