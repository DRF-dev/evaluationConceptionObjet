'use strict';

/**
 * MyForm : a class that control a form
 */
var MyForm = function MyForm() {
  
}

/**
 * generateInput : return an input with a type and a placeholder
 * @param {String} element A html's element
 * @param {String} type the type of the input
 * @param {String} placeholder the placeholder of the input
 */
MyForm.prototype.generateElement = function(element, type, placeholder = undefined, textContent = undefined) {
  var container = document.createElement('div');
  var element = document.createElement(element);
  element.type = type;
  placeholder? element.placeholder = placeholder : null;
  textContent? element.textContent = textContent : null;
  container.appendChild(element);
  return container;
}

/**
 * addForm : add a form in the html file
 */
MyForm.prototype.addForm = function() {
  var form = document.createElement('form');
  var html = {
    'lastName': this.generateElement('input', 'text', 'Last name'),
    'firstName': this.generateElement('input', 'text', 'First name'),
    'email': this.generateElement('input', 'email', 'Email'),
    'password': this.generateElement('input', 'password', 'password'),
    'button': this.generateElement('button', 'submit', null, 'Envoyer')
  }
  for (const key in html) {
    form.appendChild(html[key]);
  }
  document.body.appendChild(form);
}

/**
 * run : run this script
 */
MyForm.prototype.run = function() {
  this.addForm();
}

var form = new MyForm();
form.run();