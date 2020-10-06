'use strict';

/**
 * MyForm : a class that control a form
 */
var MyForm = function MyForm() {
  
}

/**
 * generateInput : return an input with a type and a placeholder
 * @param {String} type : the type of the input
 * @param {String} placeholder : the placeholder of the input
 */
MyForm.prototype.generateInput = function(type, placeholder) {
  var input = document.createElement('input');
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

/**
 * addForm : add a form in the html file
 */
MyForm.prototype.addForm = function() {
  var form = document.createElement('form');
  var inputs = {
    'lastName': this.generateInput('text', 'Last name'),
    'firstName': this.generateInput('text', 'First name'),
    'email': this.generateInput('email', 'Email'),
    'password': this.generateInput('password', 'password')
  }
  for (const key in inputs) {
    form.appendChild(inputs[key]);
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