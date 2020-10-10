'use strict';

/**
 * MyForm : a class that control a form
 */
var MyForm = function MyForm() {
  
}

/**
 * generateInput : return an input with a type and a placeholder
 * @param {string} element the html element
 * @param {string} type the type of the input or the button (text, submit ...)
 * @param {string} className the class of the element
 * @param {string | undefined} placeholder if it is an input, the placeholder
 * @param {string | undefined} textContent the text content of the element
 */
MyForm.prototype.generateElement = function(element, type, className, placeholder = undefined, textContent = undefined) {
  var container = document.createElement('div');
  var element = document.createElement(element);
  element.type = type;
  element.className = className;
  placeholder? element.placeholder = placeholder : null;
  textContent? element.textContent = textContent : null;
  container.appendChild(element);
  return container;
}

/**
 * generateSmall : Generation of a html element 'small' if we have an error
 * @param {boolean} condition the condition if the input have an error
 * @param {string} className the name of the class that show us the error
 * @param {string} errorMessage the content of the error message
 * @param {Element} element the element that we will modify if an error exist
 */
MyForm.prototype.generateSmall = function(condition, className, errorMessage, element) {
  //Select the html element smal if it exist
  var querySelectSmall = document.querySelector('.' + className) 
  if(condition) {
    if (querySelectSmall) {
      return;
    }
    var small = this.generateElement('small', null, className, null, errorMessage);
    element.parentElement.appendChild(small);
    element.style.borderColor = 'red';
    return;
  }
  if (querySelectSmall) {
    var parentSelectSmall = querySelectSmall.parentElement
    element.parentElement.removeChild(parentSelectSmall)
  }
  element.style.borderColor = 'green';
}

/**
 * manageForm : manage a form in the html file
 */
MyForm.prototype.addForm = function() {
  var form = document.createElement('form');
  var html = {
    'lastName': this.generateElement('input', 'text', 'lastName', 'Last name'),
    'firstName': this.generateElement('input', 'text', 'firstName', 'First name'),
    'email': this.generateElement('input', 'email', 'mail', 'Email'),
    'password': this.generateElement('input', 'password', 'password', 'password'),
    'button': this.generateElement('button', 'submit', 'submitButton', null, 'Envoyer')
  }
  for (const key in html) {
    form.appendChild(html[key]);
  }
  document.body.appendChild(form);
  return html;
}

/**
 * verifyInputs : verification that the inputs have a correct value
 * @param {Object} html object that contain all html elements created
 */
MyForm.prototype.verifyInputs = function(html) {
  for (const key in html) {
    var htmlElement = document.querySelector('.' + html[key].children[0].className) 
    htmlElement.addEventListener('change', function(e) {
      return this.validator(e.target.className);
    }.bind(this))
  }
}

/**
 * validInputs : verify if the inputs have valid values
 * @param {string} htmlClass a css class 
 */
MyForm.prototype.validator = function(htmlClass) {
  var element = document.querySelector('.' + htmlClass);
  var regex = {
    'mail': /^[.a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-z]{2,3}$/,
    'password': /[a-z]+[A-Z]+[0-9]+/
  }
  switch (htmlClass) {
    case 'lastName':
      this.generateSmall(element.value.length === 0, 'smallLastName', 'Champs "last name" vide', element);
      break;
    case 'firstName':
      this.generateSmall(element.value.length === 0, 'smallFirstName', 'Champs "first name" vide', element)
      break;
    case 'mail':
      this.generateSmall(!regex.mail.test(element.value), 'smallMail', 'Email incorrect', element)
      break;
    case 'password':
      this.generateSmall(!regex.password.test(element.value), 'smallPassword', 'Password incorrect, il doit contenir une majuscule, une minuscule et un chiffre', element)
      break;
    default:
      alert('Error: la class n\'existe pas')
      break;
  }
}

/**
 * run : run this script
 */
MyForm.prototype.run = function() {
  var htmlElements = this.addForm();
  this.verifyInputs(htmlElements);
}

var form = new MyForm();
form.run();